// services/pdfExportService.ts

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
): Promise<number> => {
    let yPos = startYPos;

    // 1. Capture the section header (title and subtitle)
    const headerDiv = document.createElement('div');
    headerDiv.className = 'bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200';
    headerDiv.style.width = '1280px';

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

        if (yPos + categoryPdfHeight > pdfHeight - pageMargin) {
            pdf.addPage();
            yPos = pageMargin;
        }

        pdf.addImage(categoryImgData, 'PNG', pageMargin, yPos, contentWidth, categoryPdfHeight);
        yPos += categoryPdfHeight + 3;
    }
    return yPos;
};

/**
 * Loads an image from a URL and converts it to a Base64 data URL using an Image element.
 * This is more reliable than fetch for canvas operations.
 */
const imageToDataUrl = (url: string): Promise<string | null> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // This is crucial for preventing canvas tainting
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    console.error('Could not get 2D context for image conversion.');
                    resolve(null); // Resolve with null on failure
                    return;
                }
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            } catch (error) {
                 console.error(`Error converting image to data URL on canvas for path: ${url}`, error);
                 resolve(null);
            }
        };
        img.onerror = () => {
            console.error(`Error loading image from path: ${url}`);
            resolve(null); // Resolve with null if the image fails to load
        };
        img.src = url;
    });
};


/**
 * Creates a semi-transparent version of an image using canvas
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
 */
const expandAllFundSections = (): HTMLButtonElement[] => {
    const expandedButtons: HTMLButtonElement[] = [];

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

    const buttons = fundSection.querySelectorAll('button');

    buttons.forEach(button => {
        const chevron = button.querySelector('svg');

        if (chevron) {
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
 */
export const exportDashboardToPDF = async (
    onProgressUpdate: (message: string) => void
): Promise<void> => {
    const expandedButtons: HTMLButtonElement[] = [];

    // Define SVG fallbacks
    const iconSparklesSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#2563eb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="9" /></svg>';
    const iconSparklesDataUrl = `data:image/svg+xml;base64,${btoa(iconSparklesSvg)}`;
    
    const watermarkIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="9" /></svg>';
    const watermarkIconDataUrl = `data:image/svg+xml;base64,${btoa(watermarkIconSvg)}`;


    try {
        onProgressUpdate('Initializing PDF export...');
        const { jsPDF } = jspdf;
        const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const pageMargin = 15;
        const contentWidth = pdfWidth - pageMargin * 2;
        let yPos = 40;

        // 1. Expand all fund sections before capturing
        onProgressUpdate('Preparing sections...');
        const expandedButtonsList = expandAllFundSections();
        expandedButtons.push(...expandedButtonsList);

        await new Promise(resolve => setTimeout(resolve, 500));

        // 2. Pre-load logo images
        onProgressUpdate('Loading images...');
        const [logoFullDataUrl, logoIconDataUrl] = await Promise.all([
            imageToDataUrl('/assets/logoFull.png'),
            imageToDataUrl('/assets/logoIcon.png')
        ]);

        // 3. Render the header with fallback
        if (logoFullDataUrl) {
            const logoWidth = 50;
            const logoHeight = (137 / 512) * logoWidth;
            const logoX = (pdfWidth - logoWidth) / 2;
            const logoY = 15;

            pdf.addImage(logoFullDataUrl, 'PNG', logoX, logoY, logoWidth, logoHeight);

            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105);
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, logoY + logoHeight + 5, { align: 'center' });
        } else {
            // Icon-based fallback
            const iconSize = 20; // in mm
            const iconX = (pdfWidth - iconSize) / 2;
            const iconY = 12;

            pdf.addImage(iconSparklesDataUrl, 'SVG', iconX, iconY, iconSize, iconSize);

            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105); // #475569 slate-600
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, iconY + iconSize + 3, { align: 'center' });
        }

        pdf.setDrawColor(226, 232, 240);
        pdf.setLineWidth(0.5);
        pdf.line(pageMargin, 35, pdfWidth - pageMargin, 35);

        // 4. Create transparent watermark
        let watermarkDataUrl: string | null = null;
        if (logoIconDataUrl) {
            try {
                onProgressUpdate('Preparing watermark...');
                watermarkDataUrl = await createTransparentImage(logoIconDataUrl, 0.08);
            } catch (error) {
                console.warn('Could not create watermark, continuing without it:', error);
            }
        }

        // 5. Find all sections
        const sections = document.querySelectorAll('.pdf-export-section');

        if (sections.length === 0) {
            throw new Error('No sections found with class "pdf-export-section"');
        }

        // 6. Render sections
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i] as HTMLElement;
            onProgressUpdate(`Rendering section ${i + 1} of ${sections.length}...`);

            const isFundRecommendations = section.querySelector('h2')?.textContent?.trim() === 'Fund Recommendations';

            if (isFundRecommendations) {
                yPos = await renderFundRecommendationsSection(section, pdf, pageMargin, contentWidth, pdfHeight, yPos);

                if (yPos > pdfHeight - pageMargin * 3) {
                    pdf.addPage();
                    yPos = pageMargin;
                }
            } else {
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

                if (yPos + pdfImgHeight > pdfHeight - pageMargin) {
                    pdf.addPage();
                    yPos = pageMargin;
                }

                pdf.addImage(imgData, 'PNG', pageMargin, yPos, contentWidth, pdfImgHeight);
                yPos += pdfImgHeight + 5;
            }
        }

        // 7. Add watermark
        onProgressUpdate('Adding watermark...');
        const totalPages = pdf.internal.getNumberOfPages();
        const watermarkSize = 100;

        for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);

            if (watermarkDataUrl) {
                pdf.addImage(
                    watermarkDataUrl,
                    'PNG',
                    (pdfWidth - watermarkSize) / 2,
                    (pdfHeight - watermarkSize) / 2,
                    watermarkSize,
                    watermarkSize
                );
            } else {
                // Icon watermark fallback
                const gState = new (jspdf as any).GState({ opacity: 0.08 });
                pdf.setGState(gState);

                pdf.addImage(
                    watermarkIconDataUrl,
                    'SVG',
                    (pdfWidth - watermarkSize) / 2,
                    (pdfHeight - watermarkSize) / 2,
                    watermarkSize,
                    watermarkSize
                );

                pdf.setGState(new (jspdf as any).GState({ opacity: 1 }));
            }
        }

        onProgressUpdate('Saving PDF...');
        pdf.save('SIP-Buddy-Investment-Plan.pdf');

    } catch (error) {
        console.error("A critical error occurred during PDF generation:", error);
        throw new Error(`Sorry, an error occurred while generating the PDF. ${error instanceof Error ? error.message : 'Please check the console for details.'}`);
    } finally {
        if (expandedButtons.length > 0) {
            collapseFundSections(expandedButtons);
        }
    }
}