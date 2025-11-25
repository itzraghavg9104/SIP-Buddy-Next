import React from 'react';
import { IconX } from '../../components/Icons';

interface TaxInfoModalProps {
  onClose: () => void;
}

const TaxSlabTable: React.FC<{ title: string; slabs: { range: string; rate: string }[] }> = ({ title, slabs }) => (
  <div>
    <h4 className="font-semibold text-slate-700 mb-2">{title}</h4>
    <table className="w-full text-sm text-left text-slate-600 border border-slate-200">
      <thead className="text-xs text-slate-700 uppercase bg-slate-100">
        <tr>
          <th scope="col" className="px-4 py-2">Income Slab</th>
          <th scope="col" className="px-4 py-2">Tax Rate</th>
        </tr>
      </thead>
      <tbody>
        {slabs.map((slab, index) => (
          <tr key={index} className="bg-white border-b last:border-b-0">
            <td className="px-4 py-2">{slab.range}</td>
            <td className="px-4 py-2">{slab.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TaxInfoModal: React.FC<TaxInfoModalProps> = ({ onClose }) => {
  const newRegimeSlabs = [
    { range: 'Up to ₹3,00,000', rate: 'Nil' },
    { range: '₹3,00,001 to ₹6,00,000', rate: '5%' },
    { range: '₹6,00,001 to ₹9,00,000', rate: '10%' },
    { range: '₹9,00,001 to ₹12,00,000', rate: '15%' },
    { range: '₹12,00,001 to ₹15,00,000', rate: '20%' },
    { range: 'Above ₹15,00,000', rate: '30%' },
  ];

  const oldRegimeSlabs = [
    { range: 'Up to ₹2,50,000', rate: 'Nil' },
    { range: '₹2,50,001 to ₹5,00,000', rate: '5%' },
    { range: '₹5,00,001 to ₹10,00,000', rate: '20%' },
    { range: 'Above ₹10,00,000', rate: '30%' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tax-info-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-xl z-10">
          <h2 id="tax-info-title" className="text-xl font-semibold text-slate-800">Tax Regime Information (FY 2024-25)</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <IconX className="w-6 h-6" />
          </button>
        </header>
        <div className="overflow-auto p-6 space-y-6">
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
              <p className="font-bold">Disclaimer:</p>
              <p className="text-sm">The calculations are based on the income tax laws for the Financial Year 2024-25 (Assessment Year 2025-26). Tax laws are subject to change. This tool is for estimation purposes only. Please consult a financial advisor for exact calculations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TaxSlabTable title="New Tax Regime (Default)" slabs={newRegimeSlabs} />
            <TaxSlabTable title="Old Tax Regime" slabs={oldRegimeSlabs} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3 border-b pb-2">Key Concepts Explained</h3>
            <div className="space-y-4 text-sm text-slate-700">
                <div>
                    <h4 className="font-semibold mb-1">1. Tax Rebate under Section 87A</h4>
                    <p>This is a crucial provision that reduces your tax liability to zero if your income is below a certain threshold.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                        <li><strong>New Regime:</strong> If your net taxable income is up to <strong>₹7,00,000</strong>, you get a full tax rebate, making your tax payable NIL.</li>
                        <li><strong>Old Regime:</strong> If your net taxable income is up to <strong>₹5,00,000</strong>, you get a full tax rebate, making your tax payable NIL.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-1">2. Standard Deduction for Salaried Employees</h4>
                    <p>This is a flat deduction of <strong>₹50,000</strong> from your gross salary. It reduces your net taxable income.</p>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                        <li>It is available under <strong>both the Old and New tax regimes</strong>.</li>
                        <li>This effectively increases the tax-free income limit for salaried individuals. For example, under the New Regime, a gross salary of <strong>₹7,50,000</strong> becomes tax-free (₹7,50,000 - ₹50,000 standard deduction = ₹7,00,000 taxable income, which is eligible for the full rebate).</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-1">3. Deductions & Exemptions</h4>
                     <p>This is the main difference between the two regimes.</p>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                        <li><strong>Old Regime:</strong> Allows you to claim various deductions like Section 80C (up to ₹1.5 Lakh for EPF, PPF, ELSS, etc.), 80D (health insurance), HRA exemption, and home loan interest. This regime is beneficial if you have significant investments and expenses to claim.</li>
                        <li><strong>New Regime:</strong> Offers lower tax rates but you must forgo most of the common deductions and exemptions. It is simpler and beneficial for those who do not have many deductions to claim.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-1">4. Surcharge & Cess</h4>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                        <li><strong>Surcharge:</strong> An additional tax levied on top of the income tax for high-income earners (total income above ₹50 Lakh).</li>
                        <li><strong>Health & Education Cess:</strong> An additional <strong>4%</strong> is levied on the final income tax amount (including surcharge, if applicable) under both regimes.</li>
                    </ul>
                </div>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-slate-200">
            <a 
              href="https://incometaxindia.gov.in/Pages/tools/income-tax-calculator.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Visit Official Income Tax Calculator &rarr;
            </a>
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

export default TaxInfoModal;