

import { GoogleGenAI, Chat, Type } from "@google/genai";
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

    Please provide a comprehensive investment plan.
    
    Here are the requirements for the plan:
    1.  A recommended monthly SIP amount.
    2.  A detailed investment rationale explaining the strategy.
    3.  A diversified asset allocation based on SEBI's official mutual fund categorization. The total allocation must sum to 100%. The "name" in "assetAllocation" and "category" in "fundRecommendations" must use official SEBI categories. Examples of categories to use are:
        *   **Equity Schemes**: Large Cap Fund, Mid Cap Fund, Small Cap Fund, Multi Cap Fund, Flexi Cap Fund, ELSS, Sectoral/Thematic Fund.
        *   **Debt Schemes**: Corporate Bond Fund, Gilt Fund, Liquid Fund, Short Duration Fund, Money Market Fund.
        *   **Hybrid Schemes**: Aggressive Hybrid Fund, Balanced Hybrid Fund, Conservative Hybrid Fund, Arbitrage Fund.
        *   **Other Schemes**: Index Fund, Fund of Funds (for international exposure).
    4.  Investment growth projections for the entire time horizon, with data points for years 0, 1, 3, 5, and the final year. Projections should cover 'Conservative (Bear Market)', 'Expected (Normal Market)', 'Aggressive (Bull Market)', 'Recovery Scenario', and 'Crash Scenario'. Also include the total 'Amount Invested' for each year.
    5.  Specific mutual fund recommendations for each allocated asset class. Use Google Search to find 2 top-performing, currently recommended funds for each category. Provide their latest 3Y and 5Y CAGR returns, expense ratio, and a brief investment thesis.
    
    The entire response must be a single, valid JSON object. Do not include any markdown formatting (like \`\`\`json), explanations, or any text outside of the JSON object itself.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            // Fix: Removed responseMimeType and responseSchema as they are not allowed when using the googleSearch tool.
            // The model is instead instructed in the prompt to return a raw JSON object.
            tools: [{googleSearch: {}}],
        },
    });

    try {
        // The model is instructed to return a raw JSON string, but it might be wrapped in markdown.
        let jsonString = response.text.trim();
        if (jsonString.startsWith('```json')) {
            jsonString = jsonString.substring(7, jsonString.length - 3).trim();
        } else if (jsonString.startsWith('```')) {
             jsonString = jsonString.substring(3, jsonString.length - 3).trim();
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
      systemInstruction: `You are SIP Buddy, a specialized AI assistant for the SIP Buddy investment planning platform. Your sole purpose is to help users with questions about Systematic Investment Plans (SIPs), mutual funds, investment strategies, and using the SIP Buddy application.
- Your name is SIP Buddy.
- You MUST NOT answer questions about your origin, who created you, your underlying technology, or any topic outside of financial planning and the SIP Buddy platform.
- If a user asks an off-topic question (e.g., "Who made you?", "Are you from Google?", "Tell me a joke"), you MUST politely decline and steer the conversation back to financial planning. For example: "As SIP Buddy, my expertise is in financial planning. How can I help you with your investment questions?"
- Keep your answers concise, helpful, and strictly within your designated role.`,
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