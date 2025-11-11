import React, { useState, useEffect } from 'react';

interface SIPCalculatorProps {
  onBack: () => void;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}).format(value);

const SIPCalculator: React.FC<SIPCalculatorProps> = ({ onBack }) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [stepUp, setStepUp] = useState(10);
  const [years, setYears] = useState(15);
  const [months, setMonths] = useState(0);
  const [inflation, setInflation] = useState(6);

  const [results, setResults] = useState({
    investedAmount: 0,
    futureValue: 0,
    wealthGained: 0,
    futureValueAdjusted: 0,
  });

  useEffect(() => {
    let invested = 0;
    let futureVal = 0;
    const totalMonths = years * 12 + months;
    const monthlyReturnRate = returnRate / 100 / 12;

    let currentMonthlyInvestment = monthlyInvestment;

    for (let i = 1; i <= totalMonths; i++) {
        invested += currentMonthlyInvestment;
        futureVal = (futureVal + currentMonthlyInvestment) * (1 + monthlyReturnRate);

        if (i % 12 === 0 && i < totalMonths) {
            currentMonthlyInvestment *= (1 + stepUp / 100);
        }
    }
    
    const totalYears = totalMonths / 12;
    const futureValueAdjustedForInflation = futureVal / Math.pow(1 + inflation / 100, totalYears);

    setResults({
        investedAmount: invested,
        futureValue: futureVal,
        wealthGained: futureVal - invested,
        futureValueAdjusted: futureValueAdjustedForInflation,
    });

  }, [monthlyInvestment, returnRate, stepUp, years, months, inflation]);

  const InputSlider: React.FC<{ label: string; value: number; onChange: (val: number) => void; min: number; max: number; step: number; unit: string }> = 
  ({ label, value, onChange, min, max, step, unit }) => (
      <div>
          <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-700">{label}</label>
              <input 
                  type="number" 
                  value={value} 
                  onChange={(e) => onChange(parseFloat(e.target.value) || 0)} 
                  className="w-28 text-right font-semibold text-blue-600 border-0 bg-transparent focus:ring-0"
              />
          </div>
          <input 
              type="range" 
              min={min} 
              max={max} 
              step={step}
              value={value} 
              onChange={(e) => onChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
      </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-sm font-semibold text-blue-600 hover:underline mb-4">&larr; Back to Calculators</button>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Advanced SIP Calculator</h1>
        <p className="text-slate-600">Estimate your SIP returns with annual step-up and inflation.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-6">
          <InputSlider label="Monthly Investment" value={monthlyInvestment} onChange={setMonthlyInvestment} min={500} max={100000} step={500} unit="₹" />
          <InputSlider label="Expected Return Rate (% p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={30} step={0.5} unit="%" />
          <InputSlider label="Annual Step-up (%)" value={stepUp} onChange={setStepUp} min={0} max={25} step={1} unit="%" />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Time Period</label>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <input type="number" value={years} onChange={e => setYears(parseInt(e.target.value) || 0)} className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    <span className="text-sm text-slate-600">Year(s)</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="number" value={months} onChange={e => setMonths(parseInt(e.target.value) || 0)} max={11} className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    <span className="text-sm text-slate-600">Month(s)</span>
                </div>
            </div>
          </div>
          <InputSlider label="Inflation Rate (% p.a.)" value={inflation} onChange={setInflation} min={0} max={15} step={0.5} unit="%" />
        </div>
        <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center text-center">
            <div className="space-y-4">
                <div>
                    <p className="text-blue-200 text-sm">Invested Amount</p>
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(results.investedAmount)}</p>
                </div>
                 <div>
                    <p className="text-blue-200 text-sm">Wealth Gained</p>
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(results.wealthGained)}</p>
                </div>
                <div>
                    <p className="text-blue-200 text-lg">Future Value</p>
                    <p className="text-4xl sm:text-5xl font-extrabold">{formatCurrency(results.futureValue)}</p>
                </div>
                 <div className="pt-4 border-t border-blue-500">
                    <p className="text-blue-200 text-sm">Future Value (Inflation Adjusted)</p>
                    <p className="text-xl font-bold">{formatCurrency(results.futureValueAdjusted)}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;