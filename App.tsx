import React, { useState } from 'react';
import Header from './components/Header';
import Planner from './pages/Planner';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Calculator from './pages/Calculator';
import About from './pages/About';
import More from './pages/More';
import Chatbot from './components/Chatbot';
import { Page, InvestmentPlan, UserProfile } from './types';
import NotificationModal from './components/NotificationModal';
import OnboardingTour from './components/OnboardingTour';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Planner);
  const [investmentPlan, setInvestmentPlan] = useState<InvestmentPlan | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showDashboardWarning, setShowDashboardWarning] = useState(false);


  const handlePlanGenerated = (plan: InvestmentPlan, profile: UserProfile) => {
    setInvestmentPlan(plan);
    setUserProfile(profile);
    setCurrentPage(Page.Dashboard);
  };

  const handleCreateNewPlan = () => {
    setInvestmentPlan(null);
    setUserProfile(null);
    setCurrentPage(Page.Planner);
  };
  
  const navigateTo = (page: Page) => {
    if(page === Page.Dashboard && !investmentPlan) {
        // Show a warning pop-up instead of silently failing
        setShowDashboardWarning(true);
    } else {
        setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Planner:
        return <Planner onPlanGenerated={handlePlanGenerated} />;
      case Page.Dashboard:
        return investmentPlan && userProfile ? <Dashboard investmentPlan={investmentPlan} userProfile={userProfile} onCreateNewPlan={handleCreateNewPlan} /> : <Planner onPlanGenerated={handlePlanGenerated} />;
      case Page.Learn:
        return <Learn />;
      case Page.Calculator:
        return <Calculator />;
      case Page.About:
        return <About />;
      case Page.More:
        return <More />;
      default:
        return <Planner onPlanGenerated={handlePlanGenerated} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="p-4 sm:p-6 md:p-8">
        {renderPage()}
      </main>
      <Chatbot />
      <NotificationModal
        isOpen={showDashboardWarning}
        onClose={() => setShowDashboardWarning(false)}
        title="No Plan Generated"
        message="Please create an investment plan from the 'Planner' page first to access your dashboard."
      />
      <OnboardingTour />
    </div>
  );
};

export default App;