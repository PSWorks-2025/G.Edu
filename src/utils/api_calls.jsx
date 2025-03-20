import { GoogleGenerativeAI } from '@google/generative-ai';

const key = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyA8QbAomn0BSeO4hheBuT9rWKVyW_tXH2k";
const genAI = new GoogleGenerativeAI(key);

const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export const get_AI_tutor_response = async (word) => {
  const prompt = `
SAT Tutor: Explain the word **${word}**.
## 1. Definition: (give every wordform of **${word}**, explain each one, e.g. *to be* (verb) : *am, is, are, was, were, been, being*)
## 2. Synonyms: (like Definition, give every wordform of every synonyms and explain, e.g. **survive** (verb) : *exist, live, subsist, breathe*)
## 3. SAT Usage: (how it's tested in Word-in-Context questions)
## 4. Example Sentences: (2-3 in SAT-style)
## 5. Common Confusions: (if applicable)
## 6. SAT Word-in-Context: Questions (4 questions):
 - **Q1-3**: Provide answers & explanations.
 - **Q4**: Ask the student to answer, then explain.
Format response in Markdown.
Do not bold the headings, e.g. "##1. Definition" not "##**1. Definition**".
`;

  try {
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    console.log('result: ', result);

    const response =
      result.response.candidates[0].content.parts[0].text || 'No response generated.';
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Error: Unable to fetch AI response.';
  }
};
