"use client";

import React, { useState, useEffect, useRef } from 'react';
import { InvestmentPlan, RiskTolerance, UserProfile } from '../types';
import { generateInvestmentPlan } from '../actions/groqActions';
import { IconSparkles } from '../components/Icons';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';
import { logoIcon } from '../assets/logo';
import SafeImage from './SafeImage';

const loadingSteps = [
  'Analyzing your financial profile...',
  'Calibrating risk tolerance...',
  'Generating personalized asset allocation...',
  'Projecting future growth scenarios...',
  'Searching for top-performing funds...',
  'Finalizing your investment plan...',
];

const Planner: React.FC = () => {
  const { user, handlePlanGenerated, setIsPlanLoginModalOpen, isGeneratingPlan, generationProgress, startPlanGeneration } = useGlobalContext();
  const router = useRouter();

  const [formData, setFormData] = useState({
    monthlyIncome: '',
    age: '',
    familyMembers: '',
    existingLoans: '',
    loanTenureRemaining: '',
    investmentTimeHorizon: '',
    riskTolerance: RiskTolerance.Moderate,
    investmentGoal: '',
    stepUpPercentage: '10',
  });
  const [isStepUpEnabled, setIsStepUpEnabled] = useState(false);

  // Removed local isLoading/progress in favor of Global Context
  const [error, setError] = useState<string | null>(null);


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
      stepUpPercentage: isStepUpEnabled ? (Number(formData.stepUpPercentage) || 0) : undefined,
    };

    try {
      // Start background generation via Global Context
      await startPlanGeneration(profile);
      // Navigation is handled by Context on success
    } catch (err: any) {
      console.error(err);

      if (err.message && err.message.includes("AI_LIMIT_REACHED")) {
        // Show gentle, user-friendly error
        setError("Our AI servers are currently maximizing their brainpower! 🧠💥 Please wait a moment and try again.");
      } else {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      }
    }
  };

  if (isGeneratingPlan) {
    const currentStepIndex = Math.min(
      Math.floor((generationProgress / 100) * loadingSteps.length),
      loadingSteps.length - 1
    );

    return (
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-blue-50 rounded-full mb-4 animate-pulse p-1.5">
              <SafeImage
                src={logoIcon}
                alt="AI"
                className="h-10 w-10"
                fallback={<IconSparkles className="h-8 w-8 text-blue-600" />}
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Generating Your Plan</h2>
            {generationProgress === 100 ? (
              <p className="text-green-600 mt-2 font-bold animate-pulse">Plan successfully generated! Redirecting...</p>
            ) : generationProgress >= 95 ? (
              <p className="text-amber-600 mt-2 font-medium animate-pulse">It is taking longer than usual... wrapping things up!</p>
            ) : (
              <p className="text-slate-500 mt-2">Our AI is analyzing thousands of data points...</p>
            )}

            {/* Estimated Time */}
            {generationProgress < 95 && (
              <p className="text-xs text-slate-400 mt-2">
                Estimated time remaining: {
                  (() => {
                    const msRemaining = Math.max(0, 180000 - (generationProgress / 100) * 180000);
                    const minutes = Math.floor(msRemaining / 60000);
                    const seconds = Math.floor((msRemaining % 60000) / 1000);
                    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                  })()
                }
              </p>
            )}
          </div>

          <div className="space-y-4 relative z-10">
            {loadingSteps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <div key={index} className={`flex items-center transition-all duration-500 ${isCurrent ? 'transform translate-x-2' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 mr-4 transition-colors duration-300 ${isCompleted ? 'bg-green-500 border-green-500' :
                    isCurrent ? 'border-blue-500 bg-blue-50' :
                      'border-slate-200'
                    }`}>
                    {isCompleted ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    ) : isCurrent ? (
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping" />
                    ) : (
                      <div className="w-2 h-2 bg-slate-300 rounded-full" />
                    )}
                  </div>
                  <span className={`font-medium transition-colors duration-300 ${isCompleted ? 'text-slate-500' :
                    isCurrent ? 'text-blue-700 text-lg' :
                      'text-slate-400'
                    }`}>
                    {step}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-8 relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-100">
              <div style={{ width: `${generationProgress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"></div>
            </div>

            <div className="text-center mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-slate-700">
                Do not close the window, you can explore our other feature meanwhile.
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg relative text-sm">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
              <button onClick={() => { setError(null); }} className="mt-2 underline block mx-auto font-semibold">Try Again</button>
            </div>
          )}
        </div>
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
          <div className="bg-blue-100 p-1.5 rounded-full mr-4">
            <SafeImage
              src={logoIcon}
              alt="AI"
              className="h-8 w-8"
              fallback={<IconSparkles className="h-6 w-6 text-blue-600" />}
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Generate My AI Plan</h2>
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

            {/* Step-Up Toggle and Input */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border p-3 rounded-md bg-white border-slate-300 h-10 mt-6">
                <label className="text-sm font-medium text-slate-700">Enable Annual Step-Up?</label>
                <button
                  type="button"
                  onClick={() => setIsStepUpEnabled(!isStepUpEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isStepUpEnabled ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isStepUpEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              {isStepUpEnabled && (
                <div>
                  <label htmlFor="stepUpPercentage" className="block text-sm font-medium text-slate-700">Annual Step-Up (%)</label>
                  <input
                    type="number"
                    name="stepUpPercentage"
                    value={formData.stepUpPercentage}
                    onChange={handleChange}
                    onWheel={handleWheel}
                    min="1"
                    max="100"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-slate-500">Increase your SIP amount annually</p>
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Risk Tolerance</label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {Object.values(RiskTolerance).map((risk) => (
                  <button
                    key={risk}
                    type="button"
                    onClick={() => handleRiskChange(risk)}
                    className={`px-4 py-3 text-sm font-semibold rounded-md transition-colors text-center ${formData.riskTolerance === risk
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
            <button type="submit" disabled={isGeneratingPlan} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed">
              {isGeneratingPlan ? (
                <IconSparkles className="w-6 h-6 mr-3 animate-spin" />
              ) : (
                <SafeImage
                  src={logoIcon}
                  alt="AI"
                  className="w-6 h-6 mr-3 brightness-0 invert"
                  fallback={<IconSparkles className="w-6 h-6 mr-3" />}
                />
              )}
              {isGeneratingPlan ? 'Generating Your Plan...' : 'Generate My AI Plan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Planner;
