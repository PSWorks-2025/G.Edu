import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
console.log("VITE_GEMINI_API_KEY: ", import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export const get_AI_tutor_response = async (word) => {
  console.log('word: ', word);

  const prompt = `
SAT Tutor: Explain the word **${word}**.
## 1. Definition
## 2. Synonyms
## 3. SAT Usage (How it's tested in Word-in-Context questions)
## 4. Example Sentences (2-3 in SAT-style)
## 5. Common Confusions (if applicable)
## 6. SAT Word-in-Context Questions (4 questions):
 - **Q1-3**: Provide answers & explanations.
 - **Q4**: Ask the student to answer, then explain.
Format response in Markdown
`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });
    console.log("result: ", result);
    
    const response = result.response.candidates[0].content.parts[0].text || 'No response generated.';
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Error: Unable to fetch AI response.';
  }
};
