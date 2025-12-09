"use server";


import Groq from "groq-sdk";
import { UserProfile, InvestmentPlan, Fund, FundCategory, AssetAllocationItem, GrowthDataPoint, QuizDifficulty, QuizQuestion, ChatMessage } from '../types';

import { GoogleGenAI } from "@google/genai";

// --- Initialization ---
const getGroqClient = () => {
    const API_KEY = process.env.GROQ_API_KEY;
    if (!API_KEY) {
        console.error("CRITICAL: GROQ_API_KEY is missing.");
        throw new Error("GROQ_API_KEY environment variable not set");
    }
    return new Groq({ apiKey: API_KEY });
};

const getGeminiClient = () => {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is missing.");
        throw new Error("GEMINI_API_KEY environment variable not set");
    }
    return new GoogleGenAI({ apiKey: API_KEY });
};

// --- Helper Functions ---

/**
 * Sanitizes the raw, parsed JSON object from the AI to ensure it conforms to the InvestmentPlan interface.
 */
const sanitizeInvestmentPlan = (plan: any): InvestmentPlan => {
    const sanitizedPlan: InvestmentPlan = {
        monthlySip: Number(plan.monthlySip) || 0,
        riskProfile: String(plan.riskProfile || 'Not specified'),
        timeHorizon: Number(plan.timeHorizon) || 0,
        assetClasses: Number(plan.assetClasses) || 0,
        investmentRationale: String(plan.investmentRationale || 'No rationale provided.'),
        assetAllocation: (Array.isArray(plan.assetAllocation) ? plan.assetAllocation : []).map((item: any): AssetAllocationItem => ({
            name: String(item.name || 'Unnamed Asset'),
            value: Number(item.value) || 0,
        })),
        growthProjections: (Array.isArray(plan.growthProjections) ? plan.growthProjections : []).map((item: any): GrowthDataPoint => ({
            year: Number(item.year) || 0,
            amountInvested: Number(item.amountInvested) || 0,
            conservative: Number(item.conservative) || 0,
            expected: Number(item.expected) || 0,
            aggressive: Number(item.aggressive) || 0,
            recovery: Number(item.recovery) || 0,
            crash: Number(item.crash) || 0,
        })),
        fundRecommendations: (Array.isArray(plan.fundRecommendations) ? plan.fundRecommendations : []).map((cat: any): FundCategory => ({
            category: String(cat.category || 'Uncategorized'),
            allocationPercentage: Number(cat.allocationPercentage) || 0,
            funds: (Array.isArray(cat.funds) ? cat.funds : []).map((fund: any): Fund => ({
                name: String(fund.name || 'Unnamed Fund'),
                fundHouse: String(fund.fundHouse || 'Unknown'),
                threeYearReturns: String(fund.threeYearReturns || 'N/A'),
                fiveYearReturns: String(fund.fiveYearReturns || 'N/A'),
                expenseRatio: String(fund.expenseRatio || 'N/A'),
                description: String(fund.description || 'No description provided.'),
            })),
        })),
    };

    // Normalize asset allocation percentages to sum up to 100
    const totalAllocation = sanitizedPlan.assetAllocation.reduce((sum, item) => sum + item.value, 0);
    if (totalAllocation > 0 && Math.abs(totalAllocation - 100) > 1) {
        sanitizedPlan.assetAllocation = sanitizedPlan.assetAllocation.map(item => ({
            ...item,
            value: Number(((item.value / totalAllocation) * 100).toFixed(2)),
        }));
    }

    return sanitizedPlan;
};

// --- Actions ---

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
    - Annual Step-Up: ${profile.stepUpPercentage ? profile.stepUpPercentage + '%' : 'None'}

    Step 1: ASSET ALLOCATION STRATEGY. Determine a consistent and logical asset allocation based strictly on Age and Risk Tolerance.
    - **Conservative**: High Debt (60-70%), Low Equity (30-40%), Gold (0-10%).
    - **Moderate**: Balanced Equity (50-60%), Debt (30-40%), Gold (0-10%).
    - **Aggressive**: High Equity (70-80%), Low Debt (10-20%), Small/Mid Cap exposure (10-20%).
    - Ensure the total sums exactly to 100%. Do not be random. Use standard financial planning norms.

    Step 2: ADVANCED FUND RESEARCH (Performance First).
    - **Strategy**: Identify the absolute best-performing funds in India (Direct/Growth) for 2024-2025.
    - **Sources**: You MUST synthesize data from **Value Research** (prioritize 5-Star Rated), **Groww**, **Morningstar**, and **Moneycontrol**.
    - **Selection Algorithm**:
        1. **High Returns**: Filter for top decile performance in 3Y and 5Y CAGR. This is the #1 priority.
        2. **Alpha**: Select funds with high Alpha (outperformance vs benchmark).
        3. **Consistency**: Avoid one-hit wonders. Look for consistent rolling returns.
        4. **Expense**: Lower is better, but performance justifies cost.

    Step 3: GENERATE PLAN. Create the JSON.

    Requirements:
    1.  **Recommended Monthly SIP**: Calculate a sustainable amount (typically 20% of income minus liabilities).
    2.  **Investment Rationale**: Provide a detailed, logic-driven explanation (100+ words). Explicitly clear why this asset allocation was chosen for this specific age/risk profile.
    3.  **Asset Allocation**: Detailed breakdown (Large Cap, Flexi Cap, Mid Cap, Small Cap, Corporate Debt, Gold, etc.).
    4.  **Growth Projections**: Realistic calculations for 0, 1, 3, 5, and End Year.
        - Conservative: ~10%
        - Expected: ~12%
        - Aggressive: ~15%
    5.  **Fund Recommendations**: You MUST recommend 2 specific mutual funds for **EVERY single category** listed in the 'Asset Allocation'.
        - **Description MUST mention**: "3Y Return: X%, Alpha: Y, Expense: Z%".
        - **Selection**: Ensure these are actually top-rated funds on Value Research/Groww.
    6.  **Sources**: You MUST provide at least 4 specific links from different trusted sites.
        - Example: { "title": "Top Flexi Cap Funds - Value Research", "url": "..." }
        - Example: { "title": "Best Small Cap Funds - Groww", "url": "..." }
        - Do not rely only on Moneycontrol. Mix the sources.

    OUTPUT FORMAT:
    You must return ONLY a single valid JSON object. Do not include markdown code blocks.
    The JSON must strictly follow this structure:
    {
      "monthlySip": number,
      "riskProfile": string,
      "timeHorizon": number,
      "assetClasses": number,
      "investmentRationale": string,
      "assetAllocation": [ { "name": string, "value": number } ],
      "growthProjections": [ 
         { "year": number, "amountInvested": number, "conservative": number, "expected": number, "aggressive": number, "recovery": number, "crash": number } 
      ],
      "fundRecommendations": [
        {
          "category": string,
          "allocationPercentage": number,
          "funds": [
            {
              "name": string,
              "fundHouse": string,
              "threeYearReturns": string,
              "fiveYearReturns": string,
              "expenseRatio": string,
              "description": string
            }
          ]
        }
      ],
      "sources": [
        { "title": string, "url": string }
      ]
    }
    `;

    // Strategy: Groq Compound -> Compound Mini -> GPT-OSS 120B -> Gemini 2.5 Flash -> Gemini 2.5 Flash Lite
    const planProviders = [
        { type: 'groq', model: 'groq/compound' },
        { type: 'groq', model: 'groq/compound-mini' },
        { type: 'groq', model: 'openai/gpt-oss-120b' },
        { type: 'gemini', model: 'gemini-2.5-flash' },
        { type: 'gemini', model: 'gemini-2.5-flash-lite' },
    ];

    for (const provider of planProviders) {
        try {
            console.log(`Attempting generateInvestmentPlan with ${provider.type}/${provider.model}`);

            let content = "";

            if (provider.type === 'groq') {
                const completion = await getGroqClient().chat.completions.create({
                    messages: [{ role: 'user', content: prompt }],
                    model: provider.model,
                    response_format: { type: "json_object" },
                    max_tokens: 5000,
                    temperature: 0.5,
                });
                content = completion.choices[0]?.message?.content || "";
            } else {
                // Gemini Fallback
                const response = await getGeminiClient().models.generateContent({
                    model: provider.model,
                    contents: prompt,
                    config: {
                        responseMimeType: 'application/json',
                    }
                });
                content = response.text || "";
            }

            if (!content) throw new Error("No content returned");

            // Sanitize JSON
            let jsonStr = content.replace(/```json/g, '').replace(/```/g, '').trim();
            const plan = JSON.parse(jsonStr);

            const sanitized = sanitizeInvestmentPlan(plan);

            // Map AI sources to groundingChunks
            if (plan.sources && Array.isArray(plan.sources)) {
                sanitized.groundingChunks = plan.sources.map((source: any) => ({
                    web: {
                        title: source.title || 'Source',
                        uri: source.url || '#'
                    }
                }));
            }

            // Force deep clone/serialization
            return JSON.parse(JSON.stringify(sanitized));

        } catch (e: any) {
            console.error(`Provider ${provider.type}/${provider.model} failed:`, e.message);
            // Continue to next provider
        }
    }
    // If we reach here, ALL models failed.
    throw new Error("AI_LIMIT_REACHED");
};

export const sendMessageToChat = async (history: ChatMessage[], message: string): Promise<string> => {
    try {
        const groqHistory = history.map(msg => ({
            role: (msg.role === 'model' ? 'assistant' : 'user') as 'assistant' | 'user', // Groq uses 'assistant'
            content: msg.text
        }));

        // Add current user message
        groqHistory.push({ role: 'user', content: message });

        const systemMessage = {
            role: 'system' as const,
            content: `You are SIP Buddy, a specialized AI assistant for financial planning.
            - Answer questions about SIPs, mutual funds, and investing.
            - Do NOT answer off-topic questions (e.g., coding, general knowledge, jokes).
            - Keep answers concise and helpful.`
        };

        const completion = await getGroqClient().chat.completions.create({
            messages: [systemMessage, ...groqHistory],
            model: 'openai/gpt-oss-120b', // High-reasoning model
            max_tokens: 2048,
        });

        return completion.choices[0]?.message?.content || "No response received.";

    } catch (error) {
        console.error("Error in sendMessageToChat:", error);
        throw new Error("Failed to send message.");
    }
};

export const generateQuizQuestions = async (difficulty: QuizDifficulty): Promise<QuizQuestion[]> => {
    const prompt = `
        Generate a financial literacy quiz with exactly 10 unique questions.
        Difficulty: ${difficulty}.
        Topics: Personal Finance, SIP, Mutual Funds, Taxes (India).

        Output Requirements:
        1. Return ONLY a JSON array of objects.
        2. Distribution: 4 Single Choice, 2 Multiple Choice, 2 True/False, 1 Fill Blank, 1 Short Answer.
        3. Structure:
           {
             "id": number,
             "type": "single_choice" | "multiple_choice" | "true_false" | "fill_in_blank" | "short_answer",
             "question": string,
             "options": string[], // For MCQs/TrueFalse. Empty for text.
             "correctAnswer": string | string[],
             "acceptedKeywords": string[], 
             "explanation": string
           }
    `;

    try {
        const completion = await getGroqClient().chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.3-70b-versatile',
            response_format: { type: "json_object" },
            max_tokens: 4096,
        });

        let content = completion.choices[0]?.message?.content;
        if (!content) throw new Error("No content");

        // Robust JSON extraction
        const jsonMatch = content.match(/\[[\s\S]*\]/); // Look for array
        if (jsonMatch) content = jsonMatch[0];
        else if (content.trim().startsWith('{')) {
            // Sometimes it wraps array in an object key like "questions": [...]
            const parsed = JSON.parse(content);
            if (parsed.questions && Array.isArray(parsed.questions)) return parsed.questions;
            // If strictly object but not array, try to salvage or fail
        }

        const questions: QuizQuestion[] = JSON.parse(content);
        if (!Array.isArray(questions)) throw new Error("Parsed content is not an array");

        return questions;

    } catch (error) {
        console.error("Quiz generation failed:", error);
        throw new Error("Failed to generate quiz.");
    }
};
