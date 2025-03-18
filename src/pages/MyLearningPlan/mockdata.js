// Mock data for each tab
export const cardDataVerbal = [
  {
    id: 1,
    title: 'Reading Comprehension',
    description: 'Practice critical reading skills',
    deadline: '2025-04-10',
  },
  {
    id: 2,
    title: 'Sentence Completion',
    description: 'Learn to identify context clues',
    deadline: '2025-03-28',
  },
  {
    id: 3,
    title: 'Text Completion',
    description: 'Improve vocabulary in context',
    deadline: '2025-05-02',
  },
  {
    id: 4,
    title: 'Passage Analysis',
    description: 'Develop analytical reading skills',
    deadline: '2025-04-15',
  },
  {
    id: 5,
    title: 'Argument Structure',
    description: 'Identify premises and conclusions',
    deadline: '2025-03-22',
  },
];

export const cardDataMath = [
  {
    id: 6,
    title: 'Algebra Fundamentals',
    description: 'Review core algebraic concepts',
    deadline: '2025-04-02',
  },
  {
    id: 7,
    title: 'Geometry Practice',
    description: 'Focus on spatial reasoning problems',
    deadline: '2025-03-30',
  },
  {
    id: 8,
    title: 'Data Analysis',
    description: 'Interpret graphs and statistical data',
    deadline: '2025-04-12',
  },
  {
    id: 9,
    title: 'Quantitative Comparison',
    description: 'Practice comparing quantities efficiently',
    deadline: '2025-04-22',
  },
  {
    id: 10,
    title: 'Problem Solving',
    description: 'Apply mathematical concepts to real-world scenarios',
    deadline: '2025-05-08',
  },
];

export const cardDataVocab = [
  {
    id: 11,
    title: 'High-Frequency Words',
    description: 'Learn the most common test vocabulary',
    deadline: '2025-03-25',
  },
  {
    id: 12,
    title: 'Word Roots',
    description: 'Study common Greek and Latin roots',
    deadline: '2025-04-05',
  },
  {
    id: 13,
    title: 'Synonyms and Antonyms',
    description: 'Practice word relationships',
    deadline: '2025-04-17',
  },
  {
    id: 14,
    title: 'Contextual Usage',
    description: 'Understand words in different contexts',
    deadline: '2025-05-01',
  },
  {
    id: 15,
    title: 'Vocabulary Drills',
    description: 'Daily practice with new words',
    deadline: '2025-04-20',
  },
];

export const cardDataTips = [
  {
    id: 16,
    title: 'Test-Taking Strategies',
    description: 'Learn time management and question prioritization',
    deadline: '2025-04-08',
  },
  {
    id: 17,
    title: 'Stress Management',
    description: 'Techniques to reduce test anxiety',
    deadline: '2025-03-27',
  },
  {
    id: 18,
    title: 'Mock Test Review',
    description: 'Analyze performance and identify weaknesses',
    deadline: '2025-04-30',
  },
  {
    id: 19,
    title: 'Study Schedule',
    description: 'Create an effective study plan',
    deadline: '2025-04-13',
  },
  {
    id: 20,
    title: 'Question Types',
    description: 'Review all question formats and approaches',
    deadline: '2025-05-10',
  },
];

export const exampleCardListData = {
  'L-1': {
    alertText: null, // No need this, it would function fine without this
    deadline: null, // No need this, it would function fine without this
    id: 'L-1', // !! The rest needs to be filled else it wont work
    title: 'Understanding SAT Question Types',
    description: 'A comprehensive guide covering key verbal and math question types on the SAT.',
    type: 'Document',
    areas: ['Verbal', 'Math'],
    sub_areas: {
      Verbal: ['Information and Ideas', 'Craft and Structure'],
      Math: ['Advanced Math'],
    },
    detail_content: {
      text: 'This document covers essential strategies for mastering SAT reading comprehension.',
      image: 'https://example.com/images/sat_reading_strategies.png',
      file_ref: 'https://example.com/files/sat_reading_guide.pdf',
      link: 'https://example.com/resources/sat-strategies',
    },
  },
  'L-2': {
    alertText: null,
    deadline: null,
    id: 'L-2',
    title: 'Mastering SAT Reading Strategies',
    description: 'Effective techniques to approach SAT reading passages with confidence.',
    type: 'Document',
    areas: ['Verbal'],
    sub_areas: {},
    detail_content: {
      text: 'This document provides essential strategies for tackling SAT reading passages, including time management tips, active reading techniques, and common question types with sample answers.',
      image: 'https://example.com/images/sat_reading_strategies.png',
      file_ref: 'https://example.com/files/mastering_sat_reading.pdf',
      link: 'https://example.com/sat-reading-strategies',
    },
  },
  'L-3': {
    alertText: null,
    deadline: null,
    id: 'L-3',
    title: 'Essential SAT Vocabulary List',
    description: 'A list of high-frequency words that commonly appear in SAT exams.',
    type: 'Document',
    areas: ['Vocab'],
    sub_areas: {},
    detail_content: {
      text: 'This document contains a curated list of high-frequency SAT vocabulary words, along with their definitions and example sentences to help students improve their reading and writing scores.',
      image: 'https://example.com/images/sat_vocabulary_list.png',
      file_ref: 'https://example.com/files/essential_sat_vocab.pdf',
      link: 'https://example.com/sat-vocabulary',
    },
  },
};
