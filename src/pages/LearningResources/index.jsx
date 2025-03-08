import React from 'react';
import './LearningResources.css';
import LearningResourcesSearchBar from './LearningResourcesSearchBar';
import LearningResourcesFilter from './LearningResourcesFilter';
import LearningResourcesList from './LearningResourcesList';

const LearningResources = () => {
  return (
    <div className="page">
      <h1>Learning Resources Page</h1>
      <LearningResourcesSearchBar />
      <LearningResourcesFilter />
      <LearningResourcesList />
    </div>
  );
};

export default LearningResources;
