import React from 'react';
import LearningResourcesListItem from './LearningResourcesListItem';

import highlightText from '../../../utils/highlightText';

const learningResources = await fetch('/learning_contents.json').then((res) => res.json());

const LearningResourcesList = ({ searchText, filteredExerciseType, filteredLevel }) => {
  const filteredResources = learningResources.filter((resource) => {
    const isExerciseTypeMatch =
      filteredExerciseType === 'All types' || resource.type === filteredExerciseType;
    const isLevelMatch = filteredLevel === 'All levels' || resource.level === filteredLevel;
    const isSearchTextMatch = resource.title.toLowerCase().includes(searchText.toLowerCase());
    return isExerciseTypeMatch && isLevelMatch && isSearchTextMatch;
  });

  return (
    <div className="mt-10 bg-[#fbfbfb] w-full px-7 pb-7 pt-6 rounded-lg">
      <h2 className="NUNITO_SANS text-2xl">Recommendations</h2>
      {filteredResources.length > 0 ? (
        filteredResources.map((resource, index) => (
          <LearningResourcesListItem
            key={`${resource.id}_${index}`}
            title={highlightText(resource.title, searchText)}
            description={highlightText(resource.description, searchText)}
            deadline={resource.deadline}
            imageSrc={resource.detail_content.image}
            href={resource.detail_content.link}
          />
        ))
      ) : (
        <p className="ROBOTO_FONTS text-center mt-6 w-full">No resources found.</p>
      )}
    </div>
  );
};

export default LearningResourcesList;

// Trong suốt sự nghiệp văn học của mình, Nam Cao đã để lại những dấu ấn và tầm ảnh hưởng quan trọng đối với nền văn học Việt Nam. Ông là người tuyên ngôn cho quan điểm "Nghệ thuật vị nhân sinh", điều này được thể hiện qua những tác phẩm hướng về con người, đời sống và con người. Ông cũng là cây bút xuất sắc của dòng văn học hiện thực phê phán Việt Nam.
