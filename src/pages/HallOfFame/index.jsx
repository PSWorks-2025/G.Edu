import React from 'react';
import './HallOfFame.css';
import HallOfFameViewOptions from './HallOfFameViewOptions';
import Leaderboard from './Leaderboard';

const HallOfFame = () => {
  return (
    <div className="page">
      <h1>Hall of Fame Page</h1>
      <HallOfFameViewOptions />
      <Leaderboard />
    </div>
  );
};

export default HallOfFame;
