import React from 'react';

import { FaRegClock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { BoldText, RegularText } from '../../Typography';

const Header = ({ totalQuestions, currentQuestionIndex }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between">
      <div className="w-40">
        <div className="w-fit text-center h-10.5 flex flex-col justify-between">
          <RegularText>Number of questions:</RegularText>
          <BoldText>
            {currentQuestionIndex}/{totalQuestions}
          </BoldText>
        </div>
      </div>
      <div className="w-7/12 flex flex-row space-x-4">
        <div className="w-full h-6 rounded-full bg-[#f0f0f0]">
          <div
            className="h-full rounded-full bg-[#d9d9d9] transition-all duration-700"
            style={{ width: `${(currentQuestionIndex / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <div className="h-6 text-xl flex flex-row items-center">
          <FaRegClock />
        </div>
      </div>
      <div className="w-40">
        <button
          onClick={() => navigate('/assignment')}
          className="float-right bg-[#e5484d] text-white rounded-lg px-11 py-3"
        >
          <BoldText>Exit</BoldText>
        </button>
      </div>
    </div>
  );
};

export default Header;
