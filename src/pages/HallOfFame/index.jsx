import React from 'react';
import './HallOfFame.css';

import { PageTitle } from '../../globalComponents/Typography';
import Leaderboard from './Leaderboard';

const HallOfFame = () => {
  return (
    <div className="mt-4">
      <PageTitle className='lg:text-[32px] md:text-[28px] sm:text-2xl text-[20px]'>Hall of Fame</PageTitle>
      <Leaderboard />
    </div>
  );
};

export default HallOfFame;
