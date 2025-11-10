export enum Page {
  Home = 'Home',
  Planner = 'Planner',
  Dashboard = 'Dashboard',
  Learn = 'Learn',
  Calculator = 'Calculator',
  About = 'About',
  More = 'More',
  Auth = 'Auth',
  Profile = 'Profile',
  MyPlans = 'MyPlans',
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

export interface SavedPlan {
    id: string;
    userId: string;
    planName: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    investmentPlan: InvestmentPlan;
    userProfile: UserProfile;
}


export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  audioData?: string; 
  isPlaying?: boolean; 
}

export interface FinancialAdvisor {
    name: string;
    firm: string;
    address: string;
    phone: string;
    website: string;
    latitude: number | null;
    longitude: number | null;
}

export interface GroundingChunk {
    maps: {
        uri: string;
        title: string;
    };
}