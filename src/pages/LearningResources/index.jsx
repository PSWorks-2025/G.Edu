import React from 'react';
import './LearningResources.css';

import { useState } from 'react';

import LearningResourcesList from './LearningResourcesList';
import LearningResourcesSearch from './LearningResourcesSearch';

const LearningResources = () => {
  const [filteredExerciseType, setFilteredExerciseType] = useState('All types');
  const [filteredLevel, setFilteredLevel] = useState('All levels');
  const [searchText, setSearchText] = useState('');

  return (
    <div className="mt-16">
      <h1 className="font-extrabold NUNITO_SANS text-4xl mb-6">Learning Resources</h1>
      <LearningResourcesSearch
        searchText={searchText}
        setSearchText={setSearchText}
        setFilteredExerciseType={setFilteredExerciseType}
        setFilteredLevel={setFilteredLevel}
      />
      <LearningResourcesList
        searchText={searchText}
        filteredExerciseType={filteredExerciseType}
        filteredLevel={filteredLevel}
      />
    </div>
  );
};

export default LearningResources;
