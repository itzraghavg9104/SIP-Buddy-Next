"use server";

import { GoogleGenAI, Chat, Type, Modality } from "@google/genai";
import { UserProfile, InvestmentPlan, Fund, FundCategory, AssetAllocationItem, GrowthDataPoint, FinancialAdvisor, QuizDifficulty, QuizQuestion, ChatMessage } from '../types';

const getAIClient = () => {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is missing in server environment");
        throw new Error("GEMINI_API_KEY environment variable not set");
    }
    // console.log("GEMINI_API_KEY loaded successfully (length: " + API_KEY.length + ")");
    return new GoogleGenAI({ apiKey: API_KEY });
};

// Initialize ai lazily to avoid build-time errors if env vars are missing
let aiInstance: GoogleGenAI | null = null;
const getAI = () => {
    if (!aiInstance) {
        aiInstance = getAIClient();
    }
    return aiInstance;
};

/**
 * Sanitizes the raw, parsed JSON object from the Gemini API to ensure it conforms to the InvestmentPlan interface.
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

    // Normalize asset allocation percentages to sum up to 100, preventing UI bugs.
    const totalAllocation = sanitizedPlan.assetAllocation.reduce((sum, item) => sum + item.value, 0);
    if (totalAllocation > 0 && Math.abs(totalAllocation - 100) > 1) { // Allow for small rounding errors
        sanitizedPlan.assetAllocation = sanitizedPlan.assetAllocation.map(item => ({
            ...item,
            value: Number(((item.value / totalAllocation) * 100).toFixed(2)),
        }));
    }

    return sanitizedPlan;
};


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

    Step 1: SEARCH. Use Google Search to find the latest top-performing mutual funds in India (Direct Plans, Growth option). 
    Prioritize data from trusted sources like Moneycontrol, Value Research, and Groww. 
    Look for funds with consistent 3Y and 5Y returns that match the user's risk profile and recommended asset allocation.

    Step 2: GENERATE PLAN. Create a comprehensive investment plan.

    Requirements:
    1.  Calculate a recommended monthly SIP amount.
    2.  Provide a detailed investment rationale. If a step-up percentage is provided, incorporate annual increases in the SIP amount into your growth projections and rationale.
    3.  Create a detailed asset allocation summing to 100%. You MUST break down the allocation into specific categories like 'Large Cap Equity', 'Mid Cap Equity', 'Small Cap Equity', 'International Equity', 'Debt/Bonds', 'Gold', 'Silver', etc., based on the user's risk profile. Do NOT use broad generic terms like 'Equity' or 'Mutual Funds'.
    4.  Provide investment growth projections for years 0, 1, 3, 5, and the final year (Conservative, Expected, Aggressive, Recovery, Crash scenarios). Factor in the annual step-up if applicable.
    5.  Recommend at least 2 specific mutual funds for each category based on your search results. Include 3Y/5Y returns, expense ratio, and a brief thesis.

    OUTPUT FORMAT:
    You must return ONLY a single valid JSON object. Do not include markdown code blocks (like \`\`\`json). 
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
      ]
    }
    `;

    const model = 'gemini-2.5-flash';

    try {
        console.log(`Attempting to generate plan with model: ${model} and Google Search`);
        const response = await getAI().models.generateContent({
            model: model,
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }],
                // responseMimeType and responseSchema are NOT allowed when using googleSearch tool in this context.
                // We rely on the prompt to enforce JSON structure.
            },
        });

        // Extract JSON from the text response (handling potential markdown wrapping)
        let text = response.text;
        if (!text) {
            throw new Error("No text returned from AI");
        }

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            text = jsonMatch[0];
        }

        let plan;
        try {
            plan = JSON.parse(text);
        } catch (e) {
            console.error("Failed to parse JSON from text:", text);
            throw new Error("The AI response was not in valid JSON format.");
        }

        const sanitizedPlan = sanitizeInvestmentPlan(plan);

        // Attach grounding chunks (sources) if available
        if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
            sanitizedPlan.groundingChunks = response.candidates[0].groundingMetadata.groundingChunks;
        }

        const finalPlan = { ...sanitizedPlan };
        // Attach grounding chunks (sources) if available
        if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
            // Force deep clone/serialization to remove any non-serializable SDK internals
            finalPlan.groundingChunks = JSON.parse(JSON.stringify(response.candidates[0].groundingMetadata.groundingChunks));
        }

        return finalPlan;

    } catch (e: any) {
        console.error(`Gemini Action Failed. Model: ${model}. Error details:`, e);
        // Log the specific API error message if available
        if (e.message) console.error("Error Message:", e.message);
        if (e.response) console.error("Error Response:", JSON.stringify(e.response, null, 2));

        throw new Error(`Failed to generate investment plan: ${e.message || "Unknown error"}`);
    }
};

export const sendMessageToChat = async (history: ChatMessage[], message: string): Promise<string> => {
    // Reconstruct chat history for the Gemini API
    const geminiHistory = history.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
    }));

    const chat = getAI().chats.create({
        model: 'gemini-2.5-flash',
        history: geminiHistory,
        config: {
            systemInstruction: `You are SIP Buddy, a specialized AI assistant for the SIP Buddy investment planning platform. Your sole purpose is to help users with questions about Systematic Investment Plans (SIPs), mutual funds, investment strategies, and using the SIP Buddy application.
- Your name is SIP Buddy.
- You MUST NOT answer questions about your origin, who created you, your underlying technology, or any topic outside of financial planning and the SIP Buddy platform.
- If a user asks an off-topic question (e.g., "Who made you?", "Are you from Google?", "Tell me a joke"), you MUST politely decline and steer the conversation back to financial planning. For example: "As SIP Buddy, my expertise is in financial planning. How can I help you with your investment questions?"
- Keep your answers concise, helpful, and strictly within your designated role.`,
        },
    });

    try {
        const response = await chat.sendMessage({ message });
        return response.text || "No response text";
    } catch (error) {
        console.error("Error in sendMessageToChat:", error);
        throw new Error("Failed to send message.");
    }
};

export const findFinancialAdvisors = async (location: { latitude: number; longitude: number } | { query: string }): Promise<{ advisors: FinancialAdvisor[], groundingChunks: any[] }> => {
    const locationPrompt = 'latitude' in location
        ? `near latitude ${location.latitude} and longitude ${location.longitude}`
        : `near "${location.query}"`;

    const prompt = `
        Find registered financial advisors ${locationPrompt}.
        Return a list of up to 10 advisors.
        For each advisor, you MUST provide their Name, Firm, full Address, Phone number, and Website.
        You MUST also provide their precise geographic coordinates (Latitude and Longitude) IF they are available from the mapping service.
        The entire response must be a single, valid JSON array of objects.
        Each object in the array should have the following keys: "name", "firm", "address", "phone", "website", "latitude", "longitude".
        The values for latitude and longitude must be numbers if available; otherwise, they MUST be null. All other values must be strings.
        If a piece of information is not available for a non-essential field like phone or website, use an empty string "" as the value. The name and address fields are mandatory.
        Do not include any introductory text, explanations, markdown formatting (like \`\`\`json), or any text outside of the single JSON array itself.
    `;

    const model = 'gemini-2.5-flash';

    const toolConfig = 'latitude' in location ? {
        retrievalConfig: {
            latLng: {
                latitude: location.latitude,
                longitude: location.longitude,
            }
        }
    } : undefined;

    const response = await getAI().models.generateContent({
        model: model,
        contents: prompt,
        config: {
            tools: [{ googleMaps: {} }],
            toolConfig: toolConfig,
        },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    let advisors: FinancialAdvisor[] = [];
    try {
        if (!text) {
            throw new Error("No text returned from AI");
        }
        // Find the JSON array within the response text. This handles cases where the API might add extra text.
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch && jsonMatch[0]) {
            const parsed = JSON.parse(jsonMatch[0]);
            if (Array.isArray(parsed)) {
                // Sanitize and type-check the data from the API
                advisors = parsed
                    .map(item => ({
                        name: String(item.name || 'Unnamed Advisor'),
                        firm: String(item.firm || ''),
                        address: String(item.address || 'No address provided'),
                        phone: String(item.phone || ''),
                        website: String(item.website || ''),
                        latitude: typeof item.latitude === 'number' ? item.latitude : null,
                        longitude: typeof item.longitude === 'number' ? item.longitude : null,
                    }))
                    // Filter out any entries that are missing essential information
                    .filter(advisor => advisor.name !== 'Unnamed Advisor' && advisor.address !== 'No address provided');
            } else {
                console.warn("Parsed data is not an array:", parsed);
            }
        } else {
            console.warn("No valid JSON array found in the response.", text);
        }
    } catch (e) {
        console.error("Failed to parse JSON response for financial advisors:", e);
        console.error("Raw text from API:", text);
    }

    return { advisors, groundingChunks };
}

export const textToSpeech = async (text: string): Promise<string> => {
    try {
        const response = await getAI().models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: `Say this in a friendly and helpful tone: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
            return base64Audio;
        }
        throw new Error("No audio data received from TTS API.");
    } catch (error) {
        console.error("Error in textToSpeech:", error);
        throw new Error("Failed to generate speech.");
    }
};

export const transcribeAudio = async (formData: FormData): Promise<string> => {
    const audioFile = formData.get('audio') as Blob;
    if (!audioFile) {
        throw new Error("No audio file provided");
    }

    try {
        const arrayBuffer = await audioFile.arrayBuffer();
        // Convert to base64
        const base64Audio = Buffer.from(arrayBuffer).toString('base64');

        const audioPart = {
            inlineData: {
                mimeType: audioFile.type || 'audio/webm',
                data: base64Audio,
            },
        };
        const textPart = {
            text: "Transcribe the following audio accurately:"
        };

        const response = await getAI().models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [audioPart, textPart] },
        });

        return response.text || "";
    } catch (error) {
        console.error("Error in transcribeAudio:", error);
        throw new Error("Failed to transcribe audio.");
    }
};

export const generateQuizQuestions = async (difficulty: QuizDifficulty): Promise<QuizQuestion[]> => {
    const prompt = `
        Generate a financial literacy quiz with exactly 10 unique questions.
        Difficulty Level: ${difficulty}.
        Topics: Personal Finance, Investing (SIP, Mutual Funds, Stocks), Taxes (India context), and General Financial Literacy.

        Output Requirements:
        1. Return ONLY a JSON array of objects. Do not include markdown formatting (like \`\`\`json).
        2. Ensure diverse question types in the following distribution:
           - 4 Single Choice (type: 'single_choice')
           - 2 Multiple Choice (type: 'multiple_choice') - require 2 or more correct options
           - 2 True/False (type: 'true_false')
           - 1 Fill in the Blank (type: 'fill_in_blank')
           - 1 Short Answer (type: 'short_answer')
        3. Structure each object exactly like this:
           {
             "id": number, // 1 to 10
             "type": string, // one of the types listed above
             "question": string,
             "options": string[], // Array of options for MCQs. For 'true_false', MUST be ["True", "False"]. Null or empty array for text inputs.
             "correctAnswer": string | string[], // String for single/text, Array of strings for multiple_choice
             "acceptedKeywords": string[], // Array of acceptable keywords/synonyms for text answers (case-insensitive matching)
             "explanation": string // Brief explanation of the correct answer
           }
        
        For 'multiple_choice', 'correctAnswer' MUST be an array of strings matching the correct options.
        For 'fill_in_blank' and 'short_answer', 'options' should be empty, and 'correctAnswer' should be the main answer string. 'acceptedKeywords' is crucial here for validation (e.g. if answer is "Equity", keywords could be ["Equity", "Equities", "Stock", "Stocks"]).
    `;

    try {
        const response = await getAI().models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        let text = response.text;
        if (!text) {
            throw new Error("No text returned from AI");
        }
        // Cleanup markdown if present
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            text = jsonMatch[0];
        }

        const questions: QuizQuestion[] = JSON.parse(text);

        // Basic validation
        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error("Invalid format returned from AI");
        }

        return questions;
    } catch (error) {
        console.error("Quiz generation failed:", error);
        throw new Error("Failed to generate quiz questions. Please try again.");
    }
};
