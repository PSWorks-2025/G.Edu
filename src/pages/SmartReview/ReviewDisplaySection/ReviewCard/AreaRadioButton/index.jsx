import React from 'react';

const AreaRadioButton = ({ area, selected, itemId }) => {
  return (
    <label className="flex items-center">
      <input type="radio" name={`area-${itemId}`} checked={selected} readOnly className="mr-1" />
      <span className="text-sm">{area}</span>
    </label>
  );
};

export default AreaRadioButton;
