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


// A more robust InputSlider component to handle smooth typing and dragging.
const InputSlider: React.FC<{
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  colorClass: string;
}> = ({ label, value, onChange, min, max, step, unit, colorClass }) => {
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
            {unit === '₹' && <span className={`font-semibold ${colorClass}`}>{unit}</span>}
            <input
                type="text" // Use text to allow for more flexible typing
                id={inputId}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`w-36 text-right font-semibold border-0 bg-transparent focus:ring-0 p-0 ${colorClass}`}
                // Prevent scientific notation for large numbers
                onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
            {unit === '%' && <span className={`font-semibold ${colorClass}`}>{unit}</span>}
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


const SWPCalculator: React.FC<SWPCalculatorProps> = ({ onBack }) => {
  const [totalInvestment, setTotalInvestment] = useState(10000000); // 1 Crore
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(50000);
  const [returnRate, setReturnRate] = useState(8);
  const [years, setYears] = useState(20);
  const [months, setMonths] = useState(0);

  const [results, setResults] = useState({
    finalValue: 0,
    totalWithdrawn: 0,
    corpusDepletionMonths: null as number | null,
  });

  useEffect(() => {
    const P = totalInvestment;
    const W = monthlyWithdrawal;
    const i = returnRate / 100 / 12; // monthly rate
    const n = years * 12 + months;

    let corpusDepletionMonths: number | null = null;
    let finalValue = P;
    let totalWithdrawn = 0;

    if (P > 0 && n > 0) {
        if (i > 0 && W > P * i) {
            // Corpus will deplete if withdrawal is more than interest earned
            const numerator = Math.log(W / (W - P * i));
            const denominator = Math.log(1 + i);
            if (denominator > 0) {
                corpusDepletionMonths = numerator / denominator;
            }
        }
        
        // Future value of lump sum: P * (1+i)^n
        const futureValueOfPrincipal = P * Math.pow(1 + i, n);
        // Future value of annuity (withdrawals): W * [((1+i)^n - 1) / i]
        const futureValueOfWithdrawals = (i > 0) ? W * ((Math.pow(1 + i, n) - 1) / i) : W * n;
        
        finalValue = futureValueOfPrincipal - futureValueOfWithdrawals;
        totalWithdrawn = W * n;
    }


    setResults({
        finalValue,
        totalWithdrawn,
        corpusDepletionMonths,
    });

  }, [totalInvestment, monthlyWithdrawal, returnRate, years, months]);
  
  const isDepleted = results.finalValue < 0;

  const resultColorClass = isDepleted ? 'text-red-600' : 'text-green-600';
  const resultBgClass = isDepleted ? 'bg-red-600' : 'bg-green-600';
  const resultBorderClass = isDepleted ? 'border-red-500' : 'border-green-500';
  const resultTextColorClass = isDepleted ? 'text-red-200' : 'text-green-200';

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-sm font-semibold text-blue-600 hover:underline mb-4">&larr; Back to Calculators</button>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">SWP Calculator</h1>
        <p className="text-slate-600">Estimate the final value of your corpus with systematic withdrawals.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-6">
          <InputSlider label="Total Investment" value={totalInvestment} onChange={setTotalInvestment} min={100000} max={50000000} step={50000} unit="₹" colorClass={resultColorClass}/>
          <InputSlider label="Withdrawal per month" value={monthlyWithdrawal} onChange={setMonthlyWithdrawal} min={1000} max={200000} step={500} unit="₹" colorClass={resultColorClass}/>
          <InputSlider label="Expected Return Rate (% p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={20} step={0.5} unit="%" colorClass={resultColorClass}/>
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
        <div className={`text-white p-8 rounded-xl shadow-lg flex flex-col justify-center text-center transition-colors duration-300 ${resultBgClass}`}>
             <div className="space-y-6">
                <div>
                    <p className={resultTextColorClass}>Total Withdrawn</p>
                    <p className="text-2xl font-bold">{formatCurrency(results.totalWithdrawn)}</p>
                </div>
                <div>
                    <p className={resultTextColorClass}>Final Corpus Value</p>
                    <p className="text-5xl font-extrabold">{formatCurrency(results.finalValue)}</p>
                     {isDepleted && results.corpusDepletionMonths !== null && (
                        <p className="text-sm font-semibold text-red-100 mt-2">
                            Fund Depleted in ~{Math.floor(results.corpusDepletionMonths / 12)} years, {Math.round(results.corpusDepletionMonths % 12)} months
                        </p>
                    )}
                </div>
                 <div className={`pt-4 border-t ${resultBorderClass}`}>
                     <p className={`text-xs ${resultTextColorClass}`}>
                        {
                           isDepleted 
                                ? `Your corpus is projected to be fully depleted before the end of your selected withdrawal period.` 
                                : results.corpusDepletionMonths !== null 
                                    ? `Your corpus is projected to last for approximately ${Math.floor(results.corpusDepletionMonths / 12)} years and ${Math.round(results.corpusDepletionMonths % 12)} months.`
                                    : (totalInvestment > 0 && monthlyWithdrawal > 0)
                                        ? `With this withdrawal rate, your corpus is projected to last indefinitely and continue to grow.`
                                        : `After ${years} years and ${months} months, your initial corpus is projected to have a final value of ${formatCurrency(results.finalValue)}.`
                        }
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SWPCalculator;