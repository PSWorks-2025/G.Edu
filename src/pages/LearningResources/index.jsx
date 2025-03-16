import React from 'react';
import './LearningResources.css';

import { useState } from 'react';

import LearningResourcesList from './LearningResourcesList';
import LearningResourcesSearch from './LearningResourcesSearch';

import { PageTitle } from '../../globalComponents2/Typography';

const LearningResources = () => {
  const [filteredExerciseType, setFilteredExerciseType] = useState('All types');
  const [filteredLevel, setFilteredLevel] = useState('All levels');
  const [searchText, setSearchText] = useState('');

  return (
    <div className="mt-10">
      <PageTitle>Learning Resources</PageTitle>
      
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
