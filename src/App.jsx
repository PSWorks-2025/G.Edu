import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyLearningPlan from './pages/MyLearningPlan/';
import Assignment from './pages/Assignment/';
import SmartReview from './pages/SmartReview/';
import AITutor from './pages/AITutor/';
import Notebook from './pages/Notebook/';
import LearningResources from './pages/LearningResources/';
import HallOfFame from './pages/HallOfFame/';
import Notification from './pages/Notification/';
import SideNav from './globalComponents/SideNav/';
import TopBar from './globalComponents/TopBar/';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath);

    const pathToTab = {
      '/home': 'Home',
      '/my-learning-plan': 'MyLearningPlan',
      '/assignment': 'Assignment',
      '/smart-review': 'SmartReview',
      '/ai-tutor': 'AITutor',
      '/notebook': 'Notebook',
      '/learning-resources': 'LearningResources',
      '/hall-of-fame': 'HallOfFame',
      '/notification': 'Notification',
    };
    setActiveTab(pathToTab[currentPath] || 'Home');
  }, []);

  return (
    <>
      <div className="app">
        {/* <TopBar /> */}
        <div className="content-container">
          <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/my-learning-plan" element={<MyLearningPlan />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/smart-review" element={<SmartReview />} />
              <Route path="/ai-tutor" element={<AITutor />} />
              <Route path="/notebook" element={<Notebook />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/notification" element={<Notification />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
