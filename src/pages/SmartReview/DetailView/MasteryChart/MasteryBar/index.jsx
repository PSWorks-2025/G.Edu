import React from 'react';

const MasteryBar = ({ value, color }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="text-center mb-2">{value}</div>
      <div className="flex items-end h-full w-full justify-center">
        <div className={`w-28 ${color} rounded-sm`} style={{ height: `${value * 20}px` }}></div>
      </div>
    </div>
  );
};
export default MasteryBar;
