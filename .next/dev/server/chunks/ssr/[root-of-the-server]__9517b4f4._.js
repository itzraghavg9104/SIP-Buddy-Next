module.exports = [
"[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
const ComparisonModal = ({ funds, onClose })=>{
    const metrics = [
        {
            name: 'Fund House',
            key: 'fundHouse'
        },
        {
            name: '3Y Returns (CAGR)',
            key: 'threeYearReturns'
        },
        {
            name: '5Y Returns (CAGR)',
            key: 'fiveYearReturns'
        },
        {
            name: 'Expense Ratio',
            key: 'expenseRatio'
        },
        {
            name: 'Description',
            key: 'description'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "comparison-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "comparison-title",
                                className: "text-xl font-semibold text-slate-800",
                                children: "Fund Comparison"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors",
                                "aria-label": "Close comparison modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconX"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-auto p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left font-semibold text-slate-600 p-3 sticky top-0 bg-white z-10",
                                                    children: "Metric"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                funds.map((fund)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left font-semibold text-slate-800 p-3 min-w-[200px] sticky top-0 bg-white z-10",
                                                        children: fund.name
                                                    }, fund.name, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-slate-200 last:border-b-0 hover:bg-slate-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-semibold text-slate-600 p-3 align-top",
                                                        children: metric.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    funds.map((fund)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: `p-3 align-top text-slate-700 ${metric.key === 'description' ? 'text-xs leading-5' : ''}`,
                                                            children: fund[metric.key]
                                                        }, fund.name, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, metric.key, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
                lineNumber: 69,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ComparisonModal;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/Desktop/SIP-Buddy/services/pdfExportService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportDashboardToPDF",
    ()=>exportDashboardToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$assets$2f$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/assets/logo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/html2canvas/dist/html2canvas.esm.js [app-ssr] (ecmascript)");
;
;
;
// --- ADDED IMPORT ---
// Fix: Removed the import of the IconSparkles component because it cannot be passed as a URL.
// The icon will be defined as an SVG string and converted to a data URL instead.
// import { IconSparkles } from '../components/Icons';
// import { InvestmentPlan, UserProfile } from '../types'; // This was in the original, uncomment if needed
// Declare global variables for CDN libraries to inform TypeScript
// Fix: Defined the IconSparkles SVG as a string to be programmatically converted to a data URL.
const iconSparklesSVGString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#2563eb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="9" /></svg>`;
/**
 * Renders the Fund Recommendations section with intelligent page breaking
 * Captures the header and each fund category separately to allow proper pagination
 */ const renderFundRecommendationsSection = async (section, pdf, pageMargin, contentWidth, pdfHeight, startYPos)=>{
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
    const headerCanvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(headerDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        windowWidth: 1280,
        logging: false
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
    for(let i = 0; i < fundCategories.length; i++){
        const category = fundCategories[i];
        const categoryCanvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(category, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            windowWidth: 1280,
            logging: false
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
    return yPos; // Return the final Y position
};
/**
 * Fetches an image from a URL and converts it to a Base64 data URL.
 * This is the most robust way to embed images in jsPDF, as it avoids
 * CORS, network, or caching issues that can occur with direct URL linking.
 * @param url The URL of the image to fetch.
 * @returns A promise that resolves with the data URL string or null if failed.
 */ const imageToDataUrl = async (url)=>{
    // ... (This function is unchanged)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }
        const blob = await response.blob();
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>resolve(reader.result);
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
 */ const createTransparentImage = async (dataUrl, opacity)=>{
    // ... (This function is unchanged)
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>{
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
        img.onerror = ()=>reject(new Error('Failed to load image for transparency'));
        img.src = dataUrl;
    });
};
/**
 * Expands all collapsible sections in the fund recommendations
 * Returns array of buttons that were clicked for later restoration
 */ const expandAllFundSections = ()=>{
    // ... (This function is unchanged)
    const expandedButtons = [];
    // Find the Fund Recommendations section by looking through all pdf-export-section elements
    // Convert NodeList to Array to avoid iteration issues
    const allSections = Array.from(document.querySelectorAll('.pdf-export-section'));
    let fundSection = null;
    for (const section of allSections){
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
    buttons.forEach((button)=>{
        // Check if this button has a chevron icon (IconChevronDown)
        const chevron = button.querySelector('svg');
        if (chevron) {
            // Check if the chevron is NOT rotated (meaning section is collapsed)
            const isCollapsed = !chevron.classList.contains('rotate-180');
            if (isCollapsed) {
                expandedButtons.push(button);
                button.click();
            }
        }
    });
    console.log(`Expanded ${expandedButtons.length} fund sections`);
    return expandedButtons;
};
/**
 * Collapses all fund sections that were expanded
 */ const collapseFundSections = (expandedButtons)=>{
    // ... (This function is unchanged)
    console.log(`Collapsing ${expandedButtons.length} fund sections`);
    expandedButtons.forEach((button)=>{
        button.click();
    });
};
const exportDashboardToPDF = async (onProgressUpdate)=>{
    const expandedButtons = [];
    try {
        onProgressUpdate('Initializing PDF export...');
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
        });
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
        await new Promise((resolve)=>setTimeout(resolve, 500));
        // 2. Pre-load all images concurrently for performance
        onProgressUpdate('Loading images...');
        // Fix: Removed the IconSparkles component from Promise.all, as it is not a URL.
        const [logoFullDataUrl, logoIconDataUrl] = await Promise.all([
            imageToDataUrl(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$assets$2f$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoFull"]),
            imageToDataUrl(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$assets$2f$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoIcon"])
        ]);
        // Fix: Created a data URL for the SVG icon programmatically.
        const iconSparklesDataUrl = `data:image/svg+xml;base64,${btoa(iconSparklesSVGString)}`;
        // 3. Render the header programmatically with fallback
        if (logoFullDataUrl) {
            const logoWidth = 50;
            const logoHeight = 137 / 512 * logoWidth; // Maintain aspect ratio (adjust based on actual logo)
            const logoX = (pdfWidth - logoWidth) / 2;
            const logoY = 15;
            pdf.addImage(logoFullDataUrl, 'PNG', logoX, logoY, logoWidth, logoHeight);
            // Add subtitle below logo with proper spacing
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105); // RGB for #475569
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, logoY + logoHeight + 5, {
                align: 'center'
            });
        } else {
            // --- MODIFIED: Updated fallback logic ---
            // Fallback: Text-based header matching Header component style
            const sipText = 'SIP Buddy';
            const textY = 22; // Vertical position for text and icon
            if ("TURBOPACK compile-time truthy", 1) {
                // Image-based fallback (like Header.tsx)
                pdf.setFontSize(20);
                pdf.setFont('helvetica', 'bold');
                const textWidth = pdf.getTextWidth(sipText);
                const iconSize = 8; // approx h-7/w-7 in mm
                const gap = 2;
                const totalWidth = iconSize + gap + textWidth;
                const iconX = (pdfWidth - totalWidth) / 2;
                const textX = iconX + iconSize + gap;
                // Set text color for "SIP Buddy" (matching slate-800 from your Header.tsx)
                pdf.setTextColor(51, 65, 85); // RGB for #334155 (slate-800)
                pdf.text(sipText, textX, textY, {
                    baseline: 'middle'
                });
                // Add the sparkles icon (assuming it's blue-600)
                // Fix: Changed the image format from 'PNG' to 'SVG' to correctly render the data URL.
                pdf.addImage(iconSparklesDataUrl, 'SVG', iconX, textY - iconSize / 2, iconSize, iconSize);
            } else //TURBOPACK unreachable
            ;
            // Add subtitle below
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(71, 85, 105);
            pdf.text('Your Personalized Investment Plan', pdfWidth / 2, 30, {
                align: 'center'
            });
        }
        // Add separator line
        pdf.setDrawColor(226, 232, 240); // RGB for #e2e8f0
        pdf.setLineWidth(0.5);
        pdf.line(pageMargin, 35, pdfWidth - pageMargin, 35);
        // 4. Create transparent watermark if logo icon is available
        let watermarkDataUrl = null;
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
        for(let i = 0; i < sections.length; i++){
            const section = sections[i];
            onProgressUpdate(`Rendering section ${i + 1} of ${sections.length}...`);
            // Check if this is the Fund Recommendations section
            const isFundRecommendations = section.querySelector('h2')?.textContent?.trim() === 'Fund Recommendations';
            if (isFundRecommendations) {
                // Handle Fund Recommendations section specially with sub-section rendering
                // Corrected: Assign the returned yPos back
                yPos = await renderFundRecommendationsSection(section, pdf, pageMargin, contentWidth, pdfHeight, yPos);
                // If the fund section ended near the bottom, force a new page for the next section
                if (yPos > pdfHeight - pageMargin * 3) {
                    pdf.addPage();
                    yPos = pageMargin;
                }
            } else {
                // Regular section rendering (including disclaimer in its natural position)
                const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(section, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    windowWidth: 1280,
                    logging: false
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
        // 7. Add watermark to all pages (with text fallback)
        onProgressUpdate('Adding watermark...');
        const totalPages = pdf.internal.pages.length - 1; // -1 because pages array has a null first element
        const watermarkSize = 100;
        for(let i = 1; i <= totalPages; i++){
            pdf.setPage(i);
            if (watermarkDataUrl) {
                // SUCCESS CASE: Add the transparent image watermark
                pdf.addImage(watermarkDataUrl, 'PNG', (pdfWidth - watermarkSize) / 2, (pdfHeight - watermarkSize) / 2, watermarkSize, watermarkSize);
            } else {
                // FALLBACK CASE: Add a programmatic text watermark
                const fallbackText = 'SIP Buddy';
                // Set text properties
                pdf.setFontSize(50);
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(150, 150, 150); // Light gray
                // Set transparency using a graphics state
                const gState = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].GState({
                    opacity: 0.08
                });
                pdf.setGState(gState);
                // Add centered, rotated text
                pdf.text(fallbackText, pdfWidth / 2, pdfHeight / 2, {
                    align: 'center',
                    baseline: 'middle',
                    angle: -45 // Rotate the text
                });
                // Reset graphics state to avoid affecting other elements
                pdf.setGState(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].GState({
                    opacity: 1
                }));
            }
        }
        onProgressUpdate('Saving PDF...');
        pdf.save('SIP-Buddy-Investment-Plan.pdf');
    } catch (error) {
        console.error("A critical error occurred during PDF generation:", error);
        throw new Error(`Sorry, an error occurred while generating the PDF. ${error instanceof Error ? error.message : 'Please check the console for details.'}`);
    } finally{
        // 8. Always collapse the sections back to their original state
        if (expandedButtons.length > 0) {
            collapseFundSections(expandedButtons);
        }
    }
};
}),
"[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
const NotificationModal = ({ isOpen, onClose, title, message, children })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "notification-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
                            className: "h-6 w-6 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "notification-title",
                        className: "text-xl font-semibold text-slate-800 mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-6",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                        children: "Got it"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-pop-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-modal-pop-in {
            animation: modal-pop-in 0.2s ease-out;
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NotificationModal;
}),
"[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$ComparisonModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/ComparisonModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$pdfExportService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/pdfExportService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$NotificationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$firestoreService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/firestoreService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/context/GlobalContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const COLORS = [
    '#3b82f6',
    '#10b981',
    '#ef4444',
    '#f97316',
    '#a855f7',
    '#84cc16',
    '#f59e0b',
    '#06b6d4',
    '#ec4899',
    '#6366f1'
];
const CustomTooltip = ({ active, payload })=>{
    if (active && payload && payload.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-2 border border-gray-200 rounded shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "label",
                children: `${payload[0].name} : ${payload[0].value}%`
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
const formatCurrency = (value)=>`₹${new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 0
    }).format(value)}`;
const formatLargeCurrency = (value)=>{
    if (value >= 10000000) {
        return `₹${(value / 10000000).toFixed(1)}Cr`;
    }
    if (value >= 100000) {
        return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${(value / 1000).toFixed(0)}K`;
};
// --- Interpolation Helper ---
const interpolateGrowthData = (data)=>{
    if (!data || data.length < 2) return data;
    // Ensure data is sorted by year
    const sortedData = [
        ...data
    ].sort((a, b)=>a.year - b.year);
    const result = [];
    const maxYear = sortedData[sortedData.length - 1].year;
    // Keys to interpolate
    const keys = [
        'amountInvested',
        'conservative',
        'expected',
        'aggressive',
        'recovery',
        'crash'
    ];
    for(let i = 0; i < sortedData.length - 1; i++){
        const start = sortedData[i];
        const end = sortedData[i + 1];
        // Push the start point
        if (result.length === 0 || result[result.length - 1].year !== start.year) {
            result.push(start);
        }
        const steps = end.year - start.year;
        for(let j = 1; j < steps; j++){
            const currentYear = start.year + j;
            const fraction = j / steps;
            const interpolatedPoint = {
                year: currentYear
            };
            keys.forEach((key)=>{
                const startVal = start[key];
                const endVal = end[key];
                interpolatedPoint[key] = Math.round(startVal + (endVal - startVal) * fraction);
            });
            result.push(interpolatedPoint);
        }
    }
    // Push final point
    result.push(sortedData[sortedData.length - 1]);
    return result;
};
const SummaryCard = ({ title, value, subtext })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-lg shadow-sm border border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-500",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl sm:text-2xl font-bold text-slate-800 my-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-400",
                children: subtext
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Dashboard = ()=>{
    const { currentPlan, handleSavePlan, handleCreateNewPlan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobalContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [openSections, setOpenSections] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [selectedFundsForComparison, setSelectedFundsForComparison] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isComparisonModalOpen, setIsComparisonModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaveModalOpen, setIsSaveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [planName, setPlanName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveError, setSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [projectionView, setProjectionView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('chart');
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportProgressText, setExportProgressText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasSavedPlans, setHasSavedPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingCheck, setIsLoadingCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Derived state from currentPlan
    const investmentPlan = currentPlan?.planData;
    const userProfile = currentPlan?.userProfile;
    const isPlanSaved = currentPlan?.isSaved;
    const hasCurrentPlan = !!investmentPlan && !!userProfile;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasCurrentPlan) {
            setIsLoadingCheck(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$firestoreService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserPlans"])().then((plans)=>{
                setHasSavedPlans(plans.length > 0);
            }).catch(()=>{
                setHasSavedPlans(false);
            }).finally(()=>{
                setIsLoadingCheck(false);
            });
        }
    }, [
        hasCurrentPlan
    ]);
    // Use memo to calculate interpolated data only when growthProjections change
    const interpolatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!investmentPlan?.growthProjections) return [];
        return interpolateGrowthData(investmentPlan.growthProjections);
    }, [
        investmentPlan?.growthProjections
    ]);
    const handleExportPDF = async ()=>{
        setIsExporting(true);
        setExportProgressText('Starting export...');
        await new Promise((resolve)=>setTimeout(resolve, 500));
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$pdfExportService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportDashboardToPDF"])(setExportProgressText);
        } catch (error) {
            console.error("PDF Export failed in component:", error);
            alert(error instanceof Error ? error.message : "An unknown error occurred during PDF export.");
        } finally{
            setIsExporting(false);
            setExportProgressText('');
        }
    };
    const openSaveModal = ()=>{
        setSaveError(null);
        setIsSaveModalOpen(true);
    };
    const handleSave = async ()=>{
        if (!planName.trim() || isSaving) return;
        setIsSaving(true);
        setSaveError(null);
        try {
            await handleSavePlan(planName.trim());
            setIsSaveModalOpen(false);
            setPlanName('');
        } catch (error) {
            console.error("Error caught in Dashboard handleSave:", error);
            setSaveError(error instanceof Error ? error.message : "An unknown error occurred. Please try again.");
        } finally{
            setIsSaving(false);
        }
    };
    const toggleSection = (category)=>{
        setOpenSections((prev)=>({
                ...prev,
                [category]: !prev[category]
            }));
    };
    const handleCompareSelect = (fund)=>{
        setSelectedFundsForComparison((prevSelected)=>{
            const isSelected = prevSelected.some((f)=>f.name === fund.name);
            if (isSelected) {
                return prevSelected.filter((f)=>f.name !== fund.name);
            } else {
                if (prevSelected.length < 5) {
                    return [
                        ...prevSelected,
                        fund
                    ];
                }
                return prevSelected;
            }
        });
    };
    if (!hasCurrentPlan) {
        if (isLoadingCheck) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-[50vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-slate-500",
                        children: "Checking for saved plans..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 207,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-12 bg-white rounded-xl shadow-md border border-slate-200 max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconLayoutDashboard"], {
                    className: "h-12 w-12 text-slate-400 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-800 mb-2",
                    children: hasSavedPlans ? 'No Plan Selected' : 'Welcome to Your Dashboard'
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 mb-6",
                    children: hasSavedPlans ? 'Please select a plan from your saved plans to view it here.' : "You haven't created or saved any investment plans yet."
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                hasSavedPlans ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/my-plans'),
                    className: "inline-flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconListDetails"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "View My Saved Plans"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/planner'),
                    className: "inline-flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconChartPie"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Create Your First Plan"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const projectionsChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-96 mt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                data: interpolatedData,
                margin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#e0e0e0"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "year",
                        tick: {
                            fontSize: 12
                        },
                        label: {
                            value: 'Years',
                            position: 'insideBottom',
                            offset: -10
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        tickFormatter: formatLargeCurrency,
                        tick: {
                            fontSize: 12
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        formatter: (value)=>formatCurrency(value),
                        labelFormatter: (label)=>`Year ${label}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                        wrapperStyle: {
                            fontSize: "12px",
                            paddingTop: "20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "amountInvested",
                        name: "Amount Invested",
                        stroke: "#8884d8",
                        strokeDasharray: "5 5",
                        dot: false,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "conservative",
                        name: "Conservative",
                        stroke: "#ef4444",
                        dot: false,
                        strokeWidth: 2,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "expected",
                        name: "Expected",
                        stroke: "#3b82f6",
                        dot: false,
                        strokeWidth: 2,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "aggressive",
                        name: "Aggressive",
                        stroke: "#10b981",
                        dot: false,
                        strokeWidth: 2,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "recovery",
                        name: "Recovery",
                        stroke: "#f97316",
                        dot: false,
                        strokeWidth: 2,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                        type: "monotone",
                        dataKey: "crash",
                        name: "Crash",
                        stroke: "#6b7280",
                        dot: false,
                        strokeWidth: 2,
                        isAnimationActive: !isExporting
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const projectionsTable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-sm text-left text-slate-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "text-xs text-slate-700 uppercase bg-slate-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3",
                                children: "Year"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3",
                                children: "Invested"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3 text-red-600",
                                children: "Conservative"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3 text-blue-600",
                                children: "Expected"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3 text-green-600",
                                children: "Aggressive"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3 text-orange-600",
                                children: "Recovery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3 text-gray-600",
                                children: "Crash"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: (investmentPlan.growthProjections || []).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-white border-b hover:bg-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "row",
                                    className: "px-6 py-4 font-medium text-slate-900 whitespace-nowrap",
                                    children: item.year
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.amountInvested)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.conservative)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.expected)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.aggressive)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.recovery)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: formatCurrency(item.crash)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.year, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
            lineNumber: 268,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "dashboard-content",
                className: "max-w-6xl mx-auto space-y-8 bg-white p-4 sm:p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg pdf-export-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
                                        className: "h-5 w-5 text-yellow-400 mr-3 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 302,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: "Important Disclaimer:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "These are AI-generated suggestions for educational purposes only. Past performance does not guarantee future results. Please read all scheme-related documents carefully and consult with a certified financial advisor before investing."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl font-bold text-slate-900",
                                        children: "Your Investment Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 mt-1",
                                        children: [
                                            "Personalized plan for ",
                                            userProfile.investmentGoal
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto",
                                children: [
                                    !isPlanSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openSaveModal,
                                        className: "px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 194
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 246
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 327
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 4l0 4l-6 0l0 -4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 380
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Save Plan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExportPDF,
                                        disabled: isExporting,
                                        className: "px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 disabled:bg-slate-400 min-h-[40px]",
                                        children: isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mb-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: exportProgressText
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "2",
                                                    stroke: "currentColor",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "none",
                                                            d: "M0 0h24v24H0z",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 219
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 271
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 11l5 5l5 -5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 326
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 4l0 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 353
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Export Plan"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCreateNewPlan,
                                        className: "px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors justify-center",
                                        children: "Create New Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Monthly SIP",
                                value: formatCurrency(investmentPlan.monthlySip),
                                subtext: "Recommended investment"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Risk Profile",
                                value: investmentPlan.riskProfile,
                                subtext: "Investment strategy"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Time Horizon",
                                value: `${investmentPlan.timeHorizon} Years`,
                                subtext: "Investment period"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Asset Classes",
                                value: String(investmentPlan.assetClasses),
                                subtext: "Diversified portfolio"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            userProfile.stepUpPercentage && userProfile.stepUpPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Annual Step-Up",
                                value: `${userProfile.stepUpPercentage}%`,
                                subtext: "Growth strategy"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Investment Rationale"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 leading-relaxed",
                                children: investmentPlan.investmentRationale
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Asset Allocation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mb-6",
                                children: [
                                    "Your monthly SIP of ",
                                    formatCurrency(investmentPlan.monthlySip),
                                    " distributed across asset classes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-72",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: investmentPlan.assetAllocation || [],
                                                        dataKey: "value",
                                                        nameKey: "name",
                                                        cx: "50%",
                                                        cy: "50%",
                                                        outerRadius: 110,
                                                        fill: "#8884d8",
                                                        labelLine: false,
                                                        isAnimationActive: !isExporting,
                                                        children: (investmentPlan.assetAllocation || []).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: COLORS[index % COLORS.length]
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 45
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: (investmentPlan.assetAllocation || []).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-3 h-3 rounded-full mr-3",
                                                                    style: {
                                                                        backgroundColor: COLORS[index % COLORS.length]
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-700",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-slate-800",
                                                                    children: formatCurrency(investmentPlan.monthlySip * (item.value / 100))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                    lineNumber: 379,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500 ml-2",
                                                                    children: [
                                                                        item.value,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.name, true, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold",
                                                children: "Investment Growth Projections"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 mt-1",
                                                children: [
                                                    "See how your ",
                                                    formatCurrency(investmentPlan.monthlySip),
                                                    " monthly SIP could grow."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-slate-200 p-1 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setProjectionView('chart'),
                                                className: `px-3 py-1 text-sm font-semibold rounded-md ${projectionView === 'chart' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`,
                                                children: "Chart"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setProjectionView('table'),
                                                className: `px-3 py-1 text-sm font-semibold rounded-md ${projectionView === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`,
                                                children: "Table"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mt-4 mb-2 text-slate-700",
                                        children: "Growth Projection Chart"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    projectionsChart,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mt-6 mb-2 text-slate-700",
                                        children: "Growth Projection Table"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    projectionsTable
                                ]
                            }, void 0, true) : projectionView === 'chart' ? projectionsChart : projectionsTable
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: "Fund Recommendations"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mb-6",
                                children: "AI-suggested mutual funds. Select two or more to compare."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: (investmentPlan.fundRecommendations || []).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 rounded-lg bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSection(category.category),
                                                className: "w-full flex justify-between items-center p-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold",
                                                        children: category.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full mr-4",
                                                                children: [
                                                                    category.allocationPercentage,
                                                                    "% allocation"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconChevronDown"], {
                                                                className: `transition-transform ${openSections[category.category] ? 'rotate-180' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            openSections[category.category] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 pb-4",
                                                children: (category.funds || []).map((fund, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 ${index > 0 ? 'border-t border-slate-200' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                id: `compare-${fund.name.replace(/\s/g, '-')}`,
                                                                                className: "h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer",
                                                                                checked: selectedFundsForComparison.some((f)=>f.name === fund.name),
                                                                                onChange: ()=>handleCompareSelect(fund),
                                                                                disabled: !selectedFundsForComparison.some((f)=>f.name === fund.name) && selectedFundsForComparison.length >= 5
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 435,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: `compare-${fund.name.replace(/\s/g, '-')}`,
                                                                                        className: "font-semibold text-slate-800 cursor-pointer",
                                                                                        children: fund.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                        lineNumber: 444,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-slate-500",
                                                                                        children: fund.fundHouse
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                        lineNumber: 445,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 443,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full",
                                                                        children: "Recommended"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: "3Y Returns"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold",
                                                                                children: fund.threeYearReturns
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 453,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: "5Y Returns"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 456,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold",
                                                                                children: fund.fiveYearReturns
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 457,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 455,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: "Expense Ratio"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 460,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold",
                                                                                children: fund.expenseRatio
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                                lineNumber: 461,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start text-sm text-slate-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
                                                                        className: "w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: fund.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, fund.name, true, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                lineNumber: 430,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, category.category, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    investmentPlan.groundingChunks && investmentPlan.groundingChunks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWorld"], {
                                        className: "h-5 w-5 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Data Sources & References"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mb-4 text-sm",
                                children: "The fund data and recommendations were sourced from the following live links:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: investmentPlan.groundingChunks.map((chunk, index)=>chunk.web && chunk.web.uri ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-sm truncate",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: chunk.web.uri,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-blue-600 hover:underline flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                chunk.web.title || chunk.web.uri
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                            lineNumber: 489,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, index, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 488,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : null)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 479,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$NotificationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSaveModalOpen,
                onClose: ()=>setIsSaveModalOpen(false),
                title: "Save Your Plan",
                message: "Give your investment plan a name to easily identify it later.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: planName,
                            onChange: (e)=>setPlanName(e.target.value),
                            placeholder: "e.g., My Retirement Plan",
                            className: "w-full px-3 py-2 bg-white border border-slate-300 rounded-md",
                            disabled: isSaving
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        saveError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-sm text-left mt-2",
                            children: saveError
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 517,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: !planName.trim() || isSaving,
                            className: "w-full mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 disabled:bg-green-300 flex items-center justify-center",
                            children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Saving..."
                                ]
                            }, void 0, true) : 'Save Plan'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isExporting && selectedFundsForComparison.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsComparisonModalOpen(true),
                className: "fixed bottom-24 right-6 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 z-40 px-5 py-3 flex items-center gap-2 animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        strokeWidth: "2",
                        stroke: "currentColor",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                stroke: "none",
                                d: "M0 0h24v24H0z",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 540,
                                columnNumber: 209
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 9l4 -4l4 4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 540,
                                columnNumber: 261
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M16 15l-4 4l-4 -4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 540,
                                columnNumber: 287
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 12h16"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                                lineNumber: 540,
                                columnNumber: 317
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Compare Selected Funds (",
                            selectedFundsForComparison.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                        lineNumber: 541,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 536,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isComparisonModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$ComparisonModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                funds: selectedFundsForComparison,
                onClose: ()=>setIsComparisonModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 546,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        body { background-color: ${isExporting ? '#FFF' : 'rgb(248 250 252)'}; }
        #dashboard-content { background-color: ${isExporting ? '#FFF' : 'transparent'}; }
        .bg-white { background-color: ${isExporting ? '#FFF' : '#FFF'}; }
        .bg-slate-50 { background-color: ${isExporting ? '#FFF' : 'rgb(248 250 252)'}; }
        .border, .border-slate-200 { border-color: ${isExporting ? 'transparent' : ''}; }
        .shadow-lg, .shadow-sm { box-shadow: ${isExporting ? 'none' : ''}; }


        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Dashboard;
}),
"[project]/Desktop/SIP-Buddy/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$DashboardContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/DashboardContent.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$DashboardContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/app/dashboard/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9517b4f4._.js.map