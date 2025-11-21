
import React, { useState, useEffect } from 'react';
import { InvestmentPlan, UserProfile, Fund, Page } from '../types';
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
import { IconChevronDown, IconInfoCircle, IconLayoutDashboard, IconListDetails, IconChartPie, IconWorld } from '../components/Icons';
import ComparisonModal from '../components/ComparisonModal';
import { exportDashboardToPDF } from '../services/pdfExportService';
import NotificationModal from '../components/NotificationModal';
import { getUserPlans } from '../services/firestoreService';
import { CurrentPlanState } from '../App';


interface DashboardProps {
  currentPlan: CurrentPlanState | null;
  onSavePlan: (planName: string) => Promise<void>;
  onCreateNewPlan: () => void;
  navigateTo: (page: Page) => void;
}

const COLORS = ['#3b82f6', '#10b981', '#ef4444', '#f97316', '#a855f7', '#84cc16', '#f59e0b', '#06b6d4', '#ec4899', '#6366f1'];

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
  
const formatCurrency = (value: number) => `₹${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value)}`;
const formatLargeCurrency = (value: number) => {
    if (value >= 100000) {
        return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${(value / 1000).toFixed(0)}K`;
};

const SummaryCard: React.FC<{ title: string; value: string; subtext: string }> = ({ title, value, subtext }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-xl sm:text-2xl font-bold text-slate-800 my-1">{value}</p>
      <p className="text-xs text-slate-400">{subtext}</p>
    </div>
  );

const Dashboard: React.FC<DashboardProps> = ({ currentPlan, onSavePlan, onCreateNewPlan, navigateTo }) => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({});
  
  const [selectedFundsForComparison, setSelectedFundsForComparison] = useState<Fund[]>([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [planName, setPlanName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [projectionView, setProjectionView] = useState<'chart' | 'table'>('chart');
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgressText, setExportProgressText] = useState('');

  const [hasSavedPlans, setHasSavedPlans] = useState<boolean | null>(null);
  const [isLoadingCheck, setIsLoadingCheck] = useState(true);

  useEffect(() => {
    if (!currentPlan) {
        setIsLoadingCheck(true);
        getUserPlans()
            .then(plans => {
                setHasSavedPlans(plans.length > 0);
            })
            .catch(() => {
                setHasSavedPlans(false);
            })
            .finally(() => {
                setIsLoadingCheck(false);
            });
    }
  }, [currentPlan]);


  const handleExportPDF = async () => {
    setIsExporting(true);
    setExportProgressText('Starting export...');
    await new Promise(resolve => setTimeout(resolve, 500)); 
    try {
        await exportDashboardToPDF(setExportProgressText);
    } catch (error) {
        console.error("PDF Export failed in component:", error);
        alert(error instanceof Error ? error.message : "An unknown error occurred during PDF export.");
    } finally {
        setIsExporting(false);
        setExportProgressText('');
    }
  };

  const openSaveModal = () => {
    setSaveError(null);
    setIsSaveModalOpen(true);
  };

  const handleSave = async () => {
    if (!planName.trim() || isSaving) return;

    setIsSaving(true);
    setSaveError(null);
    try {
      await onSavePlan(planName.trim());
      setIsSaveModalOpen(false);
      setPlanName('');
    } catch (error) {
      console.error("Error caught in Dashboard handleSave:", error);
      setSaveError(error instanceof Error ? error.message : "An unknown error occurred. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const toggleSection = (category: string) => {
    setOpenSections(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const handleCompareSelect = (fund: Fund) => {
    setSelectedFundsForComparison(prevSelected => {
      const isSelected = prevSelected.some(f => f.name === fund.name);
      if (isSelected) {
        return prevSelected.filter(f => f.name !== fund.name);
      } else {
        if (prevSelected.length < 5) {
            return [...prevSelected, fund];
        }
        return prevSelected;
      }
    });
  };

  if (!currentPlan) {
    if (isLoadingCheck) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-slate-500">Checking for saved plans...</p>
            </div>
        );
    }

    return (
        <div className="text-center p-12 bg-white rounded-xl shadow-md border border-slate-200 max-w-2xl mx-auto">
            <IconLayoutDashboard className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {hasSavedPlans ? 'No Plan Selected' : 'Welcome to Your Dashboard'}
            </h2>
            <p className="text-slate-600 mb-6">
                {hasSavedPlans 
                    ? 'Please select a plan from your saved plans to view it here.' 
                    : "You haven't created or saved any investment plans yet."}
            </p>
            {hasSavedPlans ? (
                <button 
                    onClick={() => navigateTo(Page.MyPlans)}
                    className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                    <IconListDetails className="w-5 h-5" />
                    View My Saved Plans
                </button>
            ) : (
                <button 
                    onClick={() => navigateTo(Page.Planner)}
                    className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                    <IconChartPie className="w-5 h-5" />
                    Create Your First Plan
                </button>
            )}
        </div>
    );
  }

  const { planData: investmentPlan, userProfile, isSaved: isPlanSaved } = currentPlan;

  const projectionsChart = (
    <div className="h-96 mt-6">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={investmentPlan.growthProjections || []} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} label={{ value: 'Years', position: 'insideBottom', offset: -10 }} />
                <YAxis tickFormatter={formatLargeCurrency} tick={{ fontSize: 12 }} />
                <RechartsTooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend wrapperStyle={{fontSize: "12px", paddingTop: "20px"}}/>
                <Line type="monotone" dataKey="amountInvested" name="Amount Invested" stroke="#8884d8" strokeDasharray="5 5" dot={false} isAnimationActive={!isExporting}/>
                <Line type="monotone" dataKey="conservative" name="Conservative" stroke="#ef4444" dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive={!isExporting}/>
                <Line type="monotone" dataKey="expected" name="Expected" stroke="#3b82f6" dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive={!isExporting}/>
                <Line type="monotone" dataKey="aggressive" name="Aggressive" stroke="#10b981" dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive={!isExporting}/>
                <Line type="monotone" dataKey="recovery" name="Recovery" stroke="#f97316" dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive={!isExporting}/>
                <Line type="monotone" dataKey="crash" name="Crash" stroke="#6b7280" dot={{ r: 4 }} activeDot={{ r: 6 }} isAnimationActive={!isExporting}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );

  const projectionsTable = (
     <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                    <th scope="col" className="px-6 py-3">Year</th>
                    <th scope="col" className="px-6 py-3">Invested</th>
                    <th scope="col" className="px-6 py-3 text-red-600">Conservative</th>
                    <th scope="col" className="px-6 py-3 text-blue-600">Expected</th>
                    <th scope="col" className="px-6 py-3 text-green-600">Aggressive</th>
                    <th scope="col" className="px-6 py-3 text-orange-600">Recovery</th>
                    <th scope="col" className="px-6 py-3 text-gray-600">Crash</th>
                </tr>
            </thead>
            <tbody>
                {(investmentPlan.growthProjections || []).map(item => (
                    <tr key={item.year} className="bg-white border-b hover:bg-slate-100">
                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{item.year}</th>
                        <td className="px-6 py-4">{formatCurrency(item.amountInvested)}</td>
                        <td className="px-6 py-4">{formatCurrency(item.conservative)}</td>
                        <td className="px-6 py-4">{formatCurrency(item.expected)}</td>
                        <td className="px-6 py-4">{formatCurrency(item.aggressive)}</td>
                        <td className="px-6 py-4">{formatCurrency(item.recovery)}</td>
                        <td className="px-6 py-4">{formatCurrency(item.crash)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );

  return (
    <>
      <div id="dashboard-content" className="max-w-6xl mx-auto space-y-8 bg-white p-4 sm:p-6 md:p-8">
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg pdf-export-section">
            <div className="flex">
                <div className="py-1"><IconInfoCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" /></div>
                <div>
                    <p className="font-bold">Important Disclaimer:</p>
                    <p className="text-sm">These are AI-generated suggestions for educational purposes only. Past performance does not guarantee future results. Please read all scheme-related documents carefully and consult with a certified financial advisor before investing.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Your Investment Dashboard</h1>
            <p className="text-slate-600 mt-1">Personalized plan for {userProfile.investmentGoal}</p>
          </div>
          {!isExporting && (
             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                {!isPlanSaved && (
                  <button onClick={openSaveModal} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                    Save Plan
                  </button>
                )}
                <button onClick={handleExportPDF} disabled={isExporting} className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-sm hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 disabled:bg-slate-400 min-h-[40px]">
                     {isExporting ? (
                        <div className="flex flex-col items-center">
                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mb-1"></div>
                             <span className="text-xs">{exportProgressText}</span>
                        </div>
                    ) : (
                       <>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                        Export Plan
                       </>
                    )}
                </button>
                <button onClick={onCreateNewPlan} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors justify-center">
                Create New Plan
                </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pdf-export-section">
          <SummaryCard title="Monthly SIP" value={formatCurrency(investmentPlan.monthlySip)} subtext="Recommended investment" />
          <SummaryCard title="Risk Profile" value={investmentPlan.riskProfile} subtext="Investment strategy" />
          <SummaryCard title="Time Horizon" value={`${investmentPlan.timeHorizon} Years`} subtext="Investment period" />
          <SummaryCard title="Asset Classes" value={String(investmentPlan.assetClasses)} subtext="Diversified portfolio" />
        </div>
        <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section">
          <h2 className="text-xl font-semibold mb-2">Investment Rationale</h2>
          <p className="text-slate-600 leading-relaxed">{investmentPlan.investmentRationale}</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section">
          <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
          <p className="text-slate-500 mb-6">Your monthly SIP of {formatCurrency(investmentPlan.monthlySip)} distributed across asset classes</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                      <Pie data={investmentPlan.assetAllocation || []} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} fill="#8884d8" labelLine={false} isAnimationActive={!isExporting}>
                          {(investmentPlan.assetAllocation || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                      </Pie>
                      <RechartsTooltip content={<CustomTooltip />} />
                      </PieChart>
                  </ResponsiveContainer>
              </div>
            <div>
              <ul className="space-y-3">
                {(investmentPlan.assetAllocation || []).map((item, index) => (
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
        <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section">
              <div className="flex justify-between items-center mb-2">
                  <div>
                      <h2 className="text-xl font-semibold">Investment Growth Projections</h2>
                      <p className="text-slate-500 mt-1">See how your {formatCurrency(investmentPlan.monthlySip)} monthly SIP could grow.</p>
                  </div>
                  {!isExporting && (
                      <div className="flex items-center bg-slate-200 p-1 rounded-lg">
                          <button onClick={() => setProjectionView('chart')} className={`px-3 py-1 text-sm font-semibold rounded-md ${projectionView === 'chart' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}>Chart</button>
                          <button onClick={() => setProjectionView('table')} className={`px-3 py-1 text-sm font-semibold rounded-md ${projectionView === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}>Table</button>
                      </div>
                  )}
              </div>
              {isExporting ? (
                <>
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Growth Projection Chart</h3>
                  {projectionsChart}
                  <h3 className="text-lg font-semibold mt-6 mb-2 text-slate-700">Growth Projection Table</h3>
                  {projectionsTable}
                </>
              ) : (
                projectionView === 'chart' ? projectionsChart : projectionsTable
              )}
          </div>
        <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section">
          <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Fund Recommendations</h2>
          </div>
          <p className="text-slate-500 mb-6">AI-suggested mutual funds. Select two or more to compare.</p>
          <div className="space-y-4">
            {(investmentPlan.fundRecommendations || []).map((category) => (
              <div key={category.category} className="border border-slate-200 rounded-lg bg-white">
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
                    {(category.funds || []).map((fund, index) => (
                      <div key={fund.name} className={`p-4 ${index > 0 ? 'border-t border-slate-200' : ''}`}>
                          <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-4">
                                  <input 
                                      type="checkbox"
                                      id={`compare-${fund.name.replace(/\s/g, '-')}`}
                                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                      checked={selectedFundsForComparison.some(f => f.name === fund.name)}
                                      onChange={() => handleCompareSelect(fund)}
                                      disabled={!selectedFundsForComparison.some(f => f.name === fund.name) && selectedFundsForComparison.length >= 5}
                                  />
                                  <div>
                                      <label htmlFor={`compare-${fund.name.replace(/\s/g, '-')}`} className="font-semibold text-slate-800 cursor-pointer">{fund.name}</label>
                                      <p className="text-sm text-slate-500">{fund.fundHouse}</p>
                                  </div>
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

        {/* Search Grounding Sources Section */}
        {investmentPlan.groundingChunks && investmentPlan.groundingChunks.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-xl shadow-lg border border-slate-200 pdf-export-section">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <IconWorld className="h-5 w-5 text-blue-600" />
                    Data Sources & References
                </h2>
                <p className="text-slate-500 mb-4 text-sm">The fund data and recommendations were sourced from the following live links:</p>
                <ul className="space-y-2">
                    {investmentPlan.groundingChunks.map((chunk, index) => (
                         chunk.web && chunk.web.uri ? (
                            <li key={index} className="text-sm truncate">
                                <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                    {chunk.web.title || chunk.web.uri}
                                </a>
                            </li>
                         ) : null
                    ))}
                </ul>
            </div>
        )}

      </div>
      
      <NotificationModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        title="Save Your Plan"
        message="Give your investment plan a name to easily identify it later."
      >
        <div className="mt-4">
            <input
                type="text"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
                placeholder="e.g., My Retirement Plan"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md"
                disabled={isSaving}
            />
            {saveError && <p className="text-red-600 text-sm text-left mt-2">{saveError}</p>}
            <button
                onClick={handleSave}
                disabled={!planName.trim() || isSaving}
                className="w-full mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 disabled:bg-green-300 flex items-center justify-center"
            >
                {isSaving ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Saving...
                    </>
                ) : (
                    'Save Plan'
                )}
            </button>
        </div>
      </NotificationModal>
      
      {!isExporting && selectedFundsForComparison.length >= 2 && (
            <button
                onClick={() => setIsComparisonModalOpen(true)}
                className="fixed bottom-24 right-6 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 z-40 px-5 py-3 flex items-center gap-2 animate-fade-in"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9l4 -4l4 4" /><path d="M16 15l-4 4l-4 -4" /><path d="M4 12h16" /></svg>
                <span>Compare Selected Funds ({selectedFundsForComparison.length})</span>
            </button>
      )}

      {isComparisonModalOpen && (
        <ComparisonModal 
            funds={selectedFundsForComparison} 
            onClose={() => setIsComparisonModalOpen(false)} 
        />
      )}
      <style>{`
        body { background-color: ${isExporting ? '#FFF' : 'rgb(248 250 252)'}; }
        #dashboard-content { background-color: ${isExporting ? '#FFF' : 'transparent'}; }
        .bg-white { background-color: ${isExporting ? '#FFF' : '#FFF'}; }
        .bg-slate-50 { background-color: ${isExporting ? '#FFF' : 'rgb(248 250 252)'}; }
        .border, .border-slate-200 { border-color: ${isExporting ? 'transparent' : ''}; }
        .shadow-lg, .shadow-sm { box-shadow: ${isExporting ? 'none' : ''}; }


        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Dashboard;
