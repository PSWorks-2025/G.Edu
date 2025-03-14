import React, { useState } from 'react';
import { primaryColors } from '../../../utils/primaryColor/Colors';
import DeadlineCard from './DeadlineCard';

function DeadlineList() {
  const [showAllDeadline, setShowAllDeadline] = useState(false);
  return (
    <div
      className="mt-6"
      style={{
        backgroundColor: primaryColors.white,
        padding: 15,
        borderRadius: 14,
      }}
    >
      <h2 className="ROBOTO_FONTS flex justify-between" style={{ fontSize: 20, fontWeight: 500 }}>
        Upcoming deadlines
        <button
          onClick={() => setShowAllDeadline(!showAllDeadline)}
          style={{ color: primaryColors.blue, fontSize: 16, fontWeight: 400 }}
          className="ROBOTO_FONTS"
        >
          {showAllDeadline ? 'Show less' : 'See more >'}
        </button>
      </h2>
      <div className="mt-4">
        {showAllDeadline
          ? [...Array(8)].map((_, index) => <DeadlineCard key={index} id={index} />)
          : [...Array(4)].map((_, index) => <DeadlineCard key={index} id={index} />)}
      </div>
    </div>
  );
}

export default DeadlineList;
