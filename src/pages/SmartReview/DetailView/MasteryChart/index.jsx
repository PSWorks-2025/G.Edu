import React from 'react';
import MasteryBar from './MasteryBar';

const MasteryChart = ({ mastery }) => {
  const forget = mastery?.forget || 0;
  const soSo = mastery?.so_so || 0;
  const remembered = mastery?.remembered || 0;

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex h-48 mb-2">
        <MasteryBar value={forget} color="bg-red-500" />
        <MasteryBar value={soSo} color="bg-blue-500" />
        <MasteryBar value={remembered} color="bg-green-500" />
      </div>

      <div className="flex">
        <div className="flex-1 text-center">Forget</div>
        <div className="flex-1 text-center">So-so</div>
        <div className="flex-1 text-center">Remembered</div>
      </div>
    </div>
  );
};

export default MasteryChart;
