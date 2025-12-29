
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userPrompt: string, cartContext: string) => {
  try {
    // Correctly initialize GoogleGenAI with a named parameter for the API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent with the model name and prompt as per guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AI assistant for "Variety Mart", a popular grocery store in Jamshedpur. 
      Help the customer with their queries. You can suggest recipes based on their cart, or tell them about the store's features 
      (Free home delivery on minimum spend, one-stop shop for everything from groceries to stationery).
      Keep your answers brief, friendly, and professional.
      
      Current Cart context: ${cartContext}
      User said: ${userPrompt}`,
    });
    
    // Access the text property directly from the response.
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I'm having trouble connecting to the mart's brain right now. Please try again!";
  }
};
