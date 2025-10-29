
import React from 'react';
import { Fund } from '../types';
import { IconX } from './Icons';

interface ComparisonModalProps {
  funds: Fund[];
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ funds, onClose }) => {
  const metrics = [
    { name: 'Fund House', key: 'fundHouse' },
    { name: '3Y Returns (CAGR)', key: 'threeYearReturns' },
    { name: '5Y Returns (CAGR)', key: 'fiveYearReturns' },
    { name: 'Expense Ratio', key: 'expenseRatio' },
    { name: 'Description', key: 'description' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-xl">
          <h2 id="comparison-title" className="text-xl font-semibold text-slate-800">Fund Comparison</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close comparison modal"
          >
            <IconX className="w-6 h-6" />
          </button>
        </header>
        <div className="overflow-auto p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left font-semibold text-slate-600 p-3 sticky top-0 bg-white z-10">Metric</th>
                  {funds.map(fund => (
                    <th key={fund.name} className="text-left font-semibold text-slate-800 p-3 min-w-[200px] sticky top-0 bg-white z-10">{fund.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map(metric => (
                  <tr key={metric.key} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50">
                    <td className="font-semibold text-slate-600 p-3 align-top">{metric.name}</td>
                    {funds.map(fund => (
                      <td key={fund.name} className={`p-3 align-top text-slate-700 ${metric.key === 'description' ? 'text-xs leading-5' : ''}`}>
                        {(fund as any)[metric.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ComparisonModal;
