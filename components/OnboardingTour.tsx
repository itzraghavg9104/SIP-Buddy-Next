
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IconSparkles, IconX } from './Icons';

// Bot detection utility to prevent tour from showing to crawlers
const isBot = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;

  const botPatterns = [
    /bot/i, /googlebot/i, /crawler/i, /spider/i, /robot/i, /crawling/i,
    /facebookexternalhit/i, /slurp/i, /duckduckbot/i, /baiduspider/i,
    /yandexbot/i, /sogou/i, /exabot/i, /ia_archiver/i, /bingbot/i,
    /lighthouse/i, /chrome-lighthouse/i, /gtmetrix/i, /pingdom/i,
    /headless/i, /phantom/i, /selenium/i
  ];

  const userAgent = navigator.userAgent || '';
  return botPatterns.some(pattern => pattern.test(userAgent));
};

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

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

const OnboardingTour: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);

  useEffect(() => {
    try {
      // Don't show tour for bots/crawlers - SEO protection
      if (isBot()) {
        return;
      }

      const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY);
      if (!tourCompleted) {
        // Delay the tour start slightly to ensure the page has rendered
        setTimeout(() => setShowTour(true), 1000);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  useLayoutEffect(() => {
    if (!showTour) return;

    const handleResize = () => {
      updateTargetPosition();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    updateTargetPosition();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [currentStep, showTour]);

  const updateTargetPosition = () => {
    const isMobile = window.innerWidth < 768;
    const currentStepData = tourSteps[currentStep];
    const targetSelector = isMobile ? currentStepData.targetMobile : currentStepData.targetDesktop;

    const targetElement = document.querySelector(targetSelector) as HTMLElement;

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();

      // Add some padding to the highlight box
      const padding = 4;
      const tRect = {
        top: rect.top - padding,
        left: rect.left - padding,
        width: rect.width + (padding * 2),
        height: rect.height + (padding * 2),
        bottom: rect.bottom + padding,
        right: rect.right + padding,
      };

      setTargetRect(tRect);

      // Tooltip Positioning
      const tooltipWidth = 288;  // w-72
      let top = tRect.bottom + 12;
      let left = tRect.left + (tRect.width / 2) - (tooltipWidth / 2);

      // Ensure tooltip stays within viewport
      if (left < 16) left = 16;
      if (left + tooltipWidth > window.innerWidth - 16) {
        left = window.innerWidth - tooltipWidth - 16;
      }

      // If tooltip goes off bottom, show it above
      if (top + 180 > window.innerHeight) {
        top = tRect.top - 12 - 180; // Approximate height
      }

      setTooltipStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        opacity: 1,
      });

    } else {
      // Fallback if element not found
      setTargetRect(null);
      setTooltipStyle({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 1,
      });
    }
  };

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
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
      {/* Spotlight Overlays: 4 divs to create a hole */}
      {targetRect ? (
        <>
          {/* Top */}
          <div
            className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300"
            style={{ height: `${Math.max(0, targetRect.top)}px` }}
          />
          {/* Bottom */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300"
            style={{ top: `${Math.max(0, targetRect.bottom)}px` }}
          />
          {/* Left */}
          <div
            className="fixed left-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300"
            style={{
              top: `${Math.max(0, targetRect.top)}px`,
              height: `${Math.max(0, targetRect.height)}px`,
              width: `${Math.max(0, targetRect.left)}px`
            }}
          />
          {/* Right */}
          <div
            className="fixed right-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-300"
            style={{
              top: `${Math.max(0, targetRect.top)}px`,
              height: `${Math.max(0, targetRect.height)}px`,
              left: `${Math.max(0, targetRect.right)}px`
            }}
          />
          {/* Border Highlight around the target for extra visibility */}
          <div
            className="fixed z-[9998] border-2 border-white rounded-lg shadow-[0_0_0_4px_rgba(59,130,246,0.5)] pointer-events-none transition-all duration-300"
            style={{
              top: `${targetRect.top}px`,
              left: `${targetRect.left}px`,
              width: `${targetRect.width}px`,
              height: `${targetRect.height}px`,
            }}
          />
        </>
      ) : (
        // Fallback full overlay if target not found
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[9998]" onClick={handleFinish} />
      )}

      {/* Tooltip */}
      <div
        style={tooltipStyle}
        className="w-72 bg-white rounded-xl shadow-2xl p-5 z-[9999] transition-all duration-300 ease-in-out"
        role="dialog"
        aria-labelledby="tour-title"
        aria-hidden="true"
      >
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3">
            <IconSparkles className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 id="tour-title" className="text-lg font-bold text-slate-800 leading-tight">{title}</h3>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-5 leading-relaxed">{content}</p>
        <div className="flex justify-between items-center border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-400">
            Step {currentStep + 1} of {tourSteps.length}
          </span>
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button onClick={handlePrev} className="text-sm font-semibold text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                Back
              </button>
            )}
            <button onClick={handleNext} className="text-sm font-semibold text-white bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 shadow-sm transition-colors">
              {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
        <button onClick={handleFinish} className="absolute top-2 right-2 p-1 text-slate-300 hover:text-slate-500 rounded-full hover:bg-slate-50 transition-colors" aria-label="Close tour">
          <IconX className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default OnboardingTour;
