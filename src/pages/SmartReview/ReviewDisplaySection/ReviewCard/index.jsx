import React from 'react';
import LevelRadioButton from './LevelRadioButton';
import AreaRadioButton from './AreaRadioButton';

const ReviewCard = ({ item, onClick }) => {
  return (
    <div
      className="flex items-start space-x-4 mb-8 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
      onClick={() => onClick(item)}
    >
      <div className="w-24 h-24 bg-gray-300 flex-shrink-0"></div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>

        <div className="mb-2">
          <p className="text-sm mb-1">Level:</p>
          <div className="flex space-x-2">
            <LevelRadioButton
              level="Foundation"
              selected={item.level === 'Foundation'}
              itemId={item.id}
            />
            <LevelRadioButton level="Medium" selected={item.level === 'Medium'} itemId={item.id} />
            <LevelRadioButton
              level="Advanced"
              selected={item.level === 'Advanced'}
              itemId={item.id}
            />
            <LevelRadioButton
              level="Exam-ready"
              selected={item.level === 'Exam-ready'}
              itemId={item.id}
            />
          </div>
        </div>

        <div>
          <p className="text-sm mb-1">Area:</p>
          <div className="flex space-x-2">
            <AreaRadioButton
              area="Verbal"
              selected={item.areas.includes('Verbal')}
              itemId={item.id}
            />
            <AreaRadioButton area="Math" selected={item.areas.includes('Math')} itemId={item.id} />
            <AreaRadioButton
              area="Vocab"
              selected={item.areas.includes('Vocab')}
              itemId={item.id}
            />
            <AreaRadioButton
              area="Tip/Other"
              selected={item.areas.includes('Tip/Other')}
              itemId={item.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
