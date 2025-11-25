(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-client] (ecmascript)");
;
;
const NotificationModal = ({ isOpen, onClose, title, message, children })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in",
        onClick: onClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "notification-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "notification-title",
                        className: "text-xl font-semibold text-slate-800 mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-6",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_c = NotificationModal;
const __TURBOPACK__default__export__ = NotificationModal;
var _c;
__turbopack_context__.k.register(_c, "NotificationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$firestoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/firestoreService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$NotificationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/NotificationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/context/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const MyPlans = ()=>{
    _s();
    const { handleViewPlan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [planToDelete, setPlanToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyPlans.useEffect": ()=>{
            const fetchPlans = {
                "MyPlans.useEffect.fetchPlans": async ()=>{
                    try {
                        const userPlans = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$firestoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserPlans"])();
                        setPlans(userPlans);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Could not fetch plans.');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["MyPlans.useEffect.fetchPlans"];
            fetchPlans();
        }
    }["MyPlans.useEffect"], []);
    const handleDelete = async ()=>{
        if (!planToDelete) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$firestoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePlan"])(planToDelete.id);
            setPlans(plans.filter((p)=>p.id !== planToDelete.id));
            setPlanToDelete(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Could not delete plan.');
        }
    };
    const formatDate = (timestamp)=>{
        if (!timestamp) return 'Date not available';
        return new Date(timestamp.seconds * 1000).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconListDetails"], {
                        className: "h-10 w-10 text-slate-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-bold text-slate-900",
                                children: "My Saved Plans"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600",
                                children: "View, compare, or delete your saved investment plans."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-8 text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Loading your saved plans..."
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center p-4 bg-red-100 text-red-700 rounded-md",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 69,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && !error && plans.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-12 bg-white rounded-xl shadow-md border border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInfoCircle"], {
                        className: "h-12 w-12 text-slate-400 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-slate-800",
                        children: "No Saved Plans Yet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mt-2",
                        children: "Create a new plan from the 'Planner' page to see it here."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 72,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !isLoading && !error && plans.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-lg border border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-slate-200",
                    children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg text-slate-800",
                                            children: plan.planName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500",
                                            children: [
                                                "Saved on: ",
                                                formatDate(plan.createdAt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                            lineNumber: 86,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleViewPlan(plan),
                                            className: "px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm",
                                            children: "View Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPlanToDelete(plan),
                                            className: "p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTrash"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                                lineNumber: 99,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                            lineNumber: 95,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                                    lineNumber: 88,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, plan.id, true, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                            lineNumber: 83,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$NotificationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!planToDelete,
                onClose: ()=>setPlanToDelete(null),
                title: "Confirm Deletion",
                message: `Are you sure you want to permanently delete the plan named "${planToDelete?.planName}"? This action cannot be undone.`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPlanToDelete(null),
                            className: "flex-1 px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            className: "flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MyPlans, "eao7lKh0pUoC7cjX4AuVm/xiWQI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MyPlans;
const __TURBOPACK__default__export__ = MyPlans;
var _c;
__turbopack_context__.k.register(_c, "MyPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SIP-Buddy/app/my-plans/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyPlansPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$MyPlansContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/MyPlansContent.tsx [app-client] (ecmascript)");
'use client';
;
;
function MyPlansPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$MyPlansContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/app/my-plans/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = MyPlansPage;
var _c;
__turbopack_context__.k.register(_c, "MyPlansPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SIP-Buddy_8d12fe42._.js.map