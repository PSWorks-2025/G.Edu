import React, { useState } from 'react';
import './HallOfFame.css';
import Leaderboard from './Leaderboard';

const HallOfFame = () => {
  return (
    <div className="page">
      <h1>Hall of Fame Page</h1>
      <Leaderboard />
    </div>
  );
};

export default HallOfFame;
