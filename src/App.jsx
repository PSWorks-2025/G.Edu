import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyLearningPlan from './pages/MyLearningPlan/MyLearningPlan';
import Assignment from './pages/Assignment/Assignment';
import SmartReview from './pages/SmartReview/SmartReview';
import AITutor from './pages/AITutor/AITutor';
import Notebook from './pages/Notebook/Notebook';
import LearningResources from './pages/LearningResources/LearningResources';
import HallOfFame from './pages/HallOfFame/HallOfFame';
import Notification from './pages/Notification/Notification';
import SideNav from './globalComponents/SideNav/SideNav';
import TopBar from './globalComponents/TopBar/TopBar';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
      <div className="app">
        <TopBar />
        <div className="content-container">
          <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/MyLearningPlan" element={<MyLearningPlan />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/SmartReview" element={<SmartReview />} />
              <Route path="/AiTutor" element={<AITutor />} />
              <Route path="/Notebook" element={<Notebook />} />
              <Route path="/LearningResources" element={<LearningResources />} />
              <Route path="/HallOfFame" element={<HallOfFame />} />
              <Route path="/Notification" element={<Notification />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
