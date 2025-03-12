import React from 'react';

const LevelRadioButton = ({ level, selected, itemId }) => {
  return (
    <label className="flex items-center">
      <input type="radio" name={`level-${itemId}`} checked={selected} readOnly className="mr-1" />
      <span className="text-sm">{level}</span>
    </label>
  );
};

export default LevelRadioButton;
