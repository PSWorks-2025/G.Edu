import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyLearningPlan from './pages/MyLearningPlan/';
import Assignment from './pages/Assignment/';
import AssignmentFlashCard from './pages/Flashcard';
import AssignmentExercise from './pages/Exercise';
import SmartReview from './pages/SmartReview/';
import AITutor from './pages/AITutor/';
import Notebook from './pages/Notebook/';
import LearningResources from './pages/LearningResources/';
import HallOfFame from './pages/HallOfFame/';
import Notification from './pages/Notification/';
import SideNav from './globalComponents/SideNav/';
import TopBar from './globalComponents/TopBar/';
import CardDetail from './globalComponents/RenderCard/RenderCardDetail';
import NotebookContent from './pages/Notebook/NoteContent';
import Tabs from './globalComponents/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();
  const [enableTakeNote, setEnableTakeNote] = useState(false);
  const popUpRef = useRef();
  const filters = [
    { id: 'Common Errors', label: 'Common Errors' },
    { id: 'Reading', label: 'Reading' },
    { id: 'Math', label: 'Math' },
    { id: 'Practice Mistakes', label: 'Practice Mistakes' },
    { id: 'Tips', label: 'Tips' },
  ];
  const [selectedTab, setSelectedTab] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;

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

    if (currentPath.startsWith('/notebook/')) {
      setActiveTab('Notebook');
    } else {
      setActiveTab(pathToTab[currentPath] || 'Home');
    }
  }, [location.pathname]);

  const toggleNotebook = () => {
    setEnableTakeNote(!enableTakeNote);
  };

  const handleClickOutside = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      setEnableTakeNote(false);
    }
  };

  const handleSave = () => {
    alert('Saved');
    setTitle('');
    setDescription('');
    setEnableTakeNote(false);
    setSelectedTab();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="app">
        <div className="content-container">
          <SideNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            enableTakeNote={enableTakeNote}
            toggleNotebook={toggleNotebook}
          />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/my-learning-plan" element={<MyLearningPlan />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/flashcard" element={<AssignmentFlashCard />} />
              <Route path="/exercise" element={<AssignmentExercise />} />
              <Route path="/smart-review" element={<SmartReview />} />
              <Route path="/ai-tutor" element={<AITutor />} />
              <Route path="/notebook" element={<Notebook />} />
              <Route path="/notebook/:id" element={<NotebookContent />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/card-detail" element={<CardDetail />} />
            </Routes>
          </main>

          {enableTakeNote && (
            <div
              ref={popUpRef}
              className="w-[640px] h-[311px] rounded-[14px] mt-2 absolute translate-x-[120%] translate-y-[25%] p-4 shadow-2xl z-2"
              style={{ backgroundColor: '#FFF' }}
            >
              <div className="">
                <Tabs tabs={filters} selectedTab={selectedTab} onTabChange={setSelectedTab} />
              </div>

              <input
                placeholder="Title..."
                style={{ fontWeight: 700, fontSize: 16 }}
                className="ROBOTO_FONTS w-full focus:border-0 focus:outline-0 placeholder:text-gray-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Description"
                style={{ fontSize: 14, fontWeight: 400 }}
                className="ROBOTO_FONTS w-full h-[53%] focus:border-0 focus:outline-0 overflow-hidden resize-none placeholder:text-gray-300"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleSave}
                  className="relative w-[80px] h-[40px] rounded-lg bg-black text-white text-sm hover:bg-black-100 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
