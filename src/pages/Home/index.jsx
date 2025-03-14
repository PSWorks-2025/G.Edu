import React, { useState } from 'react';
import './Home.css';
import { primaryColors } from '../../globalComponents/primaryColor/Colors';
import StudyTime from '../../globalComponents/study time/StudyTime';
import Deadline from '../../globalComponents/deadlines/deadline';
import Suggestions from '../../globalComponents/suggestions/Suggestions';
import { PageTitle } from '../../globalComponents2/Typography';
import PrimaryButton from '../../globalComponents2/Buttons';
import Tabs from '../../globalComponents2/Tabs';
import CardOverviewDeadline from '../../globalComponents2/CardOverviewDeadline';
import CardOverview from '../../globalComponents2/CardOverview';

const Home = () => {
  const examDate = '30/07/2025';
  const [remainingTime, setRemainingTime] = React.useState([]);

  React.useEffect(() => {
    const calculateRemainingTime = (examDate) => {
      const now = new Date();
      const exam = new Date(examDate.split('/').reverse().join('/'));
      const timeDifference = exam - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return [days, hours, minutes, seconds];
    };

    const updateRemainingTime = () => {
      setRemainingTime(calculateRemainingTime(examDate));
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [examDate]);
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="mt-20">
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
      {/* Goal and Count Down */}
      <div className="flex flex-row justify-between">
        {/* goal */}
        <div
          style={{
            height: 167,
            backgroundColor: primaryColors.white,
            borderRadius: 14,
            padding: 20,
          }}
          className="flex flex-row justify-between w-10/21"
        >
          <div>
            <h2
              style={{
                color: primaryColors.gray,
                fontSize: 16,
                fontWeight: 500,
              }}
              className="ROBOTO_FONTS"
            >
              Goal
            </h2>
            {/* Goal SAT's score */}
            <p
              style={{
                color: primaryColors.black,
                fontSize: 28,
                fontWeight: 700,
              }}
              className="ROBOTO_FONTS"
            >
              1550
            </p>
          </div>

          <div
            style={{
              backgroundColor: primaryColors.lightGreen,
              width: 60,
              height: 60,
              borderRadius: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ion-icon
              style={{ color: primaryColors.green, fontSize: 30 }}
              name="flag-outline"
            ></ion-icon>
          </div>
        </div>

        {/* count down */}
        <div
          style={{
            height: 167,
            backgroundColor: primaryColors.white,
            borderRadius: 14,
            padding: 20,
          }}
          className="flex flex-row justify-between w-10/21"
        >
          {/* count */}
          <div>
            <h2
              style={{
                color: primaryColors.gray,
                fontSize: 16,
                fontWeight: 500,
              }}
              className="ROBOTO_FONTS"
            >
              Day lefts
            </h2>
            <div
              style={{
                width: 122,
                height: 84,
                backgroundColor: '#F0F0F0',
                alignContent: 'center',
                justifyItems: 'center',
              }}
            >
              <h2
                style={{
                  color: primaryColors.black,
                  fontSize: 28,
                  fontWeight: 700,
                }}
                className="ROBOTO_FONTS translate-x-[-35%]"
              >
                {remainingTime[0]}
              </h2>
              <h3
                style={{
                  color: primaryColors.black,
                  fontSize: 20,
                  fontWeight: 700,
                  marginTop: -10,
                }}
                className="ROBOTO_FONTS"
              >{`${remainingTime[1]}:${remainingTime[2]}:${remainingTime[3]}`}</h3>
            </div>
          </div>

          {/* exam date */}
          <div>
            <h2
              style={{
                color: primaryColors.gray,
                fontSize: 16,
                fontWeight: 500,
              }}
              className="ROBOTO_FONTS"
            >
              Exam date
            </h2>
            <h3
              style={{
                color: primaryColors.black,
                fontSize: 20,
                fontWeight: 700,
              }}
              className="ROBOTO_FONTS"
            >
              {examDate}
            </h3>
          </div>

          {/* icon*/}
          <div
            style={{
              backgroundColor: primaryColors.lightGreen,
              width: 60,
              height: 60,
              borderRadius: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ion-icon
              style={{ color: primaryColors.green, fontSize: 30 }}
              name="reader-outline"
            ></ion-icon>
          </div>
        </div>
      </div>

      {/* Study time */}
      <StudyTime />

      {/* Deadlines */}
      <div
        className="mt-6"
        style={{
          backgroundColor: primaryColors.white,
          padding: 15,
          borderRadius: 14,
        }}
      >
        <h2 className="ROBOTO_FONTS" style={{ fontSize: 20, fontWeight: 500 }}>
          Upcoming deadlines
        </h2>
        <div className="mt-4">
          {/* ul deadline.map li */}
          <Deadline />
        </div>
      </div>

      {/* Material Suggestions */}
      <div
        className="mt-6"
        style={{
          backgroundColor: primaryColors.white,
          padding: 15,
          borderRadius: 14,
        }}
      >
        <h2 className="ROBOTO_FONTS" style={{ fontSize: 20, fontWeight: 500 }}>
          Let's cram more
        </h2>
        <div className="flex flex-row justify-between mt-4">
          <h2 className="ROBOTO_FONTS" style={{ fontSize: 18, fontWeight: 500 }}>
            Material suggestions
          </h2>
          <h2
            style={{ color: primaryColors.blue, fontSize: 16, fontWeight: 400 }}
            className="ROBOTO_FONTS"
          >
            See more {'>'}
          </h2>
        </div>
        <div className="mt-4">
          {/* ul suggestions.map li  data limit 6*/}
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;
