// Import dependencies
import React, { useState, useEffect } from 'react';
import Tabs from '../../globalComponents/Tabs';
import { PageTitle, ComponentTitle } from '../../globalComponents/Typography';
import './MyLearningPlan.css';
import CardList from '../../globalComponents/CardList';
import TargetScore from './TargetScore';
import ExamDay from './ExamDay';
import PreferredStudyTime from './PreferredStudyTime';

const MyLearningPlan = () => {
  const [selectedTab, setSelectedTab] = useState('verbal');
  const [data, setData] = useState({
    targetScore: '',
    examDate: new Date(),
    studyTime: { start: '00:00', end: '23:59' },
  });
  const [currentTabData, setCurrentTabData] = useState([]);

  // Fetch Data from JSON
  useEffect(() => {
    fetch('/src/pages/MyLearningPlan/mockdata.json')
      .then((res) => res.json())
      .then((jsonData) => {
        setCurrentTabData(jsonData[selectedTab] || []);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [selectedTab]);

  // Save function
  const handleSave = () => {
    localStorage.setItem('learningPlan', JSON.stringify(data));
    alert('Data saved locally!');
  };

  return (
    <div className="p-6 bg-gray-50">
      <PageTitle>My Learning Plan</PageTitle>
      <ComponentTitle>Plan Your Success</ComponentTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TargetScore
          value={data.targetScore}
          onChange={(value) => setData({ ...data, targetScore: value })}
        />
        <ExamDay value={data.examDate} onChange={(date) => setData({ ...data, examDate: date })} />
        <PreferredStudyTime
          value={data.studyTime}
          onChange={(time) => setData({ ...data, studyTime: time })}
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-black text-white px-8 py-3 rounded-lg font-medium"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      <Tabs
        selectedTab={selectedTab}
        tabs={[
          { id: 'verbal', label: 'Verbal' },
          { id: 'math', label: 'Math' },
          { id: 'vocab', label: 'Vocab' },
          { id: 'tips', label: 'Tips/Other' },
        ]}
        onTabChange={setSelectedTab}
      />
      <div className="mt-8">
        <ComponentTitle>
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Material
        </ComponentTitle>
        <CardList cardData={currentTabData} />
      </div>
    </div>
  );
};

export default MyLearningPlan;
