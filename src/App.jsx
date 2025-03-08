import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyLearningPlan from "./pages/MyLearningPlan/MyLearningPlan";
import Assignment from "./pages/Assignment/Assignment";
import SmartReview from "./pages/SmartReview/SmartReview";
import AITutor from "./pages/AITutor/AITutor";
import Notebook from "./pages/Notebook/Notebook";
import LearningResources from "./pages/LearningResources/LearningResources";
import HallOfFame from "./pages/HallOfFame/HallOfFame";
import Notification from "./pages/Notification/Notification";
import SideNav from "./components/SideNav/SideNav";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <h1>Hi</h1>
      <div className="app">
        <TopBar />
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
              <Route
                path="/learning-resources"
                element={<LearningResources />}
              />
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
