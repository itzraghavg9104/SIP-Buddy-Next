'use client';

import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import Header from './Header';
import Chatbot from './Chatbot';
import OnboardingTour from './OnboardingTour';
import LoginRequiredModal from './LoginRequiredModal';
import PlanGeneratedLoginModal from './PlanGeneratedLoginModal';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const {
        isLoginModalOpen, setIsLoginModalOpen, handleLoginFromModal,
        isPlanLoginModalOpen, handlePlanLoginConfirm, handlePlanLoginCancel,
        authLoading
    } = useGlobalContext();

    const pathname = usePathname();

    return (
        <>
            {pathname === '/' && <div className="animated-wave-bg" />}
            <Header />
            <main className="p-4 sm:p-6 md:p-8 relative">
                {children}
            </main>
            <Chatbot />
            {!authLoading && <OnboardingTour />}

            <LoginRequiredModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLoginFromModal}
            />
            <PlanGeneratedLoginModal
                isOpen={isPlanLoginModalOpen}
                onClose={handlePlanLoginCancel}
                onLogin={handlePlanLoginConfirm}
            />
        </>
    );
}
