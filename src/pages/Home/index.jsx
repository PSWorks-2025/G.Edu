import React, { useEffect } from 'react';
import './Home.css';
import { primaryColors } from '../../utils/primaryColor/Colors';
import StudyTime from './StudyTime';
import Deadline from './DeadlinesList';
import Suggestions from './SuggestionList';
import DeadlineCard from './DeadlinesList/DeadlineCard';
import DeadlineList from './DeadlinesList';
import SuggestionsList from './SuggestionList';
import CardList from '../../globalComponents/CardList';

const Home = () => {
  const examDate = '30/07/2025';
  const [remainingTime, setRemainingTime] = React.useState([]);
  const [showAllSuggestions, setShowAllSuggestions] = React.useState(false);
  
  const data = []
  useEffect(()=> {
    // fetch(/)
  })

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

  // Add a useEffect to manage z-index during scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        document.body.classList.add('is-scrolling');
      } else {
        document.body.classList.remove('is-scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="dashboard-content mt-20">
      {data && <CardList />}
      <h1 className="font-bold NUNITO_SANS text-[32px]">Dashboard</h1>

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
              >
                <span>{remainingTime[1]}:</span>
                {remainingTime[2]}:{remainingTime[3]}
              </h3>
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
      <DeadlineList />

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
          <button
            onClick={() => setShowAllSuggestions(!showAllSuggestions)}
            style={{ color: primaryColors.blue, fontSize: 16, fontWeight: 400 }}
            className="ROBOTO_FONTS"
          >
            {showAllSuggestions ? 'Show less' : 'See more >'}
          </button>
        </div>
        <div className="mt-4">
          {/* ul suggestions.map li  data limit 6*/}
          <SuggestionsList showAll={showAllSuggestions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
