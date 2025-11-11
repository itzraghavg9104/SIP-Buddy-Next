import React, { useState, useEffect, useCallback } from 'react';
import { IconInfoCircle } from '../../components/Icons';
import TaxInfoModal from './TaxInfoModal';

interface IncomeTaxCalculatorProps {
  onBack?: () => void; // Optional onBack prop
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}).format(value);

const InputField: React.FC<{
  label: string;
  value: number;
  setValue: (value: number) => void;
  placeholder?: string;
  max?: number;
  disabled?: boolean;
  tooltip?: string;
}> = ({ label, value, setValue, placeholder, max, disabled, tooltip }) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    // Sync local state when parent prop changes
    setInputValue(String(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Store only the numeric value, removing any formatting like commas
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(rawValue);
  };

  const handleBlur = () => {
    // On blur, parse the raw numeric string to a number
    let num = parseInt(inputValue, 10) || 0;
    // Apply constraints if any
    if (max !== undefined) {
      num = Math.min(num, max);
    }
    // Update the parent component
    setValue(num);
    // Re-sync the local state in case the value was clamped or parsed to 0
    setInputValue(String(num));
  };

  // Format the raw numeric string for display. Handle empty input gracefully.
  const displayValue = inputValue === '' ? '' : Number(inputValue).toLocaleString('en-IN');
  
  return (
    <div>
      <label className="flex items-center text-sm font-medium text-slate-700 mb-1">
        {label}
        {tooltip && (
          <div className="relative group ml-2">
            <IconInfoCircle className="h-4 w-4 text-slate-400 cursor-pointer" />
            <div className="absolute bottom-full mb-2 w-64 bg-slate-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              {tooltip}
            </div>
          </div>
        )}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">₹</span>
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-7 pr-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
};

const IncomeTaxCalculator: React.FC<IncomeTaxCalculatorProps> = ({ onBack }) => {
    const [taxRegime, setTaxRegime] = useState<'new' | 'old'>('new');
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    
    // Income
    const [annualIncome, setAnnualIncome] = useState(1000000);
    const [otherIncome, setOtherIncome] = useState(0);

    // Deductions
    const [deduction80C, setDeduction80C] = useState(0);
    const [deduction80D, setDeduction80D] = useState(0);
    const [hraExemption, setHraExemption] = useState(0);
    const [homeLoanInterest, setHomeLoanInterest] = useState(0);

    // Results
    const [results, setResults] = useState({
        old: { total: 0, taxableIncome: 0, tax: 0, surcharge: 0, cess: 0 },
        new: { total: 0, taxableIncome: 0, tax: 0, surcharge: 0, cess: 0 }
    });

    const calculateTax = useCallback((totalIncome: number, deductions: any, regime: 'new' | 'old') => {
        const standardDeduction = Math.min(annualIncome, 50000);
        let taxableIncome = 0;

        if (regime === 'old') {
            const totalDeductions = deductions.c80 + deductions.d80 + deductions.hra + deductions.homeLoan;
            taxableIncome = totalIncome - totalDeductions - standardDeduction;
        } else {
            taxableIncome = totalIncome - standardDeduction;
        }
        taxableIncome = Math.max(0, taxableIncome);

        // Rebate under 87A
        if ((regime === 'new' && taxableIncome <= 700000) || (regime === 'old' && taxableIncome <= 500000)) {
            return { tax: 0, surcharge: 0, cess: 0, total: 0, taxableIncome };
        }

        let tax = 0;
        const slabs = regime === 'new'
            ? [ { limit: 300000, rate: 0 }, { limit: 600000, rate: 0.05 }, { limit: 900000, rate: 0.10 }, { limit: 1200000, rate: 0.15 }, { limit: 1500000, rate: 0.20 }, { limit: Infinity, rate: 0.30 } ]
            : [ { limit: 250000, rate: 0 }, { limit: 500000, rate: 0.05 }, { limit: 1000000, rate: 0.20 }, { limit: Infinity, rate: 0.30 } ];
        
        let incomeLeft = taxableIncome;
        let lastLimit = 0;

        for (const slab of slabs) {
            if (incomeLeft > 0) {
                const taxableInSlab = Math.min(incomeLeft, slab.limit - lastLimit);
                tax += taxableInSlab * slab.rate;
                incomeLeft -= taxableInSlab;
                lastLimit = slab.limit;
            }
        }
        
        let surcharge = 0;
        if (totalIncome > 20000000) surcharge = tax * 0.25;
        else if (totalIncome > 10000000) surcharge = tax * 0.15;
        else if (totalIncome > 5000000) surcharge = tax * 0.10;

        const cess = (tax + surcharge) * 0.04;
        const total = tax + surcharge + cess;

        return { total, taxableIncome, tax, surcharge, cess };
    }, [annualIncome]);

    useEffect(() => {
        const totalIncome = annualIncome + otherIncome;
        const deductions = {
            c80: deduction80C,
            d80: deduction80D,
            hra: hraExemption,
            homeLoan: homeLoanInterest,
        };
        const newRegimeResults = calculateTax(totalIncome, {}, 'new');
        const oldRegimeResults = calculateTax(totalIncome, deductions, 'old');
        setResults({ new: newRegimeResults, old: oldRegimeResults });
    }, [annualIncome, otherIncome, deduction80C, deduction80D, hraExemption, homeLoanInterest, calculateTax]);
    
    const isOldRegimeDisabled = taxRegime === 'new';
    const activeResults = results[taxRegime];
    const recommendation = results.new.total < results.old.total 
      ? 'The New Regime seems more beneficial for you, saving you ' + formatCurrency(results.old.total - results.new.total) + '.'
      : results.old.total < results.new.total
      ? 'The Old Regime seems more beneficial for you, saving you ' + formatCurrency(results.new.total - results.old.total) + '.'
      : 'Both regimes result in the same tax liability for you.';

    const totalIncome = annualIncome + otherIncome;
    const annualInHandSalary = totalIncome - activeResults.total;
    const monthlyInHandSalary = annualInHandSalary / 12;
    
  return (
    <div className="max-w-6xl mx-auto">
        {onBack && <button onClick={onBack} className="text-sm font-semibold text-blue-600 hover:underline mb-4">&larr; Back to Calculators</button>}
        <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Income Tax Calculator</h1>
            <p className="text-slate-600">For FY 2024-25 (AY 2025-26). Compare Old vs. New Regime.</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6">
            <span className={`font-semibold ${taxRegime === 'old' ? 'text-blue-600' : 'text-slate-500'}`}>Old Regime</span>
            <label htmlFor="regime-toggle" className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="regime-toggle" className="sr-only peer" checked={taxRegime === 'new'} onChange={() => setTaxRegime(taxRegime === 'new' ? 'old' : 'new')} />
                <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            <span className={`font-semibold ${taxRegime === 'new' ? 'text-blue-600' : 'text-slate-500'}`}>New Regime (Default)</span>
            <button onClick={() => setIsInfoModalOpen(true)} className="p-1.5 rounded-full hover:bg-slate-200 transition-colors">
              <IconInfoCircle className="h-5 w-5 text-slate-500"/>
            </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
            {/* Inputs Section */}
            <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-4">
                <h2 className="text-xl font-semibold border-b pb-3 mb-4 text-slate-800">Your Income</h2>
                <InputField label="Annual Income (from Salary)" value={annualIncome} setValue={setAnnualIncome} placeholder="e.g., 10,00,000" />
                <InputField label="Income from Other Sources" value={otherIncome} setValue={setOtherIncome} placeholder="e.g., 50,000" />

                <h2 className="text-xl font-semibold border-b pb-3 pt-4 mb-4 text-slate-800">Deductions</h2>
                <div className={`space-y-4 transition-opacity duration-300 ${isOldRegimeDisabled ? 'opacity-50' : 'opacity-100'}`}>
                    <InputField label="80C Deductions" value={deduction80C} setValue={setDeduction80C} max={150000} disabled={isOldRegimeDisabled} tooltip="Includes EPF, PPF, ELSS, Life Insurance Premiums, etc. Max limit is ₹1,50,000." />
                    <InputField label="80D (Medical Insurance Premium)" value={deduction80D} setValue={setDeduction80D} max={100000} disabled={isOldRegimeDisabled} tooltip="Deduction for health insurance for self, family, and parents. Varies by age." />
                    <InputField label="HRA Exemption" value={hraExemption} setValue={setHraExemption} disabled={isOldRegimeDisabled} tooltip="Enter the exempt HRA amount. This is the minimum of: 1) Actual HRA received, 2) 50%/40% of basic salary, 3) Rent paid minus 10% of basic salary." />
                    <InputField label="Home Loan Interest (Sec 24)" value={homeLoanInterest} setValue={setHomeLoanInterest} max={200000} disabled={isOldRegimeDisabled} tooltip="Interest paid on home loan for a self-occupied property. Max limit is ₹2,00,000." />
                </div>
                 {isOldRegimeDisabled && <p className="text-center text-sm text-slate-500 bg-slate-50 p-3 rounded-md">Deductions are not available under the New Regime (except Standard Deduction).</p>}
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center border-b border-blue-500 pb-3 mb-4">Tax Summary</h2>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Total Income:</span>
                        <span className="font-semibold">{formatCurrency(totalIncome)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Taxable Income:</span>
                        <span className="font-semibold">{formatCurrency(activeResults.taxableIncome)}</span>
                    </div>
                    <hr className="border-blue-500 my-2" />
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Income Tax:</span>
                        <span className="font-semibold">{formatCurrency(activeResults.tax)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Surcharge:</span>
                        <span className="font-semibold">{formatCurrency(activeResults.surcharge)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Health & Edu Cess (4%):</span>
                        <span className="font-semibold">{formatCurrency(activeResults.cess)}</span>
                    </div>
                    <hr className="border-blue-500 my-2" />
                    <div className="flex justify-between items-center text-lg">
                        <span className="font-bold text-blue-100">Total Tax Payable:</span>
                        <span className="font-extrabold text-xl sm:text-2xl">{formatCurrency(activeResults.total)}</span>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-500 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Annual In-Hand Salary:</span>
                        <span className="font-semibold text-lg">{formatCurrency(annualInHandSalary)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-200">Monthly In-Hand Salary:</span>
                        <span className="font-semibold text-lg">{formatCurrency(monthlyInHandSalary)}</span>
                    </div>
                </div>
                <div className="mt-6 bg-blue-700/50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-100 mb-1">Recommendation</h3>
                    <p className="text-sm">{recommendation}</p>
                </div>
            </div>
        </div>

        {isInfoModalOpen && <TaxInfoModal onClose={() => setIsInfoModalOpen(false)} />}
    </div>
  );
};

export default IncomeTaxCalculator;