
export enum Page {
  Planner = 'Planner',
  Dashboard = 'Dashboard',
  Learn = 'Learn',
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

export interface AssetAllocationItem {
    name: string;
    value: number;
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
