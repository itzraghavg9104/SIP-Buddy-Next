export enum Page {
  Planner = 'Planner',
  Dashboard = 'Dashboard',
  Learn = 'Learn',
  Calculator = 'Calculator',
  About = 'About',
}

export enum RiskTolerance {
    Conservative = 'Conservative',
    Moderate = 'Moderate',
    Aggressive = 'Aggressive',
}

export interface UserProfile {
    monthlyIncome: number;
    age: number;
    familyMembers: number;
    existingLoans: number;
    loanTenureRemaining: number;
    investmentTimeHorizon: number;
    riskTolerance: RiskTolerance;
    investmentGoal: string;
}

export interface Fund {
    name: string;
    fundHouse: string;
    threeYearReturns: string;
    fiveYearReturns: string;
    expenseRatio: string;
    description: string;
}

export interface FundCategory {
    category: string;
    allocationPercentage: number;
    funds: Fund[];
}

// Fix: Added an index signature to make the type compatible with the recharts library.
// The Pie component from recharts expects a data type with an index signature, which was causing a type error.
export interface AssetAllocationItem {
    name: string;
    value: number;
    [key: string]: any;
}

export interface GrowthDataPoint {
    year: number;
    amountInvested: number;
    conservative: number;
    expected: number;
    aggressive: number;
    recovery: number;
    crash: number;
}

export interface InvestmentPlan {
    monthlySip: number;
    riskProfile: string;
    timeHorizon: number;
    assetClasses: number;
    investmentRationale: string;
    assetAllocation: AssetAllocationItem[];
    growthProjections: GrowthDataPoint[];
    fundRecommendations: FundCategory[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}