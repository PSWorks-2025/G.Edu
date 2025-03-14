import React from 'react';
import MasteryBar from './MasteryBar';
import { max } from 'lodash';

const MasteryChart = ({ mastery }) => {
  const forget = mastery.forget || 0;
  const soSo = mastery.so_so || 0;
  const remembered = mastery.remembered || 0;

  return (
    <div className="bg-white p-6 rounded-lg w-132">
      <div className="flex h-48 mb-2">
        <MasteryBar
          maxValue={max([forget, soSo, remembered])}
          value={forget}
          color="bg-[#e5484d]"
        />
        <MasteryBar maxValue={max([forget, soSo, remembered])} value={soSo} color="bg-[#4880ff]" />
        <MasteryBar
          maxValue={max([forget, soSo, remembered])}
          value={remembered}
          color="bg-[#30a46c]"
        />
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
