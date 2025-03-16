import React, { useState, useEffect } from 'react';
import { PageTitle } from '../globalComponents2/Typography';
import PrimaryButton from '../globalComponents2/Buttons';
import Tabs from '../globalComponents2/Tabs';
import CardOverview from '../globalComponents2/CardOverview';
import CardList from '../globalComponents2/CardList';
import CardThumbnail from '../globalComponents2/CardThumbnail';
import ChatbotBox from '../globalComponents/ChatbotBox';
import CardDetail from '../globalComponents2/CardDetailComponent';

const Test = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [learningContents, setLearningContents] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [learningContentsData, studentData] = await Promise.all([
          fetch('learning_contents.json').then((res) => res.json()),
          fetch('student_data_improved.json').then((res) => res.json()),
        ]);
        setLearningContents(learningContentsData);
        setStudentData(studentData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const getLevel = () => ['Foundation', 'Medium', 'Advanced', 'Exam-ready'][0];

  if (loading)
    return <div className="flex items-center justify-center p-8">Loading smart review data...</div>;
  if (!studentData || !learningContents.length)
    return <div className="flex items-center justify-center p-8">No review data available.</div>;

  const reviewSecatItems = studentData.student_smart_review
    .map(({ learning_content_id, next_review_date, mastery_levels }) => {
      const content = learningContents.find(
        ({ learning_content_id: id }) => id === learning_content_id
      );
      return (
        content && {
          id: content.learning_content_id,
          title: content.title,
          description: content.description,
          areas: content.areas,
          type: content.type,
          level: getLevel(),
          nextReviewDate: new Date(next_review_date),
          mastery: mastery_levels,
        }
      );
    })
    .filter(Boolean);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'settings', label: 'Settings' },
  ];
  return (
    <>
      <PageTitle>This page is for testing purpose</PageTitle>
      <ChatbotBox />
      {/* Reusable Tabs Component */}
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        tabClassName="border-b pb-2"
        activeTabClassName="bg-blue-600 text-white"
        inactiveTabClassName="bg-gray-300 text-gray-800"
      />

      {/* Tab Content */}
      <div className="mt-4">
        {selectedTab === 'overview' ? (
          <div>
            <h2 className="text-xl font-bold">User Overview</h2>
            <p className="text-gray-700 mt-2">Welcome to your profile overview.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Settings</h2>
            <p className="text-gray-700 mt-2">Adjust your account settings here.</p>
          </div>
        )}
      </div>

      {/* <h1 className="font-bold NUNITO_SANS text-[32px]">Dashboard</h1> */}
      {/* <CardOverviewDeadline
        title="Name"
        description="Lorem ipsum dolor sit"
        deadline="12/2/2012"
        alertText="Due soon"
        link="/home"
      /> */}

      {/* Another example without deadline and alert */}
      {/* <CardOverviewDeadline title="Task B" description="Another task description" /> */}
      <CardThumbnail
        title="Article Title"
        subtitle="Short description of the content"
        date="12/12/2021"
        link="/home"
      />
      <CardList cardData={reviewSecatItems} title="Cards" width="50rem" />
      {/* <CardDetail /> */}

      <PrimaryButton onClick={() => alert('Button Clicked!')}>Learn now</PrimaryButton>
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

export default Test;
