import React from 'react';
import LevelRadioButtonGroup from './LevelRadioButtonGroup';
import AreaRadioButtonGroup from './AreaRadioButtonGroup';

const ReviewCard = ({ item, onClick }) => {
  return (
    <div
      className="
      mt-6 bg-[#f5f5f5] w-full px-2.25 py-2.25 h-38 rounded-lg flex items-center cursor-pointer transition-colors"
      onClick={() => onClick(item)}
    >
      <div className="mx-0.75 my-0.75 w-32 h-32 flex items-center justify-center">
        <img src={item.imageSrc} alt="icon" className="bg-gray-300 w-32 h-32 rounded-lg" />
      </div>

      <div className="ROBOTO_FONTS w-full h-full ml-3 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>

        <div className="text-md flex flex-col space-y-2">
          <LevelRadioButtonGroup level={item.level} itemId={item.id} />
          <AreaRadioButtonGroup areas={item.areas} itemId={item.id} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
