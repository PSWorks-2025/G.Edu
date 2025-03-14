import React from 'react';

const MasteryBar = ({ maxValue, value, color }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="text-center mb-2">{value}</div>
      <div className="flex items-end h-full w-full justify-center">
        <div className={`w-32 ${color} rounded-lg`} style={{ height: `${value / maxValue * 10}rem` }}></div>
      </div>
    </div>
  );
};
export default MasteryBar;
