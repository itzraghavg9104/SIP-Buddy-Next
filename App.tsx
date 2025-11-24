
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Planner from './pages/Planner';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Calculator from './pages/Calculator';
import About from './pages/About';
import More from './pages/More';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import MyPlans from './pages/MyPlans';
import Home from './pages/Home'; 
import Chatbot from './components/Chatbot';
import { Page, InvestmentPlan, UserProfile, SavedPlan } from './types';
import NotificationModal from './components/NotificationModal';
import LoginRequiredModal from './components/LoginRequiredModal';
import PlanGeneratedLoginModal from './components/PlanGeneratedLoginModal';
import OnboardingTour from './components/OnboardingTour';
import { auth } from './services/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { IconSparkles } from './components/Icons';
import { savePlan } from './services/firestoreService';

export interface CurrentPlanState {
  planData: InvestmentPlan;
  userProfile: UserProfile;
  isSaved: boolean;
  id?: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [currentPlan, setCurrentPlan] = useState<CurrentPlanState | null>(null);
  const [pageParams, setPageParams] = useState<any>(null);
  
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPlanLoginModalOpen, setIsPlanLoginModalOpen] = useState(false);
  
  const [authRedirectPlan, setAuthRedirectPlan] = useState<{ plan: InvestmentPlan, profile: UserProfile } | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (currentUser && authRedirectPlan) {
        setCurrentPlan({
          planData: authRedirectPlan.plan,
          userProfile: authRedirectPlan.profile,
          isSaved: false,
        });
        setCurrentPage(Page.Dashboard);
        setAuthRedirectPlan(null);
      } else if (currentUser && currentPage === Page.Auth) {
        // After login/signup, redirect to Planner, not Home
        setCurrentPage(Page.Planner);
      } else if (!currentUser) {
        const protectedPages = [Page.Dashboard, Page.Profile, Page.MyPlans];
        if (protectedPages.includes(currentPage)) {
          // If on a protected page and logged out, go to Home
          setCurrentPage(Page.Home);
          setCurrentPlan(null);
        }
      }
    });
    return () => unsubscribe();
  }, [authRedirectPlan, currentPage]);

  const handlePlanGenerated = (plan: InvestmentPlan, profile: UserProfile) => {
    if (user) {
      setCurrentPlan({ planData: plan, userProfile: profile, isSaved: false });
      setCurrentPage(Page.Dashboard);
    } else {
      setAuthRedirectPlan({ plan, profile });
      // Prompt for login via special modal instead of direct redirect
      setIsPlanLoginModalOpen(true);
    }
  };

  const handleCreateNewPlan = () => {
    setCurrentPlan(null);
    setCurrentPage(Page.Planner);
  };
  
  const handleSavePlan = async (planName: string) => {
    if (!currentPlan || !user) {
        throw new Error("Cannot save plan: user or plan data is missing.");
    };
    try {
      const newPlanId = await savePlan(user.uid, planName, currentPlan.planData, currentPlan.userProfile);
      setCurrentPlan(prev => prev ? { ...prev, isSaved: true, id: newPlanId } : null);
    } catch (error) {
      console.error("Failed to save plan in App.tsx:", error);
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
    setCurrentPage(Page.Dashboard);
  };
  
  const navigateTo = (page: Page, params?: any) => {
    const protectedPages = [Page.Dashboard, Page.Profile, Page.MyPlans]; 
    
    // Planner is semi-protected. We let them see it, but plan generation handles the auth redirect.
    // For fully protected pages like My Plans or Profile:
    if (protectedPages.includes(page) && !user) {
        setIsLoginModalOpen(true);
        return;
    }
    
    setCurrentPage(page);
    setPageParams(params || null);
  };
  
  const handleLogout = () => {
    auth.signOut();
    setCurrentPage(Page.Home); 
    setCurrentPlan(null);
  }

  const handleProfileUpdate = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const handleGetStarted = () => {
    if (user) {
      navigateTo(Page.Planner);
    } else {
      navigateTo(Page.Auth);
    }
  };

  const handleLoginFromModal = () => {
      setIsLoginModalOpen(false);
      setCurrentPage(Page.Auth);
  }

  const handlePlanLoginConfirm = () => {
      setIsPlanLoginModalOpen(false);
      setCurrentPage(Page.Auth);
  }

  const handlePlanLoginCancel = () => {
      setIsPlanLoginModalOpen(false);
      setAuthRedirectPlan(null);
  }

  const renderPage = () => {
    if (authLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen -mt-16">
          <IconSparkles className="h-12 w-12 text-blue-600 animate-pulse" />
          <p className="mt-4 text-slate-600">Initializing SIP Buddy...</p>
        </div>
      );
    }

    switch (currentPage) {
      case Page.Home:
        return <Home onGetStartedClick={handleGetStarted} navigateTo={navigateTo} />;
      case Page.Auth:
        return <Auth />;
      case Page.Profile:
        return user ? <Profile user={user} onLogout={handleLogout} onProfileUpdate={handleProfileUpdate} /> : <Auth />;
      case Page.MyPlans:
        return user ? <MyPlans onViewPlan={handleViewPlan} /> : <Auth />;
      case Page.Planner:
        return <Planner onPlanGenerated={handlePlanGenerated} />;
      case Page.Dashboard:
        return (
            <Dashboard 
                currentPlan={currentPlan} 
                onSavePlan={handleSavePlan}
                onCreateNewPlan={handleCreateNewPlan} 
                navigateTo={navigateTo}
            />
        );
      case Page.Learn:
        return <Learn />;
      case Page.Calculator:
        return <Calculator initialActive={pageParams} />;
      case Page.About:
        return <About navigateTo={navigateTo} />;
      case Page.More:
        return <More initialActiveId={pageParams} navigateTo={navigateTo} />;
      default:
        return <Home onGetStartedClick={handleGetStarted} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className={`min-h-screen text-slate-800 font-sans ${currentPage !== Page.Home ? 'bg-slate-50' : ''}`}>
      {currentPage === Page.Home && <div className="animated-wave-bg" />}
      <Header 
        currentPage={currentPage} 
        navigateTo={navigateTo}
        user={user}
        onLogout={handleLogout}
      />
      <main className="p-4 sm:p-6 md:p-8 relative">
        {renderPage()}
      </main>
      <Chatbot />
      { !authLoading && <OnboardingTour /> }
      
      {/* Modals */}
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
    </div>
  );
};

export default App;
