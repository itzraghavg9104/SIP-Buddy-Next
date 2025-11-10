import { GoogleGenAI, Chat, Type, Modality } from "@google/genai";
import { UserProfile, InvestmentPlan, Fund, FundCategory, AssetAllocationItem, GrowthDataPoint, FinancialAdvisor } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const investmentPlanSchema = {
  type: Type.OBJECT,
  properties: {
    monthlySip: { type: Type.NUMBER, description: "The recommended monthly SIP amount." },
    riskProfile: { type: Type.STRING, description: "The user's calculated risk profile (e.g., 'Aggressive')." },
    timeHorizon: { type: Type.NUMBER, description: "The investment time horizon in years." },
    assetClasses: { type: Type.NUMBER, description: "The number of different asset classes recommended." },
    investmentRationale: { type: Type.STRING, description: "A detailed explanation of the investment strategy." },
    assetAllocation: {
      type: Type.ARRAY,
      description: "Breakdown of investment across different asset classes.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the asset class (e.g., 'Large Cap Equity')." },
          value: { type: Type.NUMBER, description: "Percentage allocation for this asset class." },
        },
        required: ['name', 'value'],
      },
    },
    growthProjections: {
      type: Type.ARRAY,
      description: "Year-by-year growth projections under different market scenarios.",
      items: {
        type: Type.OBJECT,
        properties: {
          year: { type: Type.NUMBER },
          amountInvested: { type: Type.NUMBER },
          conservative: { type: Type.NUMBER },
          expected: { type: Type.NUMBER },
          aggressive: { type: Type.NUMBER },
          recovery: { type: Type.NUMBER },
          crash: { type: Type.NUMBER },
        },
        required: ['year', 'amountInvested', 'conservative', 'expected', 'aggressive', 'recovery', 'crash'],
      },
    },
    fundRecommendations: {
      type: Type.ARRAY,
      description: "Specific mutual fund recommendations for each asset category.",
      items: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING, description: "The asset category (e.g., 'Large Cap Fund')." },
          allocationPercentage: { type: Type.NUMBER, description: "Percentage of the SIP allocated to this category." },
          funds: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                fundHouse: { type: Type.STRING },
                threeYearReturns: { type: Type.STRING, description: "3-year Compound Annual Growth Rate (CAGR)." },
                fiveYearReturns: { type: Type.STRING, description: "5-year Compound Annual Growth Rate (CAGR)." },
                expenseRatio: { type: Type.STRING },
                description: { type: Type.STRING, description: "A brief investment thesis for the fund." },
              },
              required: ['name', 'fundHouse', 'threeYearReturns', 'fiveYearReturns', 'expenseRatio', 'description'],
            },
          },
        },
        required: ['category', 'allocationPercentage', 'funds'],
      },
    },
  },
  required: ['monthlySip', 'riskProfile', 'timeHorizon', 'assetClasses', 'investmentRationale', 'assetAllocation', 'growthProjections', 'fundRecommendations'],
};


/**
 * Sanitizes the raw, parsed JSON object from the Gemini API to ensure it conforms to the InvestmentPlan interface.
 * This prevents runtime errors from undefined values, NaN, or incorrect data types.
 * @param plan The raw, parsed object from the API.
 * @returns A clean, type-safe InvestmentPlan object.
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
    5.  Specific mutual fund recommendations for each allocated asset class. Provide 2 top-performing funds for each category based on your knowledge. Provide their latest 3Y and 5Y CAGR returns, expense ratio, and a brief investment thesis.
    
    The entire response must be a single, valid JSON object that conforms to the provided schema. Do not include any markdown formatting, explanations, or any text outside of the JSON object itself.
    `;

    const primaryModel = 'gemini-2.5-pro';
    const fallbackModel = 'gemini-2.5-flash';

    const tryGenerate = async (model: string) => {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: investmentPlanSchema,
            },
        });
        
        try {
            // With JSON mode, the response text is a guaranteed JSON string.
            const plan = JSON.parse(response.text);
            return sanitizeInvestmentPlan(plan);
        } catch (e) {
            console.error(`Failed to parse response from model ${model}:`, e);
            console.error("Raw response text:", response.text);
            // Re-throw the error to be caught by the outer catch block, triggering a fallback.
            throw new Error(`Response from ${model} was not in the expected format.`);
        }
    };

    try {
        console.log(`Attempting to generate plan with primary model: ${primaryModel}`);
        return await tryGenerate(primaryModel);
    } catch (e) {
        console.warn(`Primary model (${primaryModel}) failed. Error:`, e instanceof Error ? e.message : String(e));
        console.log(`Falling back to model: ${fallbackModel}`);
        try {
            return await tryGenerate(fallbackModel);
        } catch (finalError) {
            console.error(`Fallback model (${fallbackModel}) also failed. Error:`, finalError instanceof Error ? finalError.message : String(finalError));
            throw new Error("We're sorry, but we were unable to generate your investment plan at this time, even after a retry. Please try again later.");
        }
    }
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

    const response = await ai.models.generateContent({
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
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
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

const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = (reader.result as string).split(',')[1];
            resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
    try {
        const base64Audio = await blobToBase64(audioBlob);
        const audioPart = {
            inlineData: {
                mimeType: audioBlob.type,
                data: base64Audio,
            },
        };
        const textPart = {
            text: "Transcribe the following audio accurately:"
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [audioPart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error in transcribeAudio:", error);
        throw new Error("Failed to transcribe audio.");
    }
};