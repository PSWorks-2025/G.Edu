import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './CardList';
import CardDetail from './CardDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/card-detail/:id" element={<CardDetail />} />
    </Routes>
  );
}

export default App;
