'use client';

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '../services/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { savePlan } from '../services/firestoreService';
import { generateInvestmentPlan } from '../actions/groqActions';
import { InvestmentPlan, UserProfile, SavedPlan, Page } from '../types';

// Define the shape of the context
interface GlobalContextType {
    user: User | null;
    authLoading: boolean;
    isEmailVerified: boolean;
    needsEmailVerification: boolean;
    currentPlan: CurrentPlanState | null;
    setCurrentPlan: React.Dispatch<React.SetStateAction<CurrentPlanState | null>>;
    isLoginModalOpen: boolean;
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isPlanLoginModalOpen: boolean;
    setIsPlanLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handlePlanGenerated: (plan: InvestmentPlan, profile: UserProfile) => void;
    handleSavePlan: (planName: string) => Promise<void>;
    handleCreateNewPlan: () => void;
    handleViewPlan: (savedPlan: SavedPlan) => void;
    handleLogout: () => void;
    handleProfileUpdate: (updatedUser: User) => void;
    handleLoginModalClose: () => void;
    handleLoginFromModal: () => void;
    handlePlanLoginConfirm: () => void;
    handlePlanLoginCancel: () => void;
    refreshEmailVerification: () => Promise<void>;
    // Background Generation
    isGeneratingPlan: boolean;
    generationProgress: number;
    startPlanGeneration: (profile: UserProfile) => Promise<void>;
    // Notification
    showPlanNotification: boolean;
    dismissPlanNotification: () => void;
}

export interface CurrentPlanState {
    planData: InvestmentPlan;
    userProfile: UserProfile;
    isSaved: boolean;
    id?: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const pathnameRef = useRef(pathname);

    // Keep ref in sync with pathname changes
    useEffect(() => {
        pathnameRef.current = pathname;
    }, [pathname]);

    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [currentPlan, setCurrentPlan] = useState<CurrentPlanState | null>(null);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [needsEmailVerification, setNeedsEmailVerification] = useState(false);

    // Background Generation State
    const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
    const [generationProgress, setGenerationProgress] = useState(0);
    const [showPlanNotification, setShowPlanNotification] = useState(false);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPlanLoginModalOpen, setIsPlanLoginModalOpen] = useState(false);
    const [authRedirectPlan, setAuthRedirectPlan] = useState<{ plan: InvestmentPlan, profile: UserProfile } | null>(null);

    // Auth Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);

            // Check email verification status
            if (currentUser) {
                const isVerified = currentUser.emailVerified;
                const providerId = currentUser.providerData[0]?.providerId;
                const isGoogleUser = providerId === 'google.com';

                setIsEmailVerified(isVerified || isGoogleUser);
                // Users need verification if they used email/password AND haven't verified
                setNeedsEmailVerification(!isGoogleUser && !isVerified);
            } else {
                setIsEmailVerified(false);
                setNeedsEmailVerification(false);
            }

            if (currentUser && authRedirectPlan) {
                setCurrentPlan({
                    planData: authRedirectPlan.plan,
                    userProfile: authRedirectPlan.profile,
                    isSaved: false,
                });
                router.push('/dashboard');
                setAuthRedirectPlan(null);
            } else if (currentUser && pathname === '/auth' && !currentPlan) {
                // Only redirect to planner if we don't have a plan waiting
                router.push('/planner');
            } else if (!currentUser) {
                const protectedRoutes = ['/dashboard', '/profile', '/my-plans'];
                if (pathname && protectedRoutes.includes(pathname)) {
                    setIsLoginModalOpen(true);
                    setCurrentPlan(null);
                }
            }
        });
        return () => unsubscribe();
    }, [authRedirectPlan, pathname, router, currentPlan]);

    const handlePlanGenerated = (plan: InvestmentPlan, profile: UserProfile) => {
        if (user) {
            setCurrentPlan({ planData: plan, userProfile: profile, isSaved: false });

            // Smart Navigation Logic
            // If user is on the planner page, redirect to dashboard as usual
            // Smart Navigation Logic
            // Check the LIVE pathname via ref to avoid stale closure in async callbacks
            if (pathnameRef.current === '/planner') {
                router.push('/dashboard');
            } else {
                // If user is elsewhere, show notification
                setShowPlanNotification(true);
            }
        } else {
            console.log('Plan generated without login - showing modal');
            setAuthRedirectPlan({ plan, profile });
            setIsPlanLoginModalOpen(true);
        }
    };

    const dismissPlanNotification = () => {
        setShowPlanNotification(false);
    };

    const handleCreateNewPlan = () => {
        setCurrentPlan(null);
        router.push('/planner');
    };

    const handleSavePlan = async (planName: string) => {
        if (!currentPlan || !user) {
            throw new Error("Cannot save plan: user or plan data is missing.");
        };
        try {
            const newPlanId = await savePlan(user.uid, planName, currentPlan.planData, currentPlan.userProfile);
            setCurrentPlan(prev => prev ? { ...prev, isSaved: true, id: newPlanId } : null);
        } catch (error) {
            console.error("Failed to save plan:", error);
            throw error;
        }
    };

    const handleViewPlan = (savedPlan: SavedPlan) => {
        setCurrentPlan({
            planData: savedPlan.investmentPlan,
            userProfile: savedPlan.userProfile,
            isSaved: true,
            id: savedPlan.id,
        });
        router.push('/dashboard');
    };

    const handleLogout = () => {
        auth.signOut();
        router.push('/');
        setCurrentPlan(null);
    }

    const handleProfileUpdate = (updatedUser: User) => {
        setUser(updatedUser);
    };

    const handleLoginModalClose = () => {
        setIsLoginModalOpen(false);
        // Redirect to homepage when user cancels login from protected route
        router.push('/');
    };

    const handleLoginFromModal = () => {
        setIsLoginModalOpen(false);
        router.push('/auth');
    }

    const handlePlanLoginConfirm = () => {
        setIsPlanLoginModalOpen(false);
        router.push('/auth');
    }

    const handlePlanLoginCancel = () => {
        setIsPlanLoginModalOpen(false);
        setAuthRedirectPlan(null);
        // Stay on planner page (no redirect)
    }

    const refreshEmailVerification = async () => {
        if (auth.currentUser) {
            await auth.currentUser.reload();
            const isVerified = auth.currentUser.emailVerified;
            const providerId = auth.currentUser.providerData[0]?.providerId;
            const isGoogleUser = providerId === 'google.com';

            setIsEmailVerified(isVerified || isGoogleUser);
            setNeedsEmailVerification(!isGoogleUser && !isVerified);
        }
    };

    const startPlanGeneration = async (profile: UserProfile) => {
        setIsGeneratingPlan(true);
        setGenerationProgress(0);

        // Start simulation loop (runs independently)
        const startTime = Date.now();
        const animationDuration = 180000; // 3 minutes

        const timerId = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            // Linearly progress to 95% over 3 minutes
            const calculatedProgress = Math.min((elapsedTime / animationDuration) * 100, 95);
            setGenerationProgress(calculatedProgress);
        }, 100);

        try {
            const plan = await generateInvestmentPlan(profile);

            // Success
            clearInterval(timerId);
            setGenerationProgress(100);

            // Allow UI to show 100% briefly
            setTimeout(() => {
                setIsGeneratingPlan(false);
                handlePlanGenerated(plan, profile);
            }, 800);

        } catch (error) {
            console.error("Plan generation failed:", error);
            clearInterval(timerId);
            setIsGeneratingPlan(false);
            setGenerationProgress(0);
            // Ideally we'd set a global error state here, but for now we'll just stop
            // You might want to add 'generationError' to context later
            throw error; // Re-throw so PlannerContent can catch if it's mounted
        }
    };

    return (
        <GlobalContext.Provider value={{
            user,
            authLoading,
            isEmailVerified,
            needsEmailVerification,
            currentPlan,
            setCurrentPlan,
            isLoginModalOpen,
            setIsLoginModalOpen,
            isPlanLoginModalOpen,
            setIsPlanLoginModalOpen,
            handlePlanGenerated,
            handleSavePlan,
            handleCreateNewPlan,
            handleViewPlan,
            handleLogout,
            handleProfileUpdate,
            handleLoginModalClose,
            handleLoginFromModal,
            handlePlanLoginConfirm,
            handlePlanLoginCancel,
            refreshEmailVerification,
            isGeneratingPlan,
            generationProgress,
            startPlanGeneration,
            showPlanNotification,
            dismissPlanNotification
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
