import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { IconCalculator, IconBriefcase, IconReceiptTax, IconSearch } from '../components/Icons';
import { useSearchParams, useRouter } from 'next/navigation';

const calculators = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    description: 'Calculate the future value of your SIPs with annual step-up and inflation adjustments.',
    icon: <IconCalculator className="h-8 w-8 text-blue-600" />,
    bgColor: 'bg-blue-100',
    hoverColor: 'hover:border-blue-500',
  },
  {
    id: 'lumpsum',
    title: 'Lumpsum Calculator',
    description: 'Project the growth of a one-time investment over a specific period.',
    icon: <IconBriefcase className="h-8 w-8 text-purple-600" />,
    bgColor: 'bg-purple-100',
    hoverColor: 'hover:border-purple-500',
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    description: 'Estimate how long your invested corpus will last with systematic monthly withdrawals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash-banknote-off h-8 w-8 text-green-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9.88 9.878a3 3 0 1 0 4.242 4.243m.58 -3.425a3.012 3.012 0 0 0 -1.412 -1.405" />
        <path d="M10 6h10a2 2 0 0 1 2 2v8c0 .294 -.064 .574 -.178 .825m-2.232 1.585a1.979 1.979 0 0 1 -1.59 .59h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1" />
        <path d="M12 17v1.01" />
        <path d="M3 3l18 18" />
      </svg>
    ),
    bgColor: 'bg-green-100',
    hoverColor: 'hover:border-green-500',
  },
  {
    id: 'income-tax',
    title: 'Income Tax Calculator',
    description: 'Estimate tax liability under the old & new regimes for FY 2024-25.',
    icon: <IconReceiptTax className="h-8 w-8 text-red-600" />,
    bgColor: 'bg-red-100',
    hoverColor: 'hover:border-red-500',
  },
];

const CalculatorContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect old query param URLs to new routes for backward compatibility
  useEffect(() => {
    const active = searchParams ? searchParams.get('active') : null;
    if (active === 'sip') router.replace('/calculator/sip');
    else if (active === 'lumpsum') router.replace('/calculator/lumpsum');
    else if (active === 'swp') router.replace('/calculator/swp');
    else if (active === 'tax') router.replace('/calculator/income-tax');
  }, [searchParams, router]);

  // Filter calculators based on search query
  const filteredCalculators = useMemo(() => {
    if (!searchQuery.trim()) return calculators;
    const query = searchQuery.toLowerCase();
    return calculators.filter(calc =>
      calc.title.toLowerCase().includes(query) ||
      calc.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Financial Calculators</h1>
        <p className="text-lg text-slate-600">
          Plan your investments, withdrawals, and taxes with precision.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search calculators..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {filteredCalculators.length === 0 ? (
        <div className="text-center p-12 bg-white rounded-xl shadow-md border border-slate-200">
          <IconSearch className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-800">No Calculators Found</h3>
          <p className="text-slate-500 mt-2">No calculators match your search query "{searchQuery}".</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCalculators.map(calc => (
            <button
              key={calc.id}
              onClick={() => router.push(`/calculator/${calc.id}`)}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl ${calc.hoverColor} transition-all transform hover:-translate-y-1`}
            >
              <div className={`${calc.bgColor} p-3 rounded-full w-fit mb-4`}>
                {calc.icon}
              </div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">{calc.title}</h2>
              <p className="text-slate-500">{calc.description}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Calculator: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <CalculatorContent />
    </Suspense>
  );
};

export default Calculator;