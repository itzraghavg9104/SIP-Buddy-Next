// services/pdfExportService.ts
import { logoFull, logoIcon } from '../assets/logo';
import { InvestmentPlan, UserProfile } from '../types';

// Declare global variables for CDN libraries to inform TypeScript
declare const jspdf: any;
declare const html2canvas: any;

/**
 * Renders the Fund Recommendations section with intelligent page breaking
 * Captures the header and each fund category separately to allow proper pagination
 */
const renderFundRecommendationsSection = async (
    section: HTMLElement,
    pdf: any,
    pageMargin: number,
    contentWidth: number,
    pdfHeight: number,
    startYPos: number
): Promise<void> => {
    let yPos = startYPos;
    
    // 1. Capture the section header (title and subtitle)
    const headerDiv = document.createElement('div');
    headerDiv.className = 'bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200';
    headerDiv.style.width = '1280px'; // Match windowWidth
    
    const titleEl = section.querySelector('h2');
    const subtitleEl = section.querySelector('p.text-slate-500');
    
    if (titleEl) headerDiv.appendChild(titleEl.cloneNode(true));
    if (subtitleEl) headerDiv.appendChild(subtitleEl.cloneNode(true));
    
    document.body.appendChild(headerDiv);
    
    const headerCanvas = await html2canvas(headerDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        windowWidth: 1280,
        logging: false,
    });
    
    document.body.removeChild(headerDiv);
    
    if (headerCanvas.width > 0 && headerCanvas.height > 0) {
        const headerImgData = headerCanvas.toDataURL('image/png');
        const headerRatio = headerCanvas.width / contentWidth;
        const headerPdfHeight = headerCanvas.height / headerRatio;
        
        if (yPos + headerPdfHeight > pdfHeight - pageMargin) {
            pdf.addPage();
            yPos = pageMargin;
        }
        
        pdf.addImage(headerImgData, 'PNG', pageMargin, yPos, contentWidth, headerPdfHeight);
        yPos += headerPdfHeight + 3;
    }
    
    // 2. Capture each fund category individually
    const fundCategories = section.querySelectorAll('.border.border-slate-200.rounded-lg.bg-white');
    
    for (let i = 0; i < fundCategories.length; i++) {
        const category = fundCategories[i] as HTMLElement;
        
        const categoryCanvas = await html2canvas(category, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            windowWidth: 1280,
            logging: false,
        });
        
        if (categoryCanvas.width === 0 || categoryCanvas.height === 0) {
            console.warn("Skipping empty fund category");
            continue;
        }
        
        const categoryImgData = categoryCanvas.toDataURL('image/png');
        const categoryRatio = categoryCanvas.width / contentWidth;
        const categoryPdfHeight = categoryCanvas.height / categoryRatio;
        
        // Check if this category fits on the current page
        if (yPos + categoryPdfHeight > pdfHeight - pageMargin) {
            pdf.addPage();
            yPos = pageMargin;
        }
        
        pdf.addImage(categoryImgData, 'PNG', pageMargin, yPos, contentWidth, categoryPdfHeight);
        yPos += categoryPdfHeight + 3;
    }
};

/**
 * Fetches an image from a URL and converts it to a Base64 data URL.
 * This is the most robust way to embed images in jsPDF, as it avoids
 * CORS, network, or caching issues that can occur with direct URL linking.
 * @param url The URL of the image to fetch.
 * @returns A promise that resolves with the data URL string or null if failed.
 */
const imageToDataUrl = async (url: string): Promise<string | null> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error(`Error converting image to data URL for path: ${url}`, error);
        return null;
    }
};

/**
 * Creates a semi-transparent version of an image using canvas
 * This is a more reliable cross-browser solution than using PDF graphics states
 */
const createTransparentImage = async (dataUrl: string, opacity: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Could not get canvas context'));
                return;
            }
            ctx.globalAlpha = opacity;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => reject(new Error('Failed to load image for transparency'));
        img.src = dataUrl;
    });
};

/**
 * Expands all collapsible sections in the fund recommendations
 * Returns array of buttons that were clicked for later restoration
 */
const expandAllFundSections = (): HTMLButtonElement[] => {
    const expandedButtons: HTMLButtonElement[] = [];
    
    // Find the Fund Recommendations section by looking through all pdf-export-section elements
    const allSections = document.querySelectorAll('.pdf-export-section');
    let fundSection: Element | null = null;
    
    for (const section of allSections) {
        const heading = section.querySelector('h2');
        if (heading?.textContent?.trim() === 'Fund Recommendations') {
            fundSection = section;
            break;
        }
    }
    
    if (!fundSection) {
        console.warn('Fund Recommendations section not found');
        return expandedButtons;
    }
    
    // Find all collapse/expand buttons in the fund section
    // These are the buttons that contain the allocation percentage and chevron icon
    const buttons = fundSection.querySelectorAll('button');
    
    buttons.forEach(button => {
        // Check if this button has a chevron icon (IconChevronDown)
        const chevron = button.querySelector('svg');
        
        if (chevron) {
            // Check if the chevron is NOT rotated (meaning section is collapsed)
            const isCollapsed = !chevron.classList.contains('rotate-180');
            
            if (isCollapsed) {
                expandedButtons.push(button as HTMLButtonElement);
                (button as HTMLButtonElement).click();
            }
        }
    });
    
    console.log(`Expanded ${expandedButtons.length} fund sections`);
    return expandedButtons;
};

/**
 * Collapses all fund sections that were expanded
 */
const collapseFundSections = (expandedButtons: HTMLButtonElement[]): void => {
    console.log(`Collapsing ${expandedButtons.length} fund sections`);
    expandedButtons.forEach(button => {
        button.click();
    });
};

/**
 * Generates a PDF of the investment dashboard.
 * @param onProgressUpdate Callback function to update the UI with progress status.
 */
export const exportDashboardToPDF = async (
    onProgressUpdate: (message: string) => void
): Promise<void> => {
    const expandedButtons: HTMLButtonElement[] = [];
    
    try {
        onProgressUpdate('Initializing PDF export...');
        const { jsPDF } = jspdf;
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const pageMargin = 15;
        const contentWidth = pdfWidth - pageMargin * 2;
        let yPos = 40; // Initial Y position after the header (increased for proper spacing)

        // 1. Expand all fund sections before capturing
        onProgressUpdate('Preparing sections...');
        const expandedButtonsList = expandAllFundSections();
        expandedButtons.push(...expandedButtonsList);
        
        // Wait for expansion animations to complete (increased for smoother rendering)
        await new Promise(resolve => setTimeout(resolve, 500));

        // 2. Pre-load all images concurrently for performance
        onProgressUpdate('Loading images...');
        const [logoFullDataUrl, logoIconDataUrl] = await Promise.all([
            imageToDataUrl(logoFull),
            imageToDataUrl(logoIcon)
        ]);

        // 3. Render the header programmatically with fallback
        if (logoFullDataUrl) {
            const logoWidth = 50;
            const logoHeight = (137 / 512) * logoWidth; // Maintain aspect ratio (adjust based on actual logo)
            const logoX = (pdfWidth - logoWidth) / 2;
            const logoY = 15;
            
            pdf.addImage(logoFullDataUrl, 'PNG', logoX, logoY, logoWidth, logoHeight);
            
            // Add subtitle below logo with proper spacing
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105); // RGB for #475569
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, logoY + logoHeight + 5, { align: 'center' });
        } else {
            // Fallback: Text-only header
            pdf.setFontSize(24);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(37, 99, 235); // Blue color
            pdf.text('SIP Buddy', pdfWidth / 2, 20, { align: 'center' });
            
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105);
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, 28, { align: 'center' });
        }

        // Add separator line
        pdf.setDrawColor(226, 232, 240); // RGB for #e2e8f0
        pdf.setLineWidth(0.5);
        pdf.line(pageMargin, 35, pdfWidth - pageMargin, 35);

        // 4. Create transparent watermark if logo icon is available
        let watermarkDataUrl: string | null = null;
        if (logoIconDataUrl) {
            try {
                onProgressUpdate('Preparing watermark...');
                watermarkDataUrl = await createTransparentImage(logoIconDataUrl, 0.08);
            } catch (error) {
                console.warn('Could not create watermark, continuing without it:', error);
            }
        }

        // 5. Find all sections designated for export
        const sections = document.querySelectorAll('.pdf-export-section');
        
        if (sections.length === 0) {
            throw new Error('No sections found with class "pdf-export-section"');
        }

        // 6. Iterate through sections in their natural DOM order
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i] as HTMLElement;
            onProgressUpdate(`Rendering section ${i + 1} of ${sections.length}...`);

            // Check if this is the Fund Recommendations section
            const isFundRecommendations = section.querySelector('h2')?.textContent?.trim() === 'Fund Recommendations';

            if (isFundRecommendations) {
                // Handle Fund Recommendations section specially with sub-section rendering
                await renderFundRecommendationsSection(section, pdf, pageMargin, contentWidth, pdfHeight, yPos);
                yPos = pageMargin; // Reset for next section after a new page
            } else {
                // Regular section rendering (including disclaimer in its natural position)
                const canvas = await html2canvas(section, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    windowWidth: 1280,
                    logging: false,
                });
                
                if (canvas.width === 0 || canvas.height === 0) {
                    console.warn("Skipping empty section in PDF export:", section.className);
                    continue;
                }

                const imgData = canvas.toDataURL('image/png');
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = imgWidth / contentWidth;
                const pdfImgHeight = imgHeight / ratio;

                // Pagination logic: check if the image fits on the current page
                if (yPos + pdfImgHeight > pdfHeight - pageMargin) {
                    pdf.addPage();
                    yPos = pageMargin;
                }

                pdf.addImage(imgData, 'PNG', pageMargin, yPos, contentWidth, pdfImgHeight);
                yPos += pdfImgHeight + 5;
            }
        }

        // 7. Add watermark to all pages if available
        if (watermarkDataUrl) {
            onProgressUpdate('Adding watermark...');
            const totalPages = pdf.internal.getNumberOfPages();
            const watermarkSize = 100;
            
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                // Simply add the pre-made transparent image - no graphics state needed
                pdf.addImage(
                    watermarkDataUrl, 
                    'PNG', 
                    (pdfWidth - watermarkSize) / 2, 
                    (pdfHeight - watermarkSize) / 2, 
                    watermarkSize, 
                    watermarkSize
                );
            }
        }

        onProgressUpdate('Saving PDF...');
        pdf.save('SIP-Buddy-Investment-Plan.pdf');

    } catch (error) {
        console.error("A critical error occurred during PDF generation:", error);
        throw new Error(`Sorry, an error occurred while generating the PDF. ${error instanceof Error ? error.message : 'Please check the console for details.'}`);
    } finally {
        // 8. Always collapse the sections back to their original state
        if (expandedButtons.length > 0) {
            collapseFundSections(expandedButtons);
        }
    }
}