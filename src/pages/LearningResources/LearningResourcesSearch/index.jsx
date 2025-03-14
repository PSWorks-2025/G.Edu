import React from 'react';
import LearningResourcesSearchBar from './LearningResourcesSearchBar';
import LearningResourcesFilter from './LearningResourcesFilter';

const LearningResourcesSearch = ({
  searchText,
  setSearchText,
  setFilteredLevel,
  setFilteredExerciseType,
}) => {
  return (
    <div className="flex justify-between items-center mb-6 h-11">
      <LearningResourcesSearchBar searchText={searchText} setSearchText={setSearchText} />
      <LearningResourcesFilter
        setFilteredExerciseType={setFilteredExerciseType}
        setFilteredLevel={setFilteredLevel}
      />
    </div>
  );
};

export default LearningResourcesSearch;
