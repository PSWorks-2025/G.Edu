import React, { useState } from 'react';

import { BoldText, RegularText } from '../../Typography';
import Header from '../Header'

const learningContents = await fetch('/learning_contents.json').then((res) => res.json());

const Exercise = ({ id }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedAns, setSelectedAns] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const learningContent = learningContents.find(
    (content) => `${content.learning_content_id}` === id
  );

  return (
    <div className="w-full h-128 bg-white rounded-lg flex flex-col p-6">
      <Header
        totalQuestions={learningContent.detail_content.length}
        currentQuestionIndex={currentQuestionIndex}
      />
      <div className="mt-8 w-full text-center">
        <RegularText>{`${currentQuestionIndex}. ${
          learningContent.detail_content[currentQuestionIndex - 1].question
        }`}</RegularText>
      </div>
      <div className="mt-12 w-full flex flex-row justify-around">
        <button
          onClick={() => !isChecked && setSelectedAns('A')}
          className={`w-112 border-3 transition-all cursor-pointer h-full p-4 rounded-lg ${
            selectedAns === 'A' ? 'bg-black text-white' : 'bg-[#f0f0f0]'
          } ${
            isChecked
              ? learningContent.detail_content[currentQuestionIndex - 1].answer === 'A'
                ? 'border-[#3edb41]'
                : selectedAns === 'A'
                ? 'border-[#e5484d]'
                : 'border-[#f0f0f0]'
              : selectedAns === 'A'
              ? 'border-black'
              : 'border-[#f0f0f0]'
          } flex flex-row space-x-2`}
        >
          <BoldText>A</BoldText>
          <RegularText>
            {learningContent.detail_content[currentQuestionIndex - 1].options[0]}
          </RegularText>
        </button>
        <button
          onClick={() => !isChecked && setSelectedAns('B')}
          className={`w-112 border-3 transition-all cursor-pointer h-full p-4 rounded-lg ${
            selectedAns === 'B' ? 'bg-black text-white' : 'bg-[#f0f0f0]'
          } ${
            isChecked
              ? learningContent.detail_content[currentQuestionIndex - 1].answer === 'B'
                ? 'border-[#3edb41]'
                : selectedAns === 'B'
                ? 'border-[#e5484d]'
                : 'border-[#f0f0f0]'
              : selectedAns === 'B'
              ? 'border-black'
              : 'border-[#f0f0f0]'
          } flex flex-row space-x-2`}
        >
          <BoldText>B</BoldText>
          <RegularText>
            {learningContent.detail_content[currentQuestionIndex - 1].options[1]}
          </RegularText>
        </button>
      </div>
      <div className="mt-8 w-full flex flex-row justify-around">
        <button
          onClick={() => !isChecked && setSelectedAns('C')}
          className={`w-112 border-3 transition-all cursor-pointer h-full p-4 rounded-lg ${
            selectedAns === 'C' ? 'bg-black text-white' : 'bg-[#f0f0f0]'
          } ${
            isChecked
              ? learningContent.detail_content[currentQuestionIndex - 1].answer === 'C'
                ? 'border-[#3edb41]'
                : selectedAns === 'C'
                ? 'border-[#e5484d]'
                : 'border-[#f0f0f0]'
              : selectedAns === 'C'
              ? 'border-black'
              : 'border-[#f0f0f0]'
          } flex flex-row space-x-2`}
        >
          <BoldText>C</BoldText>
          <RegularText>
            {learningContent.detail_content[currentQuestionIndex - 1].options[2]}
          </RegularText>
        </button>
        <button
          onClick={() => !isChecked && setSelectedAns('D')}
          className={`w-112 border-3 transition-all cursor-pointer h-full p-4 rounded-lg ${
            selectedAns === 'D' ? 'bg-black text-white' : 'bg-[#f0f0f0]'
          } ${
            isChecked
              ? learningContent.detail_content[currentQuestionIndex - 1].answer === 'D'
                ? 'border-[#3edb41]'
                : selectedAns === 'D'
                ? 'border-[#e5484d]'
                : 'border-[#f0f0f0]'
              : selectedAns === 'D'
              ? 'border-black'
              : 'border-[#f0f0f0]'
          } flex flex-row space-x-2`}
        >
          <BoldText>D</BoldText>
          <RegularText>
            {learningContent.detail_content[currentQuestionIndex - 1].options[3]}
          </RegularText>
        </button>
      </div>
      <div className="mt-4 w-full h-8 flex flex-row items-center justify-center">
        {isChecked ? (
          selectedAns === learningContent.detail_content[currentQuestionIndex - 1].answer ? (
            <RegularText className="text-[#3edb41]">{selectedAns} is correct!</RegularText>
          ) : (
            <RegularText className="text-[#e5484d]">{selectedAns} is incorrect!</RegularText>
          )
        ) : null}
      </div>
      <div className="mt-4 w-full flex flex-row justify-center space-x-8">
        {isChecked ? (
          currentQuestionIndex < learningContent.detail_content.length ? (
            <button
              className="bg-black transition-all text-white rounded-lg px-11 py-3"
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAns('');
                setIsChecked(false);
              }}
            >
              <BoldText>Next</BoldText>
            </button>
          ) : (
            <button
              className="bg-black transition-all text-white rounded-lg px-11 py-3"
              onClick={() => {}}
            >
              <BoldText>Done</BoldText>
            </button>
          )
        ) : (
          <button
            className="bg-[#3edb41] disabled:bg-gray-300 transition-all text-white rounded-lg px-11 py-3"
            onClick={() => {
              setIsChecked(true);
            }}
            disabled={selectedAns === ''}
          >
            <BoldText>Check</BoldText>
          </button>
        )}
      </div>
    </div>
  );
};

export default Exercise;
