import React, { useState, useEffect } from 'react';
import Tabs from '../../globalComponents/Tabs';
import {
  PageTitle,
  ComponentTitle,
  SubtleText,
  RegularText,
} from '../../globalComponents/Typography';
import './MyLearningPlan.css';
import CardList from '../../globalComponents/CardList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  cardDataVerbal,
  cardDataMath,
  cardDataVocab,
  cardDataTips,
  exampleCardListData,
} from './mockdata';
// import PrimaryButton from '../../globalComponents/Button';

const MyLearningPlan = () => {
  const [selectedTab, setSelectedTab] = useState('verbal');
  const [targetScore, setTargetScore] = useState('');
  const [examDate, setExamDate] = useState(new Date());
  const [studyTime, setStudyTime] = useState({ start: '00:00', end: '23:59' });
  const [currentTabData, setCurrentTabData] = useState([]);
  const [completionRate, setCompletionRate] = useState(69);
  const handleClick = () => {
    console.log('Save button clicked!');
    alert('Data saved!');
  };
  const tabOptions = [
    { id: 'verbal', label: 'Verbal' },
    { id: 'math', label: 'Math' },
    { id: 'vocab', label: 'Vocab' },
    { id: 'tips/other', label: 'Tips/Other' },
  ];

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  useEffect(() => {
    if (selectedTab === 'verbal') {
      setCurrentTabData(cardDataVerbal);
    } else if (selectedTab === 'math') {
      setCurrentTabData(cardDataMath);
    } else if (selectedTab === 'vocab') {
      setCurrentTabData(cardDataVocab);
    } else if (selectedTab === 'tips/other') {
      setCurrentTabData(cardDataTips);
    }
  }, [selectedTab]);

  return (
    <div className="p-6 bg-gray-50">
      <PageTitle>My Learning Plan</PageTitle>

      <div className="mt-4 mb-8">
        <ComponentTitle> Plan Your Success</ComponentTitle>

        <div className="flex flex-col space-y-6 mt-6">
          <div className="flex flex-wrap justify-between gap-4">
            {/* Target Score */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Target score *</label>
              <input
                type="text"
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                placeholder="1500"
                className="border border-gray-300 rounded-lg px-4 py-2 w-72"
              />
            </div>

            {/* Exam Day */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Exam day *</label>
              <div className="relative">
                <DatePicker
                  selected={examDate}
                  onChange={(date) => setExamDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-72 pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="15"
                      rx="2"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path d="M3 10H21" stroke="black" strokeWidth="2" />
                    <path d="M8 3V7" stroke="black" strokeWidth="2" />
                    <path d="M16 3V7" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preferred Study Time */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Preferred Study Time *</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-72">
                <input
                  type="time"
                  value={studyTime.start}
                  onChange={(e) => setStudyTime({ ...studyTime, start: e.target.value })}
                  className="w-full text-center"
                />
                <span className="mx-2">-</span>
                <input
                  type="time"
                  value={studyTime.end}
                  onChange={(e) => setStudyTime({ ...studyTime, end: e.target.value })}
                  className="w-full text-center"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            {/* <PrimaryButton>Another Button</PrimaryButton> */}
            <button
              className="bg-black text-white px-8 py-3 rounded-lg font-medium"
              onClick={handleClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ComponentTitle className="margin-bottom-8">Material Suggestion</ComponentTitle>
        <RegularText className="margin-bottom-16">Current level: Medium (1110 - 1250)</RegularText>
        <SubtleText>
          Lorem ipsum dolor sit amet consectetur. Phasellus ullamcorper consequat sit eu velit nisi.
          Facilisis volutpat sit odio est eu elit sed sit pellentesque. Fusce tincidunt ac odio
          velit at rhoncus ornare libero. Lectus vel quis mauris platea convallis mauris ornare. Sed
          egestas vehicula arcu commodo senectus id faucibus enim.
        </SubtleText>
      </div>
      <div className="mt-8">
        <Tabs selectedTab={selectedTab} tabs={tabOptions} onTabChange={handleTabChange} />
        <CardList cardData={currentTabData} title="Material Suggestion" />
        <CardList cardData={Object.values(exampleCardListData)} title="Usage showcase" />
      </div>
    </div>
  );
};

export default MyLearningPlan;
