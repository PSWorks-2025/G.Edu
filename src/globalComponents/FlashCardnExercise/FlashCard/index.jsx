import React, { useState } from 'react';

import { BoldText, RegularText } from '../../Typography';
import Header from '../Header'

const learningContents = await fetch('/learning_contents.json').then((res) => res.json());

const FlashCard = ({ id }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [flipSide, setFlipSide] = useState('front');

  const learningContent = learningContents.find(
    (content) => `${content.learning_content_id}` === id
  );

  return (
    <div className="w-full h-128 bg-white rounded-lg flex flex-col p-6">
      <Header
        totalQuestions={learningContent.detail_content.length}
        currentQuestionIndex={currentQuestionIndex}
      />
      <div className="mt-4 w-full h-86 flex flex-row justify-center">
        <div
          className={`relative w-136 h-full transition-transform duration-1000 transform-3d perspective-midrange ${
            flipSide === 'front' ? '' : 'rotate-y-180'
          }`}
          onClick={() => setFlipSide(flipSide === 'front' ? 'back' : 'front')}
        >
          <div className="absolute bg-[#f9f9f9] backface-hidden w-full h-full flex items-center justify-center rounded-lg">
            <RegularText>
              {learningContent.detail_content[currentQuestionIndex - 1].prompt}
            </RegularText>
          </div>
          <div className="absolute bg-[#f9f9f9] backface-hidden w-full h-full flex items-center justify-center rounded-lg rotate-y-180">
            <RegularText>
              {learningContent.detail_content[currentQuestionIndex - 1].information}
            </RegularText>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-row justify-center space-x-8">
        <button
          className="bg-black disabled:bg-gray-300 transition-all duration-700 text-white rounded-lg px-11 py-3"
          onClick={() => {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setFlipSide('front');
          }}
          disabled={currentQuestionIndex <= 1}
        >
          <BoldText>Back</BoldText>
        </button>
        <button
          className="bg-black disabled:bg-gray-300 transition-all duration-700 text-white rounded-lg px-11 py-3"
          onClick={() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setFlipSide('front');
          }}
          disabled={currentQuestionIndex >= learningContent.detail_content.length}
        >
          <BoldText>Next</BoldText>
        </button>
      </div>
    </div>
  );
};

export default FlashCard;
