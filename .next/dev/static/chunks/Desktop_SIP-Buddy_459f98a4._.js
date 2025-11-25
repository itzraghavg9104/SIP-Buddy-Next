(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DEFAULT_MAP_URL = 'https://www.google.com/maps?q=India&z=5&output=embed';
const FindAdvisor = ()=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [advisors, setAdvisors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groundingChunks, setGroundingChunks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mapUrl, setMapUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_MAP_URL);
    const [selectedAdvisor, setSelectedAdvisor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchAdvisors = async (location)=>{
        setIsLoading(true);
        setError(null);
        setAdvisors([]);
        setSelectedAdvisor(null);
        try {
            const { advisors: fetchedAdvisors, groundingChunks: fetchedChunks } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findFinancialAdvisors"])(location);
            if (fetchedAdvisors.length === 0) {
                setError("No financial advisors found for this location. Please try a different search.");
            } else {
                setAdvisors(fetchedAdvisors);
                setGroundingChunks(fetchedChunks);
                const firstAdvisorWithCoords = fetchedAdvisors.find((a)=>a.latitude !== null && a.longitude !== null);
                const firstAdvisor = fetchedAdvisors[0] || null;
                // Select the first advisor by default to show details immediately
                setSelectedAdvisor(firstAdvisor);
                if (firstAdvisorWithCoords) {
                    setMapUrl(`https://www.google.com/maps?q=${firstAdvisorWithCoords.latitude},${firstAdvisorWithCoords.longitude}&z=15&output=embed`);
                } else if ('query' in location) {
                    setMapUrl(`https://www.google.com/maps?q=${location.query.replace(/ /g, '+')}&z=12&output=embed`);
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching advisors.');
            console.error(err);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FindAdvisor.useEffect": ()=>{
            navigator.geolocation.getCurrentPosition({
                "FindAdvisor.useEffect": (position)=>{
                    const { latitude, longitude } = position.coords;
                    setMapUrl(`https://www.google.com/maps?q=${latitude},${longitude}&z=13&output=embed`);
                    fetchAdvisors({
                        latitude,
                        longitude
                    });
                }
            }["FindAdvisor.useEffect"], {
                "FindAdvisor.useEffect": (geoError)=>{
                    console.warn('Geolocation denied:', geoError.message);
                    setError('Could not get your location. Please use the search bar to find advisors.');
                    setIsLoading(false);
                }
            }["FindAdvisor.useEffect"]);
        }
    }["FindAdvisor.useEffect"], []);
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            fetchAdvisors({
                query: searchQuery
            });
        }
    };
    const handleSelectAdvisor = (advisor)=>{
        setSelectedAdvisor(advisor);
        if (advisor.latitude !== null && advisor.longitude !== null) {
            setMapUrl(`https://www.google.com/maps?q=${advisor.latitude},${advisor.longitude}&z=15&output=embed`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-slate-900 mb-1",
                        children: "Find a Financial Advisor"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Discover registered advisors near you based on live data."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSearch,
                className: "max-w-xl mx-auto mb-6 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        placeholder: "Enter a city or pin code...",
                        className: "w-full px-4 py-3 bg-white rounded-full border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition-colors",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
                                className: "h-5 w-5 text-yellow-400 mr-3 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                lineNumber: 101,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    children: "Disclaimer:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                    lineNumber: 103,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Advisor information is provided by Google Maps and may not be exhaustive. Always verify credentials before engaging with a financial advisor."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                style: {
                    height: 'calc(100vh - 350px)',
                    minHeight: '550px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 bg-slate-200 rounded-xl overflow-hidden shadow-lg border border-slate-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            style: {
                                border: 0
                            },
                            loading: "lazy",
                            allowFullScreen: true,
                            src: mapUrl
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                            lineNumber: 111,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-col h-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-slate-800 mb-3 pb-3 border-b border-slate-200 flex-shrink-0",
                                        children: "Advisors Found"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                        lineNumber: 122,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow overflow-y-auto pr-2",
                                        children: [
                                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-8 text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Searching for advisors..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 124,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            error && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-8 text-red-600 bg-red-50 rounded-lg",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 128,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isLoading && !error && advisors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: advisors.map((advisor, index)=>{
                                                    const hasCoords = advisor.latitude !== null && advisor.longitude !== null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleSelectAdvisor(advisor),
                                                            className: `w-full text-left p-3 rounded-lg border-2 transition-all ${selectedAdvisor?.name === advisor.name && selectedAdvisor.address === advisor.address ? 'bg-cyan-50 border-cyan-500 shadow-sm' : 'border-transparent hover:bg-slate-100'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-slate-800 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMapPin"], {
                                                                            className: `h-4 w-4 flex-shrink-0 ${hasCoords ? 'text-cyan-600' : 'text-slate-400'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                            lineNumber: 137,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        advisor.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                advisor.firm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-600 pl-6",
                                                                    children: advisor.firm
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 62
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mt-1 pl-6 line-clamp-1",
                                                                    children: advisor.address
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, index, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 130,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                        lineNumber: 123,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-col h-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-slate-800 mb-3 pb-3 border-b border-slate-200 flex-shrink-0",
                                        children: "Details"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow overflow-y-auto pr-2",
                                        children: selectedAdvisor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-slate-900 mb-1",
                                                    children: selectedAdvisor.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedAdvisor.firm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-md text-slate-600 font-semibold mb-4",
                                                    children: selectedAdvisor.firm
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 54
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-4 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMapPin"], {
                                                                    className: "h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 37
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-slate-700",
                                                                    children: selectedAdvisor.address
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 37
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedAdvisor.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {
                                                                    className: "h-5 w-5 text-slate-400 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `tel:${selectedAdvisor.phone}`,
                                                                    className: "text-blue-600 hover:underline",
                                                                    children: selectedAdvisor.phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedAdvisor.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWorld"], {
                                                                    className: "h-5 w-5 text-slate-400 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: selectedAdvisor.website.startsWith('http') ? selectedAdvisor.website : `https://${selectedAdvisor.website}`,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "text-blue-600 hover:underline break-all",
                                                                    children: selectedAdvisor.website
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                            lineNumber: 154,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full text-slate-500 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: isLoading ? 'Loading details...' : 'Select an advisor from the list to see their details.'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 179,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                            lineNumber: 178,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    groundingChunks.length > 0 && selectedAdvisor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-2",
                                                children: "Data Sources:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 187,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-1",
                                                children: groundingChunks.map((chunk, index)=>chunk.maps?.uri ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "truncate",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: chunk.maps.uri,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-600 hover:underline",
                                                            children: chunk.maps.title || 'Google Maps Source'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, index, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)) : null)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                                lineNumber: 188,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                        lineNumber: 186,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FindAdvisor, "4zqCZKKO0kutBT4oxkiKGC/2Evo=");
_c = FindAdvisor;
const __TURBOPACK__default__export__ = FindAdvisor;
var _c;
__turbopack_context__.k.register(_c, "FindAdvisor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
// --- Levenshtein Distance for Fuzzy Matching ---
// Returns the number of edits (inserts, deletes, substitutions) required to change 'a' to 'b'
const levenshteinDistance = (a, b)=>{
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    // Increment along the first column of each row
    for(let i = 0; i <= b.length; i++){
        matrix[i] = [
            i
        ];
    }
    // Increment each column in the first row
    for(let j = 0; j <= a.length; j++){
        matrix[0][j] = j;
    }
    // Fill in the rest of the matrix
    for(let i = 1; i <= b.length; i++){
        for(let j = 1; j <= a.length; j++){
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1 // deletion
                ));
            }
        }
    }
    return matrix[b.length][a.length];
};
// Returns true if the distance is within an acceptable threshold based on word length
const isFuzzyMatch = (input, target)=>{
    const normalizedInput = input.trim().toLowerCase();
    const normalizedTarget = target.trim().toLowerCase();
    if (normalizedInput === normalizedTarget) return true;
    const distance = levenshteinDistance(normalizedInput, normalizedTarget);
    // Threshold logic:
    // Length <= 4: Exact match required (dist 0)
    // Length 5-8: Allow 1 error
    // Length > 8: Allow 2 errors
    const threshold = normalizedTarget.length <= 4 ? 0 : normalizedTarget.length <= 8 ? 1 : 2;
    return distance <= threshold;
};
// --- Circular Timer Component ---
const CircularTimer = ({ time, maxTime, mode })=>{
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    let progress = 1;
    // For timed modes, calculate remaining percentage
    if (mode !== 'Relaxed' && maxTime) {
        progress = Math.max(0, time / maxTime);
    }
    // Calculate stroke offset (0 = full circle, circumference = empty)
    // We want it to deplete, so we start at 0 offset (full) and go to circumference
    const strokeDashoffset = circumference - progress * circumference;
    // Color logic
    let colorClass = "text-blue-600";
    let strokeClass = "stroke-blue-600";
    if (mode !== 'Relaxed') {
        if (progress < 0.2) {
            colorClass = "text-red-600";
            strokeClass = "stroke-red-600";
        } else if (progress < 0.5) {
            colorClass = "text-yellow-500";
            strokeClass = "stroke-yellow-500";
        } else {
            colorClass = "text-green-500";
            strokeClass = "stroke-green-500";
        }
    } else {
        strokeClass = "stroke-slate-300";
        colorClass = "text-slate-600";
    }
    // Format time MM:SS
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center w-16 h-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-full h-full transform -rotate-90",
                viewBox: "0 0 50 50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "25",
                        cy: "25",
                        r: radius,
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "transparent",
                        className: "text-slate-100"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "25",
                        cy: "25",
                        r: radius,
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "transparent",
                        strokeDasharray: circumference,
                        strokeDashoffset: mode === 'Relaxed' ? 0 : strokeDashoffset,
                        strokeLinecap: "round",
                        className: `transition-all duration-1000 ease-linear ${strokeClass}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute text-xs font-bold font-mono ${colorClass}`,
                children: timeString
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CircularTimer;
// --- Confetti Component ---
const Confetti = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Confetti.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particles = [];
            const colors = [
                '#FFC700',
                '#FF0000',
                '#2E3192',
                '#41BBC7'
            ];
            for(let i = 0; i < 200; i++){
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    w: Math.random() * 10 + 5,
                    h: Math.random() * 10 + 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speed: Math.random() * 5 + 2,
                    angle: Math.random() * 360,
                    spin: Math.random() < 0.5 ? 1 : -1
                });
            }
            let animationId;
            const draw = {
                "Confetti.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach({
                        "Confetti.useEffect.draw": (p)=>{
                            p.y += p.speed;
                            p.angle += p.spin;
                            ctx.save();
                            ctx.translate(p.x, p.y);
                            ctx.rotate(p.angle * Math.PI / 180);
                            ctx.fillStyle = p.color;
                            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                            ctx.restore();
                            if (p.y > canvas.height) {
                                p.y = -10;
                                p.x = Math.random() * canvas.width;
                            }
                        }
                    }["Confetti.useEffect.draw"]);
                    animationId = requestAnimationFrame(draw);
                }
            }["Confetti.useEffect.draw"];
            draw();
            return ({
                "Confetti.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                }
            })["Confetti.useEffect"];
        }
    }["Confetti.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-50"
    }, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
        lineNumber: 201,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Confetti, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c1 = Confetti;
const FinIQChallenge = ({ onBack, navigateTo })=>{
    _s1();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SETUP');
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Medium');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Relaxed');
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userAnswers, setUserAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Holds current input
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Timer States
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // In seconds
    const [timeTaken, setTimeTaken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // For current question
    // Feedback States
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCorrect, setIsCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Changed from NodeJS.Timeout to number for browser environment compatibility
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- CONFETTI EFFECT ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinIQChallenge.useEffect": ()=>{
            if (gameState === 'RESULTS') {
                const score = results.filter({
                    "FinIQChallenge.useEffect": (r)=>r.isCorrect
                }["FinIQChallenge.useEffect"]).length;
                const percentage = score / 10 * 100;
                if (percentage >= 60) {
                    setShowConfetti(true);
                    const timer = setTimeout({
                        "FinIQChallenge.useEffect.timer": ()=>{
                            setShowConfetti(false);
                        }
                    }["FinIQChallenge.useEffect.timer"], 5000); // Disappear after 5 seconds
                    return ({
                        "FinIQChallenge.useEffect": ()=>clearTimeout(timer)
                    })["FinIQChallenge.useEffect"];
                }
            }
        }
    }["FinIQChallenge.useEffect"], [
        gameState,
        results
    ]);
    // --- SETUP LOGIC ---
    const handleStart = async ()=>{
        setGameState('LOADING');
        setError(null);
        try {
            const qs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateQuizQuestions"])(difficulty);
            setQuestions(qs);
            setGameState('PLAYING');
            resetQuestionState();
            // Initialize Timer based on mode
            if (mode === 'Speed Run') {
                // 5 minutes total
                setTimeLeft(300);
            } else if (mode === 'Blitz') {
                // 45 seconds per question
                setTimeLeft(45);
            } else {
                setTimeLeft(0); // Relaxed: Count up effectively
            }
        } catch (e) {
            setError('Failed to load questions. Please check your connection and try again.');
            setGameState('SETUP');
        }
    };
    // --- TIMER LOGIC ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinIQChallenge.useEffect": ()=>{
            if (gameState !== 'PLAYING') return;
            // If submitted, stop timer but don't clear it (to show time taken)
            if (isSubmitted) return;
            timerRef.current = window.setInterval({
                "FinIQChallenge.useEffect": ()=>{
                    setTimeTaken({
                        "FinIQChallenge.useEffect": (prev)=>prev + 1
                    }["FinIQChallenge.useEffect"]);
                    if (mode !== 'Relaxed') {
                        setTimeLeft({
                            "FinIQChallenge.useEffect": (prev)=>{
                                if (prev <= 1) {
                                    handleTimeUp();
                                    return 0;
                                }
                                return prev - 1;
                            }
                        }["FinIQChallenge.useEffect"]);
                    }
                }
            }["FinIQChallenge.useEffect"], 1000);
            return ({
                "FinIQChallenge.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["FinIQChallenge.useEffect"];
        }
    }["FinIQChallenge.useEffect"], [
        gameState,
        isSubmitted,
        mode
    ]);
    const handleTimeUp = ()=>{
        if (mode === 'Speed Run') {
            // End entire quiz
            finishQuiz();
        } else if (mode === 'Blitz') {
            // Submit current question as wrong if not answered
            handleSubmit(true);
        }
    };
    const resetQuestionState = ()=>{
        setIsSubmitted(false);
        setIsCorrect(false);
        setUserAnswers(null);
        setTimeTaken(0);
        if (mode === 'Blitz') setTimeLeft(45);
    };
    // --- ANSWER HANDLING ---
    const currentQuestion = questions[currentQuestionIndex];
    const handleInputChange = (val)=>{
        if (isSubmitted) return;
        setUserAnswers(val);
    };
    const handleCheckboxChange = (option)=>{
        if (isSubmitted) return;
        const current = Array.isArray(userAnswers) ? [
            ...userAnswers
        ] : [];
        if (current.includes(option)) {
            handleInputChange(current.filter((i)=>i !== option));
        } else {
            handleInputChange([
                ...current,
                option
            ]);
        }
    };
    const validateAnswer = (question, answer)=>{
        if (!answer) return false;
        // Normalize types for validation as well
        const type = question.type?.toLowerCase().trim();
        switch(type){
            case 'single_choice':
            case 'true_false':
            case 'truefalse':
                return String(answer) === String(question.correctAnswer);
            case 'multiple_choice':
                if (!Array.isArray(answer) || !Array.isArray(question.correctAnswer)) return false;
                if (answer.length !== question.correctAnswer.length) return false;
                const sortedAns = [
                    ...answer
                ].sort();
                const sortedCorrect = [
                    ...question.correctAnswer
                ].sort();
                return sortedAns.every((val, index)=>val === sortedCorrect[index]);
            case 'fill_in_blank':
            case 'short_answer':
            default:
                // Use fuzzy matching for text inputs
                const input = String(answer);
                const correct = String(question.correctAnswer);
                const keywords = question.acceptedKeywords || [];
                // Check main answer with fuzzy logic
                if (isFuzzyMatch(input, correct)) return true;
                // Check keywords with fuzzy logic
                return keywords.some((keyword)=>isFuzzyMatch(input, keyword));
        }
    };
    const handleSubmit = (forceTimeUp = false)=>{
        if (isSubmitted && !forceTimeUp) return;
        // If forced by timer and no answer, treat as empty/wrong
        const answerToSubmit = forceTimeUp && !userAnswers ? currentQuestion.type === 'multiple_choice' ? [] : '' : userAnswers;
        const correct = validateAnswer(currentQuestion, answerToSubmit);
        setIsCorrect(correct);
        setIsSubmitted(true);
        setResults((prev)=>[
                ...prev,
                {
                    questionId: currentQuestion.id,
                    userAnswer: answerToSubmit,
                    isCorrect: correct,
                    timeTaken: timeTaken
                }
            ]);
        if (timerRef.current) clearInterval(timerRef.current);
        // If Speed Run mode hits 0, we already called finishQuiz in handleTimeUp if it was the trigger.
        // But if user submits the LAST question manually, we need to finish.
        if (currentQuestionIndex === questions.length - 1 && mode !== 'Speed Run' && forceTimeUp) {
            setGameState('RESULTS');
        }
    };
    const handleNext = ()=>{
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev)=>prev + 1);
            resetQuestionState();
        } else {
            finishQuiz();
        }
    };
    const finishQuiz = ()=>{
        setGameState('RESULTS');
    };
    // Helper to render a text input, used as default fallback
    const renderTextInput = (q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: Array.isArray(userAnswers) ? userAnswers.join(', ') : userAnswers || '',
                    onChange: (e)=>handleInputChange(e.target.value),
                    disabled: isSubmitted,
                    placeholder: "Type your answer here...",
                    className: `w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${isSubmitted ? isCorrect ? "border-green-500 bg-green-50 text-green-800" : "border-red-500 bg-red-50 text-red-800" : "border-slate-300 focus:ring-blue-500"}`
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 411,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                isSubmitted && !isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "Correct Answer:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        String(q.correctAnswer)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
            lineNumber: 410,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderInput = ()=>{
        const q = currentQuestion;
        if (!q) return null;
        const commonClasses = "w-full p-4 rounded-lg border transition-all text-left ";
        const getOptionClass = (opt, isSelected)=>{
            if (isSubmitted) {
                const isActualCorrect = Array.isArray(q.correctAnswer) ? q.correctAnswer.includes(opt) : q.correctAnswer === opt;
                if (isActualCorrect) return "bg-green-100 border-green-500 text-green-800";
                if (isSelected && !isActualCorrect) return "bg-red-100 border-red-500 text-red-800";
                return "bg-slate-50 border-slate-200 opacity-50";
            }
            return isSelected ? "bg-blue-50 border-blue-500 text-blue-800 shadow-md" : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300";
        };
        const type = q.type?.toLowerCase().trim();
        // Handle True/False
        if (type === 'true_false' || type === 'truefalse') {
            // Default options if missing
            const options = q.options && q.options.length > 0 ? q.options : [
                'True',
                'False'
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleInputChange(opt),
                        disabled: isSubmitted,
                        className: `${commonClasses} text-center ${getOptionClass(opt, userAnswers === opt)}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-lg",
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 465,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 459,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                lineNumber: 457,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Handle Single Choice
        if (type === 'single_choice') {
            if (!q.options || q.options.length === 0) return renderTextInput(q); // Fallback
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: q.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleInputChange(opt),
                        disabled: isSubmitted,
                        className: commonClasses + getOptionClass(opt, userAnswers === opt),
                        children: opt
                    }, idx, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 478,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                lineNumber: 476,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Handle Multiple Choice
        if (type === 'multiple_choice') {
            if (!q.options || q.options.length === 0) return renderTextInput(q); // Fallback
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: q.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleCheckboxChange(opt),
                        disabled: isSubmitted,
                        className: commonClasses + getOptionClass(opt, (userAnswers || []).includes(opt)),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-5 h-5 rounded border mr-3 flex items-center justify-center transition-colors ${(userAnswers || []).includes(opt) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'}`,
                                    children: (userAnswers || []).includes(opt) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChecklist"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 505,
                                        columnNumber: 57
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                opt
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 503,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 497,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                lineNumber: 495,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Fallback for 'fill_in_blank', 'short_answer', or unknown types
        return renderTextInput(q);
    };
    // --- RENDER STATES ---
    if (gameState === 'SETUP') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "flex items-center text-sm font-semibold text-blue-600 hover:underline mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowUp"], {
                            className: "h-4 w-4 mr-1 rotate-[-90deg]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 524,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-3xl inline-block mb-4 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBrain"], {
                                className: "h-12 w-12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-slate-900 mb-2",
                            children: "FinIQ Challenge"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-600",
                            children: "Test your financial knowledge and level up your wealth wisdom."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 528,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-red-600 bg-red-50 p-4 rounded-lg mb-6",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 536,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl shadow-lg border border-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"], {
                                            className: "h-6 w-6 text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Difficulty"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        'Easy',
                                        'Medium',
                                        'Hard'
                                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDifficulty(d),
                                            className: `w-full p-3 rounded-lg border text-left transition-all ${difficulty === d ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'hover:bg-slate-50'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: d
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, d, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                            lineNumber: 546,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl shadow-lg border border-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClock"], {
                                            className: "h-6 w-6 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Mode"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        'Relaxed',
                                        'Speed Run',
                                        'Blitz'
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMode(m),
                                            className: `w-full p-3 rounded-lg border text-left transition-all ${mode === m ? 'bg-purple-50 border-purple-500 ring-1 ring-purple-500' : 'hover:bg-slate-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold block",
                                                    children: m
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500",
                                                    children: m === 'Relaxed' ? 'No time limit. Learn at your own pace.' : m === 'Speed Run' ? '5 minutes to complete 10 questions.' : '45 seconds per question. Think fast!'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, m, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStart,
                        className: "px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all transform",
                        children: "Start Quiz"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 581,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
            lineNumber: 523,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (gameState === 'LOADING') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-[60vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-slate-800 animate-pulse",
                    children: "Generating Questions..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 597,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 mt-2",
                    children: [
                        "Using AI to curate your ",
                        difficulty,
                        " challenge."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
            lineNumber: 595,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (gameState === 'PLAYING') {
        const q = questions[currentQuestionIndex];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-700",
                                    children: [
                                        "Q ",
                                        currentQuestionIndex + 1,
                                        "/10"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-semibold ${difficulty === 'Easy' ? 'bg-green-100 text-green-700' : difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`,
                                    children: difficulty
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 609,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularTimer, {
                            time: mode === 'Relaxed' ? timeTaken : timeLeft,
                            maxTime: mode === 'Speed Run' ? 300 : mode === 'Blitz' ? 45 : undefined,
                            mode: mode
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 608,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug",
                            children: q.question
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 625,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        renderInput(),
                        isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChecklist"], {
                                        className: "h-6 w-6 text-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 636,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconX"], {
                                        className: "h-6 w-6 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 637,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`,
                                                children: isCorrect ? 'Correct!' : 'Incorrect'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 640,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-700 mt-1 text-sm",
                                                children: q.explanation
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 643,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 639,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 634,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 633,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end",
                    children: !isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSubmit(false),
                        disabled: !userAnswers || Array.isArray(userAnswers) && userAnswers.length === 0,
                        className: "px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors",
                        children: "Submit Answer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 653,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "px-8 py-3 bg-slate-800 text-white font-bold rounded-lg shadow-md hover:bg-slate-900 transition-colors flex items-center gap-2",
                        children: [
                            currentQuestionIndex < 9 ? 'Next Question' : 'Finish Quiz',
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 665,
                                columnNumber: 76
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 661,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
            lineNumber: 606,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (gameState === 'RESULTS') {
        const score = results.filter((r)=>r.isCorrect).length;
        const percentage = score / 10 * 100;
        const isPass = percentage >= 60;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-4",
            children: [
                isPass && showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Confetti, {}, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 680,
                    columnNumber: 36
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-full inline-block mb-4 shadow-xl ${isPass ? 'bg-yellow-400 text-white animate-bounce' : 'bg-slate-200 text-slate-500'}`,
                            children: isPass ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconParty"], {
                                className: "h-16 w-16"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 684,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTrophy"], {
                                className: "h-16 w-16"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 684,
                                columnNumber: 61
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 683,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-slate-900 mb-2",
                            children: isPass ? 'Quiz Completed!' : 'Challenge Finished'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-600",
                            children: [
                                "You scored ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-bold ${isPass ? 'text-green-600' : 'text-red-600'}`,
                                    children: [
                                        score,
                                        "/10"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 690,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                " (",
                                percentage,
                                "%)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 689,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isPass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 bg-blue-50 rounded-lg inline-block max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-800 font-medium mb-2",
                                    children: "Time to tighten up your financial knowledge!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>navigateTo ? navigateTo('/learn') : onBack(),
                                    className: "text-sm text-blue-600 hover:underline font-bold",
                                    children: "Go to Learn Section →"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 693,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 682,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-slate-800 border-b pb-2",
                            children: "Review Answers"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                            lineNumber: 707,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        questions.map((q, idx)=>{
                            const result = results.find((r)=>r.questionId === q.id);
                            const isCorrect = result?.isCorrect;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-6 rounded-xl border ${isCorrect ? 'bg-white border-slate-200' : 'bg-red-50 border-red-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: [
                                                    "Q",
                                                    idx + 1,
                                                    ": ",
                                                    q.question
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 715,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold",
                                                children: "Correct"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 717,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-bold",
                                                children: "Wrong"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 718,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 714,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4 text-sm mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-slate-500 font-semibold",
                                                        children: "Your Answer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: isCorrect ? 'text-green-700' : 'text-red-700',
                                                        children: Array.isArray(result?.userAnswer) ? result?.userAnswer.join(', ') || '(No Answer)' : result?.userAnswer || '(No Answer)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 723,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-slate-500 font-semibold",
                                                        children: "Correct Answer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-800 font-medium",
                                                        children: Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                lineNumber: 731,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 722,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-slate-200/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 italic text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold not-italic",
                                                    children: "Explanation: "
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                q.explanation
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                            lineNumber: 742,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                        lineNumber: 741,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, q.id, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                                lineNumber: 713,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 706,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-10 mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setGameState('SETUP'),
                        className: "px-8 py-3 bg-slate-800 text-white font-bold rounded-lg shadow-md hover:bg-slate-900 transition-colors",
                        children: "Try Another Quiz"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx",
            lineNumber: 679,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
_s1(FinIQChallenge, "6cs1khRj5gYnz5VOXUBaw0gKGI0=");
_c2 = FinIQChallenge;
const __TURBOPACK__default__export__ = FinIQChallenge;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CircularTimer");
__turbopack_context__.k.register(_c1, "Confetti");
__turbopack_context__.k.register(_c2, "FinIQChallenge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/components/MoreContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$tools$2f$FindAdvisor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/tools/FindAdvisor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$tools$2f$FinIQChallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const tools = [
    {
        id: 'find-advisor',
        title: 'Finance Buddy Near me',
        description: 'Find registered financial advisors in your area using an interactive map.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMapPin"], {
            className: "h-8 w-8 text-cyan-600"
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 13,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$tools$2f$FindAdvisor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 14,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'finiq-challenge',
        title: 'FinIQ Challenge',
        description: 'Test your financial knowledge with our AI-powered dynamic quiz game.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBrain"], {
            className: "h-8 w-8 text-indigo-600"
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 20,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$tools$2f$FinIQChallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onBack: ()=>{}
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 21,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const MoreContent = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const initialActiveId = searchParams ? searchParams.get('tool') : null;
    const [activeToolId, setActiveToolId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialActiveId || null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoreContent.useEffect": ()=>{
            setActiveToolId(initialActiveId || null);
        }
    }["MoreContent.useEffect"], [
        initialActiveId
    ]);
    const activeTool = tools.find((t)=>t.id === activeToolId);
    const handleBack = ()=>{
        setActiveToolId(null);
        router.push('/more');
    };
    const navigateTo = (path, params)=>{
        if (params) {
            // Construct query string
            const queryString = new URLSearchParams(params).toString();
            router.push(`${path}?${queryString}`);
        } else {
            router.push(path);
        }
    };
    if (activeTool) {
        // Clone the component and pass the onBack prop and navigateTo
        const componentWithProps = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(activeTool.component, {
            onBack: handleBack,
            navigateTo: navigateTo
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "flex items-center text-sm font-semibold text-blue-600 hover:underline mb-6 p-2 -ml-2 rounded-md hover:bg-slate-100 transition-colors",
                    "aria-label": "Back to More Tools",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-4 w-4 mr-1",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                                lineNumber: 66,
                                columnNumber: 130
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Back to More Tools"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                componentWithProps
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-slate-900 mb-2",
                        children: "More Tools"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-600",
                        children: "Explore additional tools to help with your financial journey."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveToolId(tool.id),
                        className: "bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-cyan-500 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-100 p-3 rounded-full w-fit mb-4",
                                children: tool.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-slate-800 mb-2",
                                children: tool.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500",
                                children: tool.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, tool.id, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MoreContent, "JUDgzwCUJwyym5K7mHK4/m1mSVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MoreContent;
const More = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
                lineNumber: 103,
                columnNumber: 80
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 103,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreContent, {}, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/components/MoreContent.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = More;
const __TURBOPACK__default__export__ = More;
var _c, _c1;
__turbopack_context__.k.register(_c, "MoreContent");
__turbopack_context__.k.register(_c1, "More");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/app/more/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$MoreContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/MoreContent.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function MorePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading tools..."
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/app/more/page.tsx",
            lineNumber: 8,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$MoreContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/app/more/page.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/app/more/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = MorePage;
var _c;
__turbopack_context__.k.register(_c, "MorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SIP-Buddy_459f98a4._.js.map