import React from 'react';
import './HallOfFame.css';

import { PageTitle } from '../../globalComponents/Typography';
import Leaderboard from './Leaderboard';

const HallOfFame = () => {
  return (
    <div className="mt-4">
      <PageTitle>Hall of Fame</PageTitle>
      <Leaderboard />
    </div>
  );
};

export default HallOfFame;
