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

    Step 2: ADVANCED FUND RESEARCH (Performance First - DATA MUST BE FRESH).
    - **CRITICAL**: You MUST use your internet search/browsing capabilities to fetch the **LATEST 2024-2025** data. Do NOT use internal training knowledge for fund NAV or returns.
    - **Strategy**: Identify the absolute best-performing funds in India (Direct/Growth) right now.
    - **Sources**: Search specifically on **Value Research**, **Groww**, **Morningstar**, and **Moneycontrol** or any other highly trusted sources.
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
        - **Description MUST mention**: "3Y Return: [Real Value]%, Alpha: [Real Value], Expense: [Real Value]%".
        - **Verification**: Ensure these strings match the LATEST available data from your search.
        - **Selection**: Ensure these are actually top-rated funds on Value Research/Groww.
    6.  **Sources**: You MUST provide at least 4 specific links to the SEARCH RESULTS or fund pages you used.
        - Example: { "title": "Quant Mid Cap Fund Direct Growth - Value Research", "url": "..." }
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

    // Strategy: Groq Compound -> GPT-OSS 120B (Browser) -> Gemini 2.5 Flash (Search) -> Compound Mini -> Flash Lite -> Kimi K2 (Extreme Fallback Handling)
    const planProviders = [
        { type: 'groq', model: 'groq/compound' },
        { type: 'groq', model: 'openai/gpt-oss-120b' },
        { type: 'gemini', model: 'gemini-2.5-flash' },
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct-0905' },
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct' },
        { type: 'groq', model: 'groq/compound-mini' },
        { type: 'gemini', model: 'gemini-2.5-flash-lite' },
        { type: 'groq', model: 'openai/gpt-oss-20b' },
    ];

    for (const provider of planProviders) {
        try {
            console.log(`Attempting generateInvestmentPlan with ${provider.type}/${provider.model}`);

            let content = "";

            if (provider.type === 'groq') {
                const params: any = {
                    messages: [{ role: 'user', content: prompt }],
                    model: provider.model,
                    max_tokens: 5000,
                    temperature: 0.5,
                };

                // Enable 'browser_search' strictly for supported OSS models
                // Note: Kimi does not support 'browser_search' built-in, only standard function calling
                const supportsBrowser = provider.model.includes('gpt-oss');

                if (supportsBrowser) {
                    params.tools = [{ type: "browser_search" }];
                    // JSON mode cannot be used with tools on Groq
                    // We rely on the prompt to enforce JSON output
                } else {
                    // For models without tools (like Compound-Mini or Kimi), force JSON mode if supported
                    // Compound models handle tools internally, so we generally rely on them.
                    // But explicitly setting json_object is good for non-tool models.
                    params.response_format = { type: "json_object" };
                }

                const completion = await getGroqClient().chat.completions.create(params);
                content = completion.choices[0]?.message?.content || "";
            } else {
                // Gemini Fallback WITH Search Grounding
                // Note: 'responseMimeType: application/json' is NOT compatible with tools (Google Search)
                const response = await getGeminiClient().models.generateContent({
                    model: provider.model,
                    contents: prompt,
                    config: {
                        // responseMimeType: 'application/json', // DISABLED because we are using tools
                        tools: [{ googleSearch: {} }], // Enable Google Search
                    }
                });
                content = response.text || "";
            }

            if (!content) throw new Error("No content returned");

            // Sanitize JSON
            // Since we disabled JSON mode/MIME for some, we must likely strip markdown blocks
            let jsonStr = content.replace(/```json/g, '').replace(/```/g, '').trim();
            // Fallback: sometimes models return text before JSON
            const firstBrace = jsonStr.indexOf('{');
            const lastBrace = jsonStr.lastIndexOf('}');
            if (firstBrace !== -1 && lastBrace !== -1) {
                jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
            }

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
    const chatProviders = [
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct-0905' },
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct' },
        { type: 'groq', model: 'openai/gpt-oss-120b' },
        { type: 'groq', model: 'openai/gpt-oss-20b' },
    ];

    const makeRequest = async (provider: { type: string, model: string }, systemMessage: any, groqHistory: any[]) => {
        // Create a fresh message array for each attempt to avoid mutation issues
        const messages = [systemMessage, ...groqHistory];

        const params: any = {
            messages: messages,
            model: provider.model,
            max_tokens: 2048,
        };

        // Enable 'browser_search' strictly for supported OSS models (120b, 20b)
        // Kimi K2 does NOT support 'browser_search' on Groq
        if (provider.model.includes('gpt-oss')) {
            params.tools = [{ type: "browser_search" }];
        }

        const completion = await getGroqClient().chat.completions.create(params);
        return completion.choices[0]?.message?.content;
    };


    try {
        const groqHistory = history.map(msg => ({
            role: (msg.role === 'model' ? 'assistant' : 'user') as 'assistant' | 'user',
            content: msg.text
        }));
        groqHistory.push({ role: 'user', content: message });

        const systemMessage = {
            role: 'system' as const,
            content: `You are SIP Buddy, a specialized AI assistant for financial planning.
            - Answer questions about SIPs, mutual funds, and investing.
            - **Formatting Guidelines**:
              - Use **Markdown** for all responses.
              - Use **Headers** (#, ##, ###) to structure long answers.
              - Use **Tables** for comparisons (e.g., Fund A vs Fund B).
              - Use **LaTeX** for math formulas (wrap in single dollar signs $...$ for inline, double $$...$$ for block).
              - Use **Bold** for key concepts.
            - Do NOT answer off-topic questions.
            - Keep answers concise and helpful.`
        };

        for (const provider of chatProviders) {
            try {
                const response = await makeRequest(provider, systemMessage, groqHistory);
                if (response) return response;
            } catch (e: any) {
                console.warn(`Chat provider ${provider.model} failed:`, e.message);
                // Continue to next provider
            }
        }
        throw new Error("All chat providers failed.");

    } catch (error) {
        console.error("Error in sendMessageToChat:", error);
        throw new Error("Failed to send message. Please try again.");
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

    // Strategy: GPT-OSS 120B -> Kimi K2 -> GPT-OSS 20B -> Gemma 3 27B (Google) -> Qwen 3 32B (Groq)
    const providers = [
        { type: 'groq', model: 'openai/gpt-oss-120b' },
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct-0905' },
        { type: 'groq', model: 'moonshotai/kimi-k2-instruct' },
        { type: 'groq', model: 'openai/gpt-oss-20b' },
        { type: 'gemini', model: 'gemma-3-27b' },
        { type: 'groq', model: 'qwen/qwen3-32b' },
    ];

    for (const provider of providers) {
        try {
            console.log(`Generating quiz with ${provider.type}/${provider.model}`);
            let content = "";

            if (provider.type === 'groq') {
                const params: any = {
                    messages: [{ role: 'user', content: prompt }],
                    model: provider.model,
                    max_tokens: 4096,
                };

                // Force JSON mode if NOT using tools (Quiz doesn't need tools, needs strict JSON)
                // Kimi and others respect json_object
                params.response_format = { type: "json_object" };

                const completion = await getGroqClient().chat.completions.create(params);
                content = completion.choices[0]?.message?.content || "";
            } else {
                // Google GenAI (Gemma)
                const client = getGeminiClient();
                const response = await client.models.generateContent({
                    model: provider.model,
                    contents: prompt,
                    config: {
                        responseMimeType: 'application/json',
                    }
                });
                content = response.text || "";
            }

            if (!content) throw new Error("No content returned");

            // Robust JSON extraction
            let jsonStr = content.replace(/```json/g, '').replace(/```/g, '').trim();
            const firstBrace = jsonStr.indexOf('[');
            const lastBrace = jsonStr.lastIndexOf(']');
            if (firstBrace !== -1 && lastBrace !== -1) {
                jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
            } else if (jsonStr.startsWith('{')) {
                // Handle wrapped object case
                const parsed = JSON.parse(jsonStr);
                if (parsed.questions) return parsed.questions;
            }

            const questions = JSON.parse(jsonStr);
            if (Array.isArray(questions)) return questions;

        } catch (e: any) {
            console.warn(`Quiz provider ${provider.model} failed:`, e.message);
        }
    }

    throw new Error("Failed to generate quiz from all providers.");
};
