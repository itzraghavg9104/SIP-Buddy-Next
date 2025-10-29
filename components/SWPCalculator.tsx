import React, { useState, useEffect } from 'react';

interface SWPCalculatorProps {
  onBack: () => void;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}).format(value);

const SWPCalculator: React.FC<SWPCalculatorProps> = ({ onBack }) => {
  const [totalInvestment, setTotalInvestment] = useState(10000000); // 1 Crore
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(50000);
  const [returnRate, setReturnRate] = useState(8);
  const [years, setYears] = useState(20);
  const [months, setMonths] = useState(0);

  const [results, setResults] = useState({
    finalValue: 0,
    totalWithdrawn: 0,
  });

  useEffect(() => {
    const P = totalInvestment;
    const W = monthlyWithdrawal;
    const i = returnRate / 100 / 12; // monthly rate
    const n = years * 12 + months;

    if (P <= 0 || n <= 0) {
        setResults({ finalValue: P, totalWithdrawn: 0 });
        return;
    }

    // Future value of lump sum: P * (1+i)^n
    const futureValueOfPrincipal = P * Math.pow(1 + i, n);
    // Future value of annuity (withdrawals): W * [((1+i)^n - 1) / i]
    const futureValueOfWithdrawals = (i > 0) ? W * ((Math.pow(1 + i, n) - 1) / i) : W * n;
    
    const finalValue = futureValueOfPrincipal - futureValueOfWithdrawals;
    const totalWithdrawn = W * n;

    setResults({
        finalValue: finalValue > 0 ? finalValue : 0, // Corpus can't be negative
        totalWithdrawn: totalWithdrawn,
    });

  }, [totalInvestment, monthlyWithdrawal, returnRate, years, months]);

  const InputSlider: React.FC<{ label: string; value: number; onChange: (val: number) => void; min: number; max: number; step: number; unit: string }> = 
  ({ label, value, onChange, min, max, step, unit }) => (
      <div>
          <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-700">{label}</label>
              <input 
                  type="number" 
                  value={value} 
                  onChange={(e) => onChange(parseFloat(e.target.value) || 0)} 
                  className="w-36 text-right font-semibold text-green-600 border-0 bg-transparent focus:ring-0"
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
        <h1 className="text-3xl font-bold text-slate-900 mb-1">SWP Calculator</h1>
        <p className="text-slate-600">Estimate the final value of your corpus with systematic withdrawals.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-6">
          <InputSlider label="Total Investment" value={totalInvestment} onChange={setTotalInvestment} min={100000} max={50000000} step={100000} unit="₹" />
          <InputSlider label="Withdrawal per month" value={monthlyWithdrawal} onChange={setMonthlyWithdrawal} min={1000} max={200000} step={1000} unit="₹" />
          <InputSlider label="Expected Return Rate (% p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={20} step={0.5} unit="%" />
           <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Withdrawal Period</label>
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
        </div>
        <div className="bg-green-600 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center text-center">
             <div className="space-y-6">
                <div>
                    <p className="text-green-200 text-sm">Total Withdrawn</p>
                    <p className="text-2xl font-bold">{formatCurrency(results.totalWithdrawn)}</p>
                </div>
                <div>
                    <p className="text-green-200 text-lg">Final Corpus Value</p>
                    <p className="text-5xl font-extrabold">{formatCurrency(results.finalValue)}</p>
                </div>
                 <div className="pt-4 border-t border-green-500">
                    <p className="text-xs text-green-200">
                        After {years} years and {months} months, your initial corpus of {formatCurrency(totalInvestment)} is projected to have a final value of {formatCurrency(results.finalValue)}.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SWPCalculator;