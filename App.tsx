
import React, { useState } from 'react';
import Header from './components/Header';
import Planner from './pages/Planner';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Chatbot from './components/Chatbot';
import { Page, InvestmentPlan, UserProfile } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Planner);
  const [investmentPlan, setInvestmentPlan] = useState<InvestmentPlan | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);


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
        // Stay on planner if no plan is generated
        setCurrentPage(Page.Planner);
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
    </div>
  );
};

export default App;
