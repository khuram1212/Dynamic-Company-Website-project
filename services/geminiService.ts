import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize efficiently; handle missing key gracefully
const ai = new GoogleGenAI({ apiKey });

export const generateBlogContent = async (title: string): Promise<string> => {
  if (!apiKey) {
    return `
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
        <h3 class="font-bold flex items-center gap-2">⚠️ API Key Missing</h3>
        <p class="mt-2 text-sm">To use AI features:</p>
        <ol class="list-decimal ml-5 mt-1 text-sm space-y-1">
          <li>Ensure <code>process.env.API_KEY</code> is available in your environment.</li>
        </ol>
      </div>
    `;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a professional, engaging, and informative blog post (approx 300-400 words) for a corporate tech blog about: "${title}". 
      
      Structure the response as follows:
      1. Use proper HTML tags (<h3>, <p>, <ul>, <li>, <strong>).
      2. Start with a catchy introduction.
      3. Divide the content into clear sections with <h3> subheadings.
      4. Use bullet points where appropriate for readability.
      5. Do NOT include <html>, <head>, or <body> tags.
      6. Do NOT include markdown code block markers like \`\`\`html. Just return the raw HTML string suitable for injecting into a div.`,
    });

    return response.text || "<p>Unable to generate content at this time.</p>";
  } catch (error) {
    console.error("Gemini generation error:", error);
    return "<p>An error occurred while generating the article. Please check your API key configuration and try again.</p>";
  }
};

export const generateJobDescription = async (jobTitle: string): Promise<string> => {
    if (!apiKey) return "API Key missing. Please configure process.env.API_KEY.";
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Write a compelling, modern job description for a "${jobTitle}" role at a forward-thinking tech company called NovaCorp. 
            
            Include:
            - A brief, exciting hook about the role.
            - 3-4 key responsibilities (bullet points).
            - 3-4 key requirements (bullet points).
            
            Keep it under 200 words total. Return plain text with clear formatting (dashes for bullets).`
        });
        return response.text || "Details unavailable.";
    } catch (e) {
        return "Could not load description. Please check your connection and API key.";
    }
}