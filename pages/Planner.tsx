import React, { useState } from 'react';
import { InvestmentPlan, RiskTolerance, UserProfile } from '../types';
import { generateInvestmentPlan } from '../services/geminiService';
import { IconSparkles, IconInfoCircle } from '../components/Icons';

interface PlannerProps {
  onPlanGenerated: (plan: InvestmentPlan, profile: UserProfile) => void;
}

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      onPlanGenerated(plan, profile);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          <IconSparkles className="w-4 h-4 mr-2" />
          AI-Powered Analysis
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Smart Investment Planner</h1>
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
              <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} placeholder="50000" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">Your total monthly income</p>
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age (years)</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="30" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">Your current age</p>
            </div>
            <div>
              <label htmlFor="familyMembers" className="block text-sm font-medium text-slate-700">Family Members</label>
              <input type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} placeholder="1" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">Number of dependents</p>
            </div>
            <div>
              <label htmlFor="existingLoans" className="block text-sm font-medium text-slate-700">Existing Loans (₹)</label>
              <input type="number" name="existingLoans" value={formData.existingLoans} onChange={handleChange} placeholder="0" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">Total outstanding loan amount</p>
            </div>
             <div>
              <label htmlFor="loanTenureRemaining" className="block text-sm font-medium text-slate-700">Loan Tenure Remaining (years)</label>
              <input type="number" name="loanTenureRemaining" value={formData.loanTenureRemaining} onChange={handleChange} placeholder="0" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">Years until loan is paid off</p>
            </div>
            <div>
              <label htmlFor="investmentTimeHorizon" className="block text-sm font-medium text-slate-700">Investment Time Horizon (years)</label>
              <input type="number" name="investmentTimeHorizon" value={formData.investmentTimeHorizon} onChange={handleChange} placeholder="10" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">How long you plan to invest</p>
            </div>
          </div>
          {/* Risk Tolerance */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Risk Tolerance</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(Object.values(RiskTolerance)).map((risk) => (
                <div key={risk} onClick={() => handleRiskChange(risk)} className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.riskTolerance === risk ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500' : 'border-slate-300 hover:border-slate-400'}`}>
                  <div className="flex items-center">
                    <input type="radio" name="riskTolerance" value={risk} checked={formData.riskTolerance === risk} onChange={() => handleRiskChange(risk)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"/>
                    <div className="ml-3">
                        <p className="font-semibold text-slate-800">{risk}</p>
                        <p className="text-xs text-slate-500">
                          {risk === RiskTolerance.Conservative && 'Lower risk, stable returns'}
                          {risk === RiskTolerance.Moderate && 'Balanced risk & returns'}
                          {risk === RiskTolerance.Aggressive && 'Higher risk, higher returns'}
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           {/* Investment Goal */}
          <div>
              <label htmlFor="investmentGoal" className="block text-sm font-medium text-slate-700">Investment Goal</label>
              <textarea name="investmentGoal" value={formData.investmentGoal} onChange={handleChange} rows={2} placeholder="E.g., Retirement planning, child education, wealth creation..." className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <p className="mt-1 text-xs text-slate-500">What are you investing for?</p>
          </div>

          <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-300">
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating...
              </>
            ) : (
                <>
                <IconSparkles className="w-5 h-5" />
                Generate Investment Plan
                </>
            )}
          </button>
          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        </form>
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
          <div className="flex">
              <div className="py-1"><IconInfoCircle className="h-5 w-5 text-yellow-400 mr-3" /></div>
              <div>
                  <p className="font-bold">Important:</p>
                  <p className="text-sm">This tool provides AI-generated educational recommendations only. All mutual fund investments are subject to market risks. Please consult with a certified financial advisor before making any investment decisions.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Planner;