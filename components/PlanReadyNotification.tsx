"use client";

import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';


// Simple X Icon fallback if not using tabler
const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const DashboardIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
)

const PlanReadyNotification = () => {
    const { showPlanNotification, dismissPlanNotification } = useGlobalContext();
    const router = useRouter();

    if (!showPlanNotification) return null;

    const handleOpenDashboard = () => {
        dismissPlanNotification();
        router.push('/dashboard');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-in-up">
            <div className="bg-white rounded-xl shadow-2xl border border-blue-100 p-5 max-w-sm w-full md:w-[24rem]">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                            <span className="text-xl">🎉</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Plan Ready!</h3>
                    </div>
                    <button
                        onClick={dismissPlanNotification}
                        className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-100"
                        aria-label="Close"
                    >
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    Your AI investment plan has been successfully generated.
                </p>

                <p className="text-xs text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 italic">
                    You can view it anytime on your Dashboard. It will be saved until you close the site.
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={handleOpenDashboard}
                        className="flex-1 bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center justify-center text-sm"
                    >
                        <DashboardIcon className="w-4 h-4 mr-2" />
                        Open Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanReadyNotification;
