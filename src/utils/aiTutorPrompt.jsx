export const getAI_Tutor_Prompt = (word) => `
SAT tutor: Explain the word **${word}**.  
1. Definition
2. Synonyms
3. SAT Usage(How it's tested in Word-in-Context questions)  
4. Example Sentence (2-3 in SAT-style)  
5. Common Confusions (if applicable)  
6. SAT Word-in-Context Questions (4 questions):  
   - Q1-3: Provide answers & explanations.  
   - Q4: Ask student to answer, then explain.  
Use markdown headings
`;