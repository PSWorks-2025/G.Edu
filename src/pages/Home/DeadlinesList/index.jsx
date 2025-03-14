import React from 'react';
import { primaryColors } from '../primaryColor/Colors';
import DeadlineCard from './DeadlineCard';

function DeadlineList() {
  return (
    <div
      className="mt-6"
      style={{
        backgroundColor: primaryColors.white,
        padding: 15,
        borderRadius: 14,
      }}
    >
      <h2 className="ROBOTO_FONTS" style={{ fontSize: 20, fontWeight: 500 }}>
        Upcoming deadlines
      </h2>
      <div className="mt-4">
        {/* ul deadline.map li */}
        <DeadlineCard />
        <DeadlineCard />
        <DeadlineCard />
        <DeadlineCard />
      </div>
    </div>
  );
}

export default DeadlineList;
