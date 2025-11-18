import React, { useState, useEffect, useRef } from 'react';
import { InvestmentPlan, RiskTolerance, UserProfile } from '../types';
import { generateInvestmentPlan } from '../services/geminiService';
import { IconSparkles } from '../components/Icons';

interface PlannerProps {
  onPlanGenerated: (plan: InvestmentPlan, profile: UserProfile) => void;
}

const loadingSteps = [
  'Analyzing your financial profile...',
  'Calibrating risk tolerance...',
  'Generating personalized asset allocation...',
  'Projecting future growth scenarios...',
  'Searching for top-performing funds...',
  'Finalizing your investment plan...',
];

const Planner: React.FC<PlannerProps> = ({ onPlanGenerated }) => {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    age: '',
    familyMembers: '',
    existingLoans: '',
    loanTenureRemaining: '',
    investmentTimeHorizon: '',
    riskTolerance: RiskTolerance.Moderate,
    investmentGoal: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(loadingSteps[0]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
        setProgress(0);
        setLoadingText(loadingSteps[0]);
        const startTime = Date.now();
        // Animation duration for reaching 90%. The last 10% is reserved for the actual completion.
        const animationDuration = 12000; 

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            // Linearly progress to 90%
            const calculatedProgress = Math.min((elapsedTime / animationDuration) * 100, 90);
            
            setProgress(calculatedProgress);

            const stepIndex = Math.min(
              Math.floor((calculatedProgress / 100) * loadingSteps.length),
              loadingSteps.length - 1
            );
            setLoadingText(loadingSteps[stepIndex]);

            if (calculatedProgress < 90 && isLoading) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };

        animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoading]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Prevent negative values for number inputs
    if (e.target.type === 'number' && parseFloat(value) < 0) {
       return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Helper to prevent mouse wheel from changing values
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
      (e.target as HTMLInputElement).blur();
  };

  const handleRiskChange = (value: RiskTolerance) => {
    setFormData((prev) => ({ ...prev, riskTolerance: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Convert form data strings to numbers for the API
    const profile: UserProfile = {
        monthlyIncome: Number(formData.monthlyIncome) || 50000,
        age: Number(formData.age) || 30,
        familyMembers: Number(formData.familyMembers) || 1,
        existingLoans: Number(formData.existingLoans) || 0,
        loanTenureRemaining: Number(formData.loanTenureRemaining) || 0,
        investmentTimeHorizon: Number(formData.investmentTimeHorizon) || 10,
        riskTolerance: formData.riskTolerance,
        investmentGoal: formData.investmentGoal || 'Retirement planning, child education, wealth creation...',
    };

    try {
      const plan = await generateInvestmentPlan(profile);
      // Success: Jump to 100% and show completion
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setProgress(100);
      setLoadingText('Plan generated successfully!');
      
      // Allow the UI to render the 100% state briefly before switching views
      setTimeout(() => {
          setIsLoading(false);
          onPlanGenerated(plan, profile);
      }, 800); // Slightly longer delay to let user see the 100% bar
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <IconSparkles className="h-12 w-12 text-blue-600 animate-spin mx-auto" />
        <h2 className="mt-4 text-2xl font-bold text-slate-800">{loadingText}</h2>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-6 overflow-hidden">
            <div 
                className="bg-blue-600 h-2.5 rounded-full animated-gradient" 
                style={{ 
                    width: `${progress}%`, 
                    transition: 'width 0.2s ease-out' // Smooth transition
                }}
            ></div>
        </div>
        <p className="mt-2 text-sm text-slate-500">{Math.round(progress)}% complete</p>
        
        {error && (
            <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
                <button onClick={() => { setIsLoading(false); setError(null); }} className="mt-2 block mx-auto text-sm font-semibold text-blue-600 hover:underline">
                    Go back to form
                </button>
            </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          <IconSparkles className="w-4 h-4 mr-2" />
          AI-Powered Analysis
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Smart Investment Planner</h1>
        <p className="text-lg text-slate-600">
          Get personalized SIP recommendations based on your financial profile with AI-powered analysis and real fund suggestions
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
                 <IconSparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold">Create Your Investment Plan</h2>
        </div>
        <p className="text-slate-500 mb-8 -mt-4 ml-16">Fill in your financial details to get AI-powered recommendations</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Form Fields */}
            <div>
              <label htmlFor="monthlyIncome" className="block text-sm font-medium text-slate-700">Monthly Income (₹)</label>
              <input 
                type="number" 
                name="monthlyIncome" 
                value={formData.monthlyIncome} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="0"
                placeholder="50000" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">Your total monthly income</p>
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age (years)</label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="0"
                placeholder="30" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">Your current age</p>
            </div>
            <div>
              <label htmlFor="familyMembers" className="block text-sm font-medium text-slate-700">Family Members</label>
              <input 
                type="number" 
                name="familyMembers" 
                value={formData.familyMembers} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="0"
                placeholder="1" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">Number of dependents</p>
            </div>
            <div>
              <label htmlFor="existingLoans" className="block text-sm font-medium text-slate-700">Existing Loans (₹)</label>
              <input 
                type="number" 
                name="existingLoans" 
                value={formData.existingLoans} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="0"
                placeholder="0" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">Total outstanding loan amount</p>
            </div>
            <div>
              <label htmlFor="loanTenureRemaining" className="block text-sm font-medium text-slate-700">Loan Tenure Remaining (years)</label>
              <input 
                type="number" 
                name="loanTenureRemaining" 
                value={formData.loanTenureRemaining} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="0"
                placeholder="5" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">Years left to pay off loans</p>
            </div>
            <div>
              <label htmlFor="investmentTimeHorizon" className="block text-sm font-medium text-slate-700">Investment Horizon (years)</label>
              <input 
                type="number" 
                name="investmentTimeHorizon" 
                value={formData.investmentTimeHorizon} 
                onChange={handleChange} 
                onWheel={handleWheel}
                min="1"
                placeholder="10" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
              <p className="mt-1 text-xs text-slate-500">How long you plan to stay invested</p>
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Risk Tolerance</label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                    {Object.values(RiskTolerance).map((risk) => (
                    <button
                        key={risk}
                        type="button"
                        onClick={() => handleRiskChange(risk)}
                        className={`px-4 py-3 text-sm font-semibold rounded-md transition-colors text-center ${
                        formData.riskTolerance === risk
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                    >
                        {risk}
                    </button>
                    ))}
                </div>
            </div>
            <div className="md:col-span-2">
                <label htmlFor="investmentGoal" className="block text-sm font-medium text-slate-700">Investment Goal</label>
                <textarea name="investmentGoal" value={formData.investmentGoal} onChange={handleChange} rows={3} placeholder="e.g., Retirement planning, child's education, wealth creation..." className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                <p className="mt-1 text-xs text-slate-500">What are you saving for?</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <button type="submit" disabled={isLoading} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed">
                <IconSparkles className={`w-6 h-6 mr-3 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Generating Your Plan...' : 'Generate My AI Plan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Planner;