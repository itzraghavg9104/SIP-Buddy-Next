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
"[project]/Desktop/SIP-Buddy/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page",
    ()=>Page,
    "RiskTolerance",
    ()=>RiskTolerance
]);
var Page = /*#__PURE__*/ function(Page) {
    Page["Home"] = "Home";
    Page["Planner"] = "Planner";
    Page["Dashboard"] = "Dashboard";
    Page["Learn"] = "Learn";
    Page["Calculator"] = "Calculator";
    Page["About"] = "About";
    Page["More"] = "More";
    Page["Auth"] = "Auth";
    Page["Profile"] = "Profile";
    Page["MyPlans"] = "MyPlans";
    return Page;
}({});
var RiskTolerance = /*#__PURE__*/ function(RiskTolerance) {
    RiskTolerance["Conservative"] = "Conservative";
    RiskTolerance["Moderate"] = "Moderate";
    RiskTolerance["Aggressive"] = "Aggressive";
    return RiskTolerance;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/SIP-Buddy/components/tools/FinIQChallenge.tsx'\n\nExpected '</', got 'jsx text (\r\n\r\n        )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
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

//# sourceMappingURL=Desktop_SIP-Buddy_7b2753ee._.js.map