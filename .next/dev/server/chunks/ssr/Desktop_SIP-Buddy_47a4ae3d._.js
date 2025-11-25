module.exports = [
"[project]/Desktop/SIP-Buddy/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/services/geminiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/context/GlobalContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const loadingSteps = [
    'Analyzing your financial profile...',
    'Calibrating risk tolerance...',
    'Generating personalized asset allocation...',
    'Projecting future growth scenarios...',
    'Searching for top-performing funds...',
    'Finalizing your investment plan...'
];
const Planner = ()=>{
    const { user, handlePlanGenerated, setIsPlanLoginModalOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$context$2f$GlobalContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobalContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        monthlyIncome: '',
        age: '',
        familyMembers: '',
        existingLoans: '',
        loanTenureRemaining: '',
        investmentTimeHorizon: '',
        riskTolerance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskTolerance"].Moderate,
        investmentGoal: '',
        stepUpPercentage: '10'
    });
    const [isStepUpEnabled, setIsStepUpEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoading) {
            setProgress(0);
            const startTime = Date.now();
            // Animation duration for reaching 90%. The last 10% is reserved for the actual completion.
            const animationDuration = 12000;
            const animate = ()=>{
                const elapsedTime = Date.now() - startTime;
                // Linearly progress to 90%
                const calculatedProgress = Math.min(elapsedTime / animationDuration * 100, 90);
                setProgress(calculatedProgress);
                if (calculatedProgress < 90 && isLoading) {
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            };
            animationFrameRef.current = requestAnimationFrame(animate);
        }
        return ()=>{
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [
        isLoading
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        // Prevent negative values for number inputs
        if (e.target.type === 'number' && parseFloat(value) < 0) {
            return;
        }
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Helper to prevent mouse wheel from changing values
    const handleWheel = (e)=>{
        e.target.blur();
    };
    const handleRiskChange = (value)=>{
        setFormData((prev)=>({
                ...prev,
                riskTolerance: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        // Convert form data strings to numbers for the API
        const profile = {
            monthlyIncome: Number(formData.monthlyIncome) || 50000,
            age: Number(formData.age) || 30,
            familyMembers: Number(formData.familyMembers) || 1,
            existingLoans: Number(formData.existingLoans) || 0,
            loanTenureRemaining: Number(formData.loanTenureRemaining) || 0,
            investmentTimeHorizon: Number(formData.investmentTimeHorizon) || 10,
            riskTolerance: formData.riskTolerance,
            investmentGoal: formData.investmentGoal || 'Retirement planning, child education, wealth creation...',
            stepUpPercentage: isStepUpEnabled ? Number(formData.stepUpPercentage) || 0 : undefined
        };
        try {
            const plan = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateInvestmentPlan"])(profile);
            // Success: Jump to 100% and show completion
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            setProgress(100);
            // Allow the UI to render the 100% state briefly before switching views
            setTimeout(()=>{
                setIsLoading(false);
                // Handle Plan Generated Logic via Context
                handlePlanGenerated(plan, profile);
            }, 800); // Slightly longer delay to let user see the 100% bar
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
            setIsLoading(false);
        }
    };
    if (isLoading) {
        const currentStepIndex = Math.min(Math.floor(progress / 100 * loadingSteps.length), loadingSteps.length - 1);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xl mx-auto py-12 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-xl border border-blue-100 p-8 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4 animate-pulse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSparkles"], {
                                    className: "h-8 w-8 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-800",
                                children: "Generating Your Plan"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-2",
                                children: "Our AI is analyzing thousands of data points..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 relative z-10",
                        children: loadingSteps.map((step, index)=>{
                            const isCompleted = index < currentStepIndex;
                            const isCurrent = index === currentStepIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center transition-all duration-500 ${isCurrent ? 'transform translate-x-2' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 mr-4 transition-colors duration-300 ${isCompleted ? 'bg-green-500 border-green-500' : isCurrent ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`,
                                        children: isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "3",
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 164,
                                                columnNumber: 113
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                            lineNumber: 164,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : isCurrent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                            lineNumber: 166,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-slate-300 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                            lineNumber: 168,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-medium transition-colors duration-300 ${isCompleted ? 'text-slate-500' : isCurrent ? 'text-blue-700 text-lg' : 'text-slate-400'}`,
                                        children: step
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 158,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 relative pt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: `${progress}%`
                                },
                                className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg relative text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-bold",
                                children: "Error: "
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block sm:inline",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsLoading(false);
                                    setError(null);
                                },
                                className: "mt-2 underline block mx-auto font-semibold",
                                children: "Go back to form"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSparkles"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "AI-Powered Analysis"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl font-bold text-slate-900 mb-2",
                        children: "Smart Investment Planner"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-600",
                        children: "Get personalized SIP recommendations based on your financial profile with AI-powered analysis and real fund suggestions"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-lg border border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 p-3 rounded-full mr-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSparkles"], {
                                    className: "h-6 w-6 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold",
                                children: "Create Your Investment Plan"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mb-8 -mt-4 ml-16",
                        children: "Fill in your financial details to get AI-powered recommendations"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "monthlyIncome",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Monthly Income (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "monthlyIncome",
                                                value: formData.monthlyIncome,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "0",
                                                placeholder: "50000",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Your total monthly income"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "age",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Age (years)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "age",
                                                value: formData.age,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "0",
                                                placeholder: "30",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Your current age"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "familyMembers",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Family Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "familyMembers",
                                                value: formData.familyMembers,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "0",
                                                placeholder: "1",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Number of dependents"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "existingLoans",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Existing Loans (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "existingLoans",
                                                value: formData.existingLoans,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "0",
                                                placeholder: "0",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Total outstanding loan amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "loanTenureRemaining",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Loan Tenure Remaining (years)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "loanTenureRemaining",
                                                value: formData.loanTenureRemaining,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "0",
                                                placeholder: "5",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "Years left to pay off loans"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "investmentTimeHorizon",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Investment Horizon (years)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "investmentTimeHorizon",
                                                value: formData.investmentTimeHorizon,
                                                onChange: handleChange,
                                                onWheel: handleWheel,
                                                min: "1",
                                                placeholder: "10",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "How long you plan to stay invested"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between border p-3 rounded-md bg-white border-slate-300 h-10 mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Enable Annual Step-Up?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsStepUpEnabled(!isStepUpEnabled),
                                                        className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isStepUpEnabled ? 'bg-blue-600' : 'bg-slate-200'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isStepUpEnabled ? 'translate-x-6' : 'translate-x-1'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isStepUpEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "stepUpPercentage",
                                                        className: "block text-sm font-medium text-slate-700",
                                                        children: "Annual Step-Up (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "stepUpPercentage",
                                                        value: formData.stepUpPercentage,
                                                        onChange: handleChange,
                                                        onWheel: handleWheel,
                                                        min: "1",
                                                        max: "100",
                                                        className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-slate-500",
                                                        children: "Increase your SIP amount annually"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Risk Tolerance"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 grid grid-cols-3 gap-3",
                                                children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiskTolerance"]).map((risk)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleRiskChange(risk),
                                                        className: `px-4 py-3 text-sm font-semibold rounded-md transition-colors text-center ${formData.riskTolerance === risk ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`,
                                                        children: risk
                                                    }, risk, false, {
                                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "investmentGoal",
                                                className: "block text-sm font-medium text-slate-700",
                                                children: "Investment Goal"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "investmentGoal",
                                                value: formData.investmentGoal,
                                                onChange: handleChange,
                                                rows: 3,
                                                placeholder: "e.g., Retirement planning, child's education, wealth creation...",
                                                className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-slate-500",
                                                children: "What are you saving for?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSparkles"], {
                                            className: `w-6 h-6 mr-3 ${isLoading ? 'animate-spin' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isLoading ? 'Generating Your Plan...' : 'Generate My AI Plan'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Planner;
}),
"[project]/Desktop/SIP-Buddy/app/planner/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlannerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$PlannerContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SIP-Buddy/components/PlannerContent.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function PlannerPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SIP$2d$Buddy$2f$components$2f$PlannerContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/SIP-Buddy/app/planner/page.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_SIP-Buddy_47a4ae3d._.js.map