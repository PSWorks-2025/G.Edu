import React from 'react';

const TargetScore = ({ value, onChange }) => {
  return (
    <div className="flex flex-col grow">
      <label className="text-gray-700 font-medium mb-2">Target score *</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="1500"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-72"
      />
    </div>
  );
};

export default TargetScore;
