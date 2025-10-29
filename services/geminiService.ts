import { GoogleGenAI, Chat } from "@google/genai";
import { UserProfile, InvestmentPlan } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateInvestmentPlan = async (profile: UserProfile): Promise<InvestmentPlan> => {
    const prompt = `
    Generate a personalized Systematic Investment Plan (SIP) for a user with the following profile:
    - Monthly Income: ₹${profile.monthlyIncome}
    - Age: ${profile.age} years
    - Number of Dependents: ${profile.familyMembers}
    - Total Outstanding Loan Amount: ₹${profile.existingLoans}
    - Years until loan is paid off: ${profile.loanTenureRemaining}
    - Investment Time Horizon: ${profile.investmentTimeHorizon} years
    - Risk Tolerance: ${profile.riskTolerance}
    - Investment Goal: "${profile.investmentGoal}"

    Please provide a comprehensive investment plan. The response MUST be a single valid JSON object.
    
    Your response should follow this structure:
    {
        "monthlySip": number,
        "riskProfile": string,
        "timeHorizon": number,
        "assetClasses": number,
        "investmentRationale": string,
        "assetAllocation": [{ "name": string, "value": number }],
        "growthProjections": [{ "year": number, "amountInvested": number, "conservative": number, "expected": number, "aggressive": number, "recovery": number, "crash": number }],
        "fundRecommendations": [{
            "category": string,
            "allocationPercentage": number,
            "funds": [{
                "name": string,
                "fundHouse": string,
                "threeYearReturns": string,
                "fiveYearReturns": string,
                "expenseRatio": string,
                "description": string
            }]
        }]
    }

    Here are the requirements for the plan:
    1.  A recommended monthly SIP amount.
    2.  A detailed investment rationale explaining the strategy.
    3.  A diversified asset allocation across various classes (e.g., Large Cap, Mid Cap, Small Cap, Flexi Cap, Gold, Debt, Hybrid). The total allocation must sum to 100%.
    4.  Investment growth projections for the entire time horizon, with data points for years 0, 1, 3, 5, and the final year. Projections should cover 'Conservative (Bear Market)', 'Expected (Normal Market)', 'Aggressive (Bull Market)', 'Recovery Scenario', and 'Crash Scenario'. Also include the total 'Amount Invested' for each year.
    5.  Specific mutual fund recommendations for each allocated asset class. Use Google Search to find 2 top-performing, currently recommended funds for each category. Provide their latest 3Y and 5Y CAGR returns, expense ratio, and a brief investment thesis.
    
    Do not add any text, comments, or markdown formatting like \`\`\`json before or after the JSON object. The entire response must be only the JSON object.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{googleSearch: {}}],
        },
    });

    try {
        let jsonString = response.text.trim();
        // Handle cases where the model might still wrap the JSON in markdown
        if (jsonString.startsWith('```json')) {
            jsonString = jsonString.slice(7, -3).trim();
        } else if (jsonString.startsWith('```')) {
            jsonString = jsonString.slice(3, -3).trim();
        }
        
        const plan = JSON.parse(jsonString);
        return plan as InvestmentPlan;
    } catch (e) {
        console.error("Failed to parse Gemini response:", e);
        console.error("Raw response text:", response.text);
        throw new Error("An error occurred while generating the investment plan. The response from the AI was not in the expected format.");
    }
};

export const getEducationalContent = async (topic: string): Promise<string> => {
    const prompt = `
    Provide a detailed yet easy-to-understand explanation on the topic of "${topic}" for someone new to investing.
    Your response MUST be formatted using simple Markdown.
    - Use **bold text** for important keywords.
    - Use bullet points with a '*' for lists of key benefits or points.
    - Provide a clear main explanation.
    - Include a simple, relatable example where applicable.
    - Keep the language accessible and encouraging for a beginner.
    Do not use headers (like #, ##) or any other complex markdown.
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
};

let chat: Chat | null = null;

export const startChat = () => {
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: 'You are a helpful AI assistant for an SIP Planning application. Your name is AI Assistant. You answer user questions about SIPs, mutual funds, and general financial planning. Keep your answers concise and helpful.',
    },
  });
};

export const sendMessageToChat = async (message: string): Promise<string> => {
    if(!chat) {
        startChat();
    }
    if(chat) {
        const response = await chat.sendMessage({ message });
        return response.text;
    }
    return "Chat not initialized. Please try again.";
};