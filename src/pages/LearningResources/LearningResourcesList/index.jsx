import React from 'react';
import LearningResourcesListItem from './LearningResourcesListItem';

const learningResources = await fetch('/learning_contents.json').then((res) => res.json());

const LearningResourcesList = ({ filteredExerciseType, filteredLevel }) => {
  return (
    <div className="mt-10 bg-[#fbfbfb] w-full px-7 pb-7 pt-6 rounded-lg">
      <h2 className="NUNITO_SANS text-2xl">Recommendations</h2>
      {learningResources.map((resource) => {
        if (
          (filteredExerciseType === 'All types' || resource.type === filteredExerciseType) &&
          (filteredLevel === 'All levels' || resource.level === filteredLevel)
        ) {
          return (
            <LearningResourcesListItem
              key={resource.id}
              title={resource.title}
              description={resource.description}
              deadline={resource.deadline}
              imageSrc={resource.detail_content.image}
              href={resource.detail_content.link}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default LearningResourcesList;
