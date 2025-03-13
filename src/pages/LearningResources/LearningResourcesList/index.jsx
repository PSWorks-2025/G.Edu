import React from 'react';
import LearningResourcesListItem from './LearningResourcesListItem';

const learningResources = await fetch('/learning_contents.json').then((res) => res.json());

String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

const hightlightText = (text, searchText) => {
  const searchTextLower = searchText.toLowerCase();
  const textLower = text.toLowerCase();

  const arr = textLower.split(searchTextLower);

  let result = text.substr(0, arr[0].length);
  let sumIndex = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    result += `<span class="bg-yellow-300">${text.substr(
      sumIndex,
      searchText.length
    )}</span>`;
    result += text.substr(sumIndex + searchText.length, arr[i].length);
    sumIndex += searchText.length + arr[i].length;
  }
  return result;
};

const LearningResourcesList = ({ searchText, filteredExerciseType, filteredLevel }) => {
  return (
    <div className="mt-10 bg-[#fbfbfb] w-full px-7 pb-7 pt-6 rounded-lg">
      <h2 className="NUNITO_SANS text-2xl">Recommendations</h2>
      {learningResources.map((resource, index) => {
        if (
          (filteredExerciseType === 'All types' || resource.type === filteredExerciseType) &&
          (filteredLevel === 'All levels' || resource.level === filteredLevel) &&
          (searchText === '' ||
            resource.title.toLowerCase().includes(searchText.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return (
            <LearningResourcesListItem
              key={String(resource.id) + '_' + index}
              title={hightlightText(resource.title, searchText)}
              description={hightlightText(resource.description, searchText)}
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

// Trong suốt sự nghiệp văn học của mình, Nam Cao đã để lại những dấu ấn và tầm ảnh hưởng quan trọng đối với nền văn học Việt Nam. Ông là người tuyên ngôn cho quan điểm "Nghệ thuật vị nhân sinh", điều này được thể hiện qua những tác phẩm hướng về con người, đời sống và con người. Ông cũng là cây bút xuất sắc của dòng văn học hiện thực phê phán Việt Nam.