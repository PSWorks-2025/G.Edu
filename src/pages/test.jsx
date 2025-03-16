import React, { useState, useEffect } from 'react';
import { PageTitle } from '../globalComponents2/Typography';
import PrimaryButton from '../globalComponents2/Buttons';
import Tabs from '../globalComponents2/Tabs';
import CardOverviewDeadline from '../globalComponents2/CardOverviewDeadline';
import CardOverview from '../globalComponents2/CardOverview';
import ChatbotBox from '../globalComponents/ChatbotBox';

const Test = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

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
      <CardOverviewDeadline
        title="Name"
        description="Lorem ipsum dolor sit"
        deadline="12/2/2012"
        alertText="Due soon"
        link="/home"
      />

      {/* Another example without deadline and alert */}
      <CardOverviewDeadline title="Task B" description="Another task description" />
      <CardOverview
        title="Article Title"
        subtitle="Short description of the content"
        date="12/12/2021"
        link="/home"
      />

      <PrimaryButton onClick={() => alert('Button Clicked!')}>Learn now</PrimaryButton>
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

export default Test;
