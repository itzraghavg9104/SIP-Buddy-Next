import React, { useState } from 'react';
import SIPCalculator from '../components/SIPCalculator';
import SWPCalculator from '../components/SWPCalculator';
import LumpsumCalculator from '../components/LumpsumCalculator';
import IncomeTaxCalculator from './tools/IncomeTaxCalculator';
import { IconCalculator, IconBriefcase, IconReceiptTax } from '../components/Icons';

type CalculatorType = 'sip' | 'swp' | 'lumpsum' | 'tax';

const Calculator: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'sip':
        return <SIPCalculator onBack={() => setActiveCalculator(null)} />;
      case 'swp':
        return <SWPCalculator onBack={() => setActiveCalculator(null)} />;
      case 'lumpsum':
        return <LumpsumCalculator onBack={() => setActiveCalculator(null)} />;
      case 'tax':
        return <IncomeTaxCalculator onBack={() => setActiveCalculator(null)} />;
      default:
        return renderSelection();
    }
  };

  const renderSelection = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Financial Calculators</h1>
        <p className="text-lg text-slate-600">
          Plan your investments, withdrawals, and taxes with precision.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <button
          onClick={() => setActiveCalculator('sip')}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-blue-500 transition-all transform hover:-translate-y-1"
        >
          <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
            <IconCalculator className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">SIP Calculator</h2>
          <p className="text-slate-500">Calculate the future value of your SIPs with annual step-up and inflation adjustments.</p>
        </button>
        <button
          onClick={() => setActiveCalculator('lumpsum')}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-purple-500 transition-all transform hover:-translate-y-1"
        >
          <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
            <IconBriefcase className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Lumpsum Calculator</h2>
          <p className="text-slate-500">Project the growth of a one-time investment over a specific period.</p>
        </button>
        <button
          onClick={() => setActiveCalculator('swp')}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-green-500 transition-all transform hover:-translate-y-1"
        >
          <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash-banknote-off h-8 w-8 text-green-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.88 9.878a3 3 0 1 0 4.242 4.243m.58 -3.425a3.012 3.012 0 0 0 -1.412 -1.405" /><path d="M10 6h10a2 2 0 0 1 2 2v8c0 .294 -.064 .574 -.178 .825m-2.232 1.585a1.979 1.979 0 0 1 -1.59 .59h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1" /><path d="M12 17v1.01" /><path d="M3 3l18 18" /></svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">SWP Calculator</h2>
          <p className="text-slate-500">Estimate how long your invested corpus will last with systematic monthly withdrawals.</p>
        </button>
        <button
          onClick={() => setActiveCalculator('tax')}
          className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-red-500 transition-all transform hover:-translate-y-1"
        >
          <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
            <IconReceiptTax className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Income Tax Calculator</h2>
          <p className="text-slate-500">Estimate tax liability under the old & new regimes for FY 2024-25.</p>
        </button>
      </div>
    </div>
  );

  return <>{renderCalculator()}</>;
};

export default Calculator;