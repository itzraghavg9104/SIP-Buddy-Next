"use server";


import { GoogleGenAI, Modality } from "@google/genai";
import { FinancialAdvisor } from '../types';

const getAIClient = () => {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        console.error("CRITICAL: GEMINI_API_KEY is missing in server environment");
        throw new Error("GEMINI_API_KEY environment variable not set");
    }
    return new GoogleGenAI({ apiKey: API_KEY });
};

// Initialize ai lazily
let aiInstance: GoogleGenAI | null = null;
const getAI = () => {
    if (!aiInstance) {
        aiInstance = getAIClient();
    }
    return aiInstance;
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

    // Strategy: Flash (best for maps) -> Flash Lite (fallback)
    const models = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];

    for (const model of models) {
        try {
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

            if (!text) throw new Error("No text returned from AI");

            const jsonMatch = text.match(/\[[\s\S]*\]/);
            if (jsonMatch && jsonMatch[0]) {
                const parsed = JSON.parse(jsonMatch[0]);
                if (Array.isArray(parsed)) {
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
                        .filter(advisor => advisor.name !== 'Unnamed Advisor' && advisor.address !== 'No address provided');

                    // Success! Return immediately
                    return { advisors, groundingChunks: JSON.parse(JSON.stringify(groundingChunks)) };
                }
            }
            // If we got here, parsing failed strictly, but maybe model didn't fail. 
            // Throwing error to trigger fallback might be good if model failed to give JSON.
            throw new Error("Failed to parse valid advisor JSON");

        } catch (e: any) {
            console.warn(`findFinancialAdvisors failed with ${model}:`, e.message);
            if (model === models[models.length - 1]) {
                // All failed
                console.error("All models failed for Advisors.");
                return { advisors: [], groundingChunks: [] }; // Graceful empty return
            }
        }
    }
    return { advisors: [], groundingChunks: [] };
};


export const transcribeAudio = async (formData: FormData): Promise<string> => {
    // Strategy: Flash Lite (efficient)
    const model = 'gemini-2.5-flash-lite';

    const audioFile = formData.get('audio') as Blob;
    if (!audioFile) {
        throw new Error("No audio file provided");
    }

    try {
        const arrayBuffer = await audioFile.arrayBuffer();
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
            model: model,
            contents: { parts: [audioPart, textPart] },
        });

        return response.text || "";
    } catch (error) {
        // Fallback to standard flash if lite fails
        try {
            const response = await getAI().models.generateContent({
                model: 'gemini-2.5-flash',
                contents: {
                    parts: [{
                        inlineData: {
                            mimeType: audioFile.type || 'audio/webm',
                            data: Buffer.from(await audioFile.arrayBuffer()).toString('base64'),
                        }
                    }, { text: "Transcribe the following audio accurately:" }]
                },
            });
            return response.text || "";
        } catch (retryError) {
            console.error("Error in transcribeAudio (all models):", retryError);
            throw new Error("Failed to transcribe audio.");
        }
    }
};
