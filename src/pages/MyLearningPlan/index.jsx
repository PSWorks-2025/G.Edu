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
    <>
      <PageTitle>My Learning Plan</PageTitle>
      <ComponentTitle>Plan Your Success</ComponentTitle>
      <div className="bg-[#fbfbfb] rounded-lg py-4 px-4 mt-2 mb-8">
        <div className="flex flex-row justify-around gap-4 mt-4">
          <TargetScore
            value={data.targetScore}
            onChange={(value) => setData({ ...data, targetScore: value })}
          />
          <ExamDay
            value={data.examDate}
            onChange={(date) => setData({ ...data, examDate: date })}
          />
          <PreferredStudyTime
            value={data.studyTime}
            onChange={(time) => setData({ ...data, studyTime: time })}
          />
        </div>
        <div className="flex justify-center mt-8 mb-2">
          <button
            className="bg-black text-white px-8 py-3 rounded-lg font-medium w-full max-w-60"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <ComponentTitle >Material suggestion</ComponentTitle>
      <div className='mt-4'>
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
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="mt-2">
          <ComponentTitle>
            {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Material
          </ComponentTitle>
          <CardList cardData={currentTabData} />
        </div>
      </div>
    </>
  );
};

export default MyLearningPlan;
