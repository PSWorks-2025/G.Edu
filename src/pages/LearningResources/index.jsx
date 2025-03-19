import React from 'react';
import './LearningResources.css';

import { useState } from 'react';

import { PageTitle } from '../../globalComponents/Typography';
import FilterGroup from '../../globalComponents/FilterGroup';
import SearchBar from '../../globalComponents/SearchBar';
import CardList from '../../globalComponents/CardList';

const learningResources = await fetch('/learning_contents_improved.json').then((res) => res.json());

const LearningResources = () => {
  const [filteredExerciseType, setFilteredExerciseType] = useState('All types');
  const [filteredLevel, setFilteredLevel] = useState('All levels');
  const [searchText, setSearchText] = useState('');

  const filteredResources = Object.values(learningResources).filter((resource) => {
    const isExerciseTypeMatch =
      filteredExerciseType === 'All types' || resource.type === filteredExerciseType;
    const isLevelMatch = filteredLevel === 'All levels' || resource.level === filteredLevel;
    return isExerciseTypeMatch && isLevelMatch;
  });

  const filterGroups = [
    {
      set: setFilteredExerciseType,
      options: [
        { value: 'All types', label: 'All types' },
        { value: 'Document', label: 'Document' },
        { value: 'Exercise', label: 'Exercise' },
        { value: 'Flashcard', label: 'Flashcard' },
        { value: 'Flashcard', label: 'Flashcard' },
      ],
    },
    {
      set: setFilteredLevel,
      options: [
        { value: 'All levels', label: 'All levels' },
        { value: 'Foundation', label: 'Foundation' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Advanced', label: 'Advanced' },
      ],
    },
  ];

  return (
    <div className="mt-4">
      <PageTitle>Learning Resources</PageTitle>
      <div className="flex justify-between items-center mb-6 h-11">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          height={'100%'}
          width={'63%'}
        />
        <FilterGroup OptionGroups={filterGroups} height={'100%'} widthOfEachFilter={'10rem'} />
      </div>

      <CardList
        title={'Recommendations'}
        cardData={filteredResources}
        width={'100%'}
        findText={searchText}
      />
    </div>
  );
};

export default LearningResources;
