import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateLogo() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A professional healthcare logo for "Dolphin Care Services". The logo features a stylized blue dolphin and a green wave gracefully curving together to form a heart shape. The design is clean, modern, and high-resolution on a pure white background. The aesthetic is clinical yet compassionate, with soft gradients and elegant curves.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
