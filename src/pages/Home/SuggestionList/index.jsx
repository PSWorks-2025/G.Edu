import React from 'react';
import { primaryColors } from '../../../utils/primaryColor/Colors';

// Sample data - replace with your actual data or fetch from API
const suggestionsData = [
  {
    id: 1,
    title: 'SAT Math Practice Test 1',
    description: 'Official SAT Math practice questions with answers and explanations',
    type: 'Practice Test',
  },
  {
    id: 2,
    title: 'Reading Comprehension Strategies',
    description: 'Techniques to improve reading speed and comprehension',
    type: 'Study Guide',
  },
  {
    id: 3,
    title: 'SAT Writing & Language Tips',
    description: 'Grammar rules and writing tips for the SAT',
    type: 'Study Guide',
  },
  {
    id: 4,
    title: 'Advanced Math Problem Solving',
    description: 'Strategies for tackling complex math problems',
    type: 'Tutorial',
  },
  {
    id: 5,
    title: 'SAT Vocabulary Builder',
    description: 'Essential vocabulary words for the SAT',
    type: 'Flashcards',
  },
  {
    id: 6,
    title: 'Essay Writing Workshop',
    description: 'How to write effective SAT essays',
    type: 'Workshop',
  },
  {
    id: 7,
    title: 'Science Passage Analysis',
    description: 'How to approach scientific passages on the SAT',
    type: 'Study Guide',
  },
  {
    id: 8,
    title: 'Historical Document Analysis',
    description: 'Techniques for analyzing historical texts',
    type: 'Study Guide',
  },
];

const SuggestionsList = ({ showAll }) => {
  // Limit to 6 suggestions when not showing all
  const displayedSuggestions = showAll ? suggestionsData : suggestionsData.slice(0, 5);

  return (
    <div>
      {' '}
      {displayedSuggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between mb-2"
        >
          <div className="flex items-center">
            <ion-icon
              style={{ color: 'gray', fontSize: 20, marginRight: 10 }}
              name="document-outline"
            ></ion-icon>
            <div>
              <h2 className="text-lg font-semibold">{suggestion.title}</h2>
              <p className="text-gray-500">{suggestion.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionsList;
