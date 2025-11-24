
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
    stepUpPercentage?: number;
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

export interface GroundingChunk {
    maps?: {
        uri?: string;
        title?: string;
    };
    web?: {
        uri?: string;
        title?: string;
    };
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
    groundingChunks?: GroundingChunk[];
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

// --- Quiz Types ---

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';
export type QuizMode = 'Relaxed' | 'Speed Run' | 'Blitz';
export type QuestionType = 'single_choice' | 'multiple_choice' | 'true_false' | 'fill_in_blank' | 'short_answer';

export interface QuizQuestion {
    id: number;
    type: QuestionType;
    question: string;
    options?: string[]; // For MCQs
    correctAnswer: string | string[]; // String for single/text, Array for multiple choice
    acceptedKeywords?: string[]; // For text answers to allow fuzzy matching
    explanation: string;
}

export interface QuizResult {
    questionId: number;
    userAnswer: string | string[];
    isCorrect: boolean;
    timeTaken: number;
}