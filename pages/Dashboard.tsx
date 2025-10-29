
import React from 'react';
import { InvestmentPlan, UserProfile } from '../types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import { IconChevronDown, IconInfoCircle } from '../components/Icons';

interface DashboardProps {
  investmentPlan: InvestmentPlan;
  userProfile: UserProfile;
  onCreateNewPlan: () => void;
}

const COLORS = ['#3b82f6', '#10b981', '#ef4444', '#f97316', '#a855f7', '#84cc16', '#f59e0b'];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
          <p className="label">{`${payload[0].name} : ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };
  
const formatCurrency = (value: number) => `₹${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value)}`;
const formatLargeCurrency = (value: number) => {
    if (value >= 100000) {
        return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${(value / 1000).toFixed(0)}K`;
};

const SummaryCard: React.FC<{ title: string; value: string; subtext: string }> = ({ title, value, subtext }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold text-slate-800 my-1">{value}</p>
      <p className="text-xs text-slate-400">{subtext}</p>
    </div>
  );


const Dashboard: React.FC<DashboardProps> = ({ investmentPlan, userProfile, onCreateNewPlan }) => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>(
    investmentPlan.fundRecommendations.reduce((acc, cat) => ({ ...acc, [cat.category]: cat.category.toLowerCase().includes('large cap') }), {})
  );

  const toggleSection = (category: string) => {
    setOpenSections(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Investment Dashboard</h1>
          <p className="text-slate-600">Personalized plan for {userProfile.investmentGoal}</p>
        </div>
        <button onClick={onCreateNewPlan} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
          Create New Plan
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard title="Monthly SIP" value={formatCurrency(investmentPlan.monthlySip)} subtext="Recommended investment" />
        <SummaryCard title="Risk Profile" value={investmentPlan.riskProfile} subtext="Investment strategy" />
        <SummaryCard title="Time Horizon" value={`${investmentPlan.timeHorizon} Years`} subtext="Investment period" />
        <SummaryCard title="Asset Classes" value={String(investmentPlan.assetClasses)} subtext="Diversified portfolio" />
      </div>

      {/* Investment Rationale */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        <h2 className="text-xl font-semibold mb-2">Investment Rationale</h2>
        <p className="text-slate-600 leading-relaxed">{investmentPlan.investmentRationale}</p>
      </div>

      {/* Asset Allocation */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
        <p className="text-slate-500 mb-6">Your monthly SIP of {formatCurrency(investmentPlan.monthlySip)} distributed across asset classes</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie data={investmentPlan.assetAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} fill="#8884d8" labelLine={false}>
                        {investmentPlan.assetAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
          <div>
            <ul className="space-y-3">
              {investmentPlan.assetAllocation.map((item, index) => (
                <li key={item.name} className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                    <span className="text-slate-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-slate-800">{formatCurrency(investmentPlan.monthlySip * (item.value / 100))}</span>
                    <span className="text-xs text-slate-500 ml-2">{item.value}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
       {/* Investment Growth Projections */}
       <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h2 className="text-xl font-semibold mb-2">Investment Growth Projections</h2>
            <p className="text-slate-500 mb-6">See how your {formatCurrency(investmentPlan.monthlySip)} monthly SIP could grow under different market scenarios.</p>
            <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={investmentPlan.growthProjections} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="year" tick={{ fontSize: 12 }} label={{ value: 'Years', position: 'insideBottom', offset: -10 }} />
                        <YAxis tickFormatter={formatLargeCurrency} tick={{ fontSize: 12 }} />
                        <RechartsTooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend wrapperStyle={{fontSize: "12px", paddingTop: "20px"}}/>
                        <Line type="monotone" dataKey="amountInvested" name="Amount Invested" stroke="#8884d8" strokeDasharray="5 5" dot={false} />
                        <Line type="monotone" dataKey="conservative" name="Conservative (Bear Market)" stroke="#ef4444" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="expected" name="Expected (Normal Market)" stroke="#3b82f6" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="aggressive" name="Aggressive (Bull Market)" stroke="#10b981" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="recovery" name="Recovery (Crash Scenario)" stroke="#f97316" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

      {/* Fund Recommendations */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
        <h2 className="text-xl font-semibold mb-2">Fund Recommendations</h2>
        <p className="text-slate-500 mb-6">AI-suggested mutual funds based on current market data.</p>
        <div className="space-y-4">
          {investmentPlan.fundRecommendations.map((category) => (
            <div key={category.category} className="border border-slate-200 rounded-lg">
              <button onClick={() => toggleSection(category.category)} className="w-full flex justify-between items-center p-4 text-left">
                <h3 className="font-semibold">{category.category}</h3>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full mr-4">
                    {category.allocationPercentage}% allocation
                  </span>
                  <IconChevronDown className={`transition-transform ${openSections[category.category] ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {openSections[category.category] && (
                <div className="px-4 pb-4">
                  {category.funds.map((fund, index) => (
                    <div key={fund.name} className={`p-4 ${index > 0 ? 'border-t border-slate-200' : ''}`}>
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-semibold text-slate-800">{fund.name}</h4>
                                <p className="text-sm text-slate-500">{fund.fundHouse}</p>
                            </div>
                            <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">Recommended</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                            <div>
                                <p className="text-xs text-slate-500">3Y Returns</p>
                                <p className="font-semibold">{fund.threeYearReturns}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">5Y Returns</p>
                                <p className="font-semibold">{fund.fiveYearReturns}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Expense Ratio</p>
                                <p className="font-semibold">{fund.expenseRatio}</p>
                            </div>
                        </div>
                        <div className="flex items-start text-sm text-slate-600">
                            <IconInfoCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <p>{fund.description}</p>
                        </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
       <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
          <div className="flex">
              <div className="py-1"><IconInfoCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" /></div>
              <div>
                  <p className="font-bold">Important Disclaimer:</p>
                  <p className="text-sm">These are AI-generated suggestions for educational purposes only. Past performance does not guarantee future results. Please read all scheme-related documents carefully and consult with a certified financial advisor before investing.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
