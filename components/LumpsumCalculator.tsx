import React, { useState, useEffect } from 'react';

interface LumpsumCalculatorProps {
  onBack: () => void;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}).format(value);


// A more robust InputSlider component to handle smooth typing and dragging.
const InputSlider: React.FC<{
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
}> = ({ label, value, onChange, min, max, step, unit }) => {
  const [inputValue, setInputValue] = useState(String(value));
  const inputId = `input-${label.replace(/\s+/g, '-')}`;

  useEffect(() => {
    // Update local state only if the parent value changes and the input is not focused.
    // This prevents the cursor from jumping while typing.
    if (document.activeElement?.id !== inputId) {
      setInputValue(String(value));
    }
  }, [value, inputId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    let num = parseFloat(inputValue);
    if (isNaN(num)) {
      num = min;
    }
    const clampedValue = Math.max(min, Math.min(max, num));
    onChange(clampedValue);
    setInputValue(String(clampedValue));
  };
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value);
    onChange(num);
    setInputValue(String(num));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">{label}</label>
        <div className="flex items-center">
            {unit === '₹' && <span className="font-semibold text-purple-600">{unit}</span>}
            <input
                type="text" // Use text to allow for more flexible typing
                id={inputId}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-36 text-right font-semibold border-0 bg-transparent focus:ring-0 p-0 text-purple-600"
                onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
            {unit === '%' && <span className="font-semibold text-purple-600">{unit}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};


const LumpsumCalculator: React.FC<LumpsumCalculatorProps> = ({ onBack }) => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);

  const [results, setResults] = useState({
    investedAmount: 0,
    futureValue: 0,
    wealthGained: 0,
  });

  useEffect(() => {
    const P = investmentAmount;
    const r = returnRate / 100;
    const n = 12; // Compounded monthly
    const t = years + months / 12;

    const futureVal = P * Math.pow(1 + r / n, n * t);

    setResults({
        investedAmount: P,
        futureValue: futureVal,
        wealthGained: futureVal - P,
    });

  }, [investmentAmount, returnRate, years, months]);

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-sm font-semibold text-blue-600 hover:underline mb-4">&larr; Back to Calculators</button>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Lumpsum Calculator</h1>
        <p className="text-slate-600">Project the future value of your one-time investment.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-6">
          <InputSlider label="Total Investment" value={investmentAmount} onChange={setInvestmentAmount} min={1000} max={10000000} step={1000} unit="₹" />
          <InputSlider label="Expected Return Rate (% p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={30} step={0.5} unit="%" />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Time Period</label>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <input type="number" value={years} onChange={e => setYears(parseInt(e.target.value) || 0)} className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                    <span className="text-sm text-slate-600">Year(s)</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="number" value={months} onChange={e => setMonths(parseInt(e.target.value) || 0)} max={11} className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                    <span className="text-sm text-slate-600">Month(s)</span>
                </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-600 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center text-center">
            <div className="space-y-6">
                <div>
                    <p className="text-purple-200 text-sm">Invested Amount</p>
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(results.investedAmount)}</p>
                </div>
                 <div>
                    <p className="text-purple-200 text-sm">Wealth Gained</p>
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(results.wealthGained)}</p>
                </div>
                <div className="pt-2 border-t border-purple-500">
                    <p className="text-purple-200 text-lg">Future Value</p>
                    <p className="text-4xl sm:text-5xl font-extrabold">{formatCurrency(results.futureValue)}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LumpsumCalculator;