import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { resumeData } from "../data/resume";

// Initialize the client
// We assume process.env.API_KEY is available
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-3-pro-preview";

// Construct the context from the resume data
const SYSTEM_INSTRUCTION = `
You are an intelligent AI assistant representing Tharun Kumar K. 
You have access to his resume and professional portfolio. 
Your goal is to answer questions from potential recruiters or employers about Tharun's experience, skills, and qualifications professionally and accurately.

Here is Tharun's Resume Data:
${JSON.stringify(resumeData, null, 2)}

Guidelines:
- Be professional, polite, and concise.
- Use "I" or "My" when referring to Tharun, as you are his digital persona (or use "Tharun" if specifically asked about him in the third person, but acting as him is more immersive).
- Highlight his expertise in CMMS, Material Cataloging, and SAP/ERP systems.
- If a question is outside the scope of the resume, politely state that you don't have that information.
- If the user asks for complex analysis (e.g., "How does your experience at Cheniere relate to GASCO?"), provide a detailed comparison.
`;

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export const sendMessageToGemini = async (
  message: string, 
  history: ChatMessage[], 
  enableThinking: boolean = false
): Promise<string> => {
  try {
    // Transform history for the API
    // The API expects history in a specific format if we were using chat.sendMessage, 
    // but for simplicity and statelessness in this service wrapper, we can construct a prompt 
    // or use the chat interface. Let's use the chat interface.

    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: enableThinking ? { thinkingBudget: 32768 } : undefined,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const response = await chat.sendMessage({
      message: message,
    });

    return response.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing technical difficulties connecting to my AI brain. Please try again later.";
  }
};