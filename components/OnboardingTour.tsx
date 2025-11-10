import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IconSparkles, IconX } from './Icons';

const TOUR_STORAGE_KEY = 'sipBuddyTourCompleted';

const tourSteps = [
  {
    targetDesktop: '[data-tour-id="planner-step"]',
    targetMobile: '[data-tour-id="planner-step-mobile"]',
    title: 'Start with the Planner',
    content: 'This is where your journey begins! Create a personalized AI-powered investment plan based on your financial profile.',
    position: 'bottom',
  },
  {
    targetDesktop: '[data-tour-id="dashboard-step"]',
    targetMobile: '[data-tour-id="dashboard-step-mobile"]',
    title: 'View Your Dashboard',
    content: 'Once your plan is generated, you can view your asset allocation, growth projections, and fund recommendations here.',
    position: 'bottom',
  },
  {
    targetDesktop: '[data-tour-id="learn-step"]',
    targetMobile: '[data-tour-id="learn-step-mobile"]',
    title: 'Knowledge Hub',
    content: 'Empower yourself with knowledge. Learn about SIPs, mutual funds, and smart investment strategies.',
    position: 'bottom',
  },
  {
    targetDesktop: '[data-tour-id="calculator-step"]',
    targetMobile: '[data-tour-id="calculator-step-mobile"]',
    title: 'Financial Calculators',
    content: 'Use our handy calculators to plan your investments, withdrawals, and even estimate your income tax.',
    position: 'bottom',
  },
  {
    targetDesktop: '[data-tour-id="more-step"]',
    targetMobile: '[data-tour-id="more-step-mobile"]',
    title: 'Discover More Tools',
    content: 'Find additional tools, like the Financial Advisor locator, to assist you on your investment journey.',
    position: 'bottom',
  },
];

const OnboardingTour: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState({});

  useEffect(() => {
    try {
      const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY);
      if (!tourCompleted) {
        // Delay the tour start slightly to ensure the page has rendered
        setTimeout(() => setShowTour(true), 500);
      }
    } catch (error) {
        console.error("Could not access localStorage:", error);
    }
  }, []);

  useLayoutEffect(() => {
    if (!showTour) return;

    const isMobile = window.innerWidth < 768;
    const currentStepData = tourSteps[currentStep];
    const targetSelector = isMobile ? currentStepData.targetMobile : currentStepData.targetDesktop;
    
    const targetElement = document.querySelector(targetSelector) as HTMLElement;

    if (targetElement) {
        targetElement.style.zIndex = '10001';
        targetElement.style.position = 'relative';

        const rect = targetElement.getBoundingClientRect();
        const tooltipHeight = 150; // Approximate height
        const tooltipWidth = 288;  // w-72
        
        let top = rect.bottom + 12; // Default 'bottom'
        let left = rect.left + rect.width / 2 - tooltipWidth / 2;

        // Ensure the tooltip stays within the viewport
        if (left < 16) left = 16;
        if (left + tooltipWidth > window.innerWidth - 16) {
            left = window.innerWidth - tooltipWidth - 16;
        }

        setTooltipStyle({
            position: 'fixed',
            top: `${top}px`,
            left: `${left}px`,
            transform: 'translateY(0)',
            opacity: 1,
        });

    } else {
         // Fallback for missing element
         setTooltipStyle({
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
         });
    }

    return () => {
        if(targetElement) {
            targetElement.style.zIndex = '';
            targetElement.style.position = '';
        }
    }

  }, [currentStep, showTour]);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };
  
  const handlePrev = () => {
      if(currentStep > 0) {
          setCurrentStep(currentStep - 1);
      }
  }

  const handleFinish = () => {
    setShowTour(false);
    try {
       localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    } catch (error) {
        console.error("Could not set item in localStorage:", error);
    }
  };

  if (!showTour) return null;

  const { title, content } = tourSteps[currentStep];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999]" onClick={handleFinish} />
      <div
        style={tooltipStyle}
        className="w-72 bg-white rounded-lg shadow-2xl p-5 z-[10000] transition-all duration-300 ease-in-out opacity-0"
        role="dialog"
        aria-labelledby="tour-title"
      >
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3">
            <IconSparkles className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 id="tour-title" className="text-lg font-semibold text-slate-800">{title}</h3>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">{content}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-500">
            {currentStep + 1} / {tourSteps.length}
          </span>
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
                <button onClick={handlePrev} className="text-sm font-semibold text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors">
                    Back
                </button>
            )}
            <button onClick={handleNext} className="text-sm font-semibold text-white bg-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
              {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
        <button onClick={handleFinish} className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors" aria-label="Close tour">
            <IconX className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default OnboardingTour;