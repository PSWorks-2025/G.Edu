import React from 'react';
import './AITutor.css';
import ChatbotBox from '../../globalComponents/ChatbotBox';
import { PageTitle } from '../../globalComponents2/Typography';

const AITutor = () => {
  return (
    <div className="mt-10">
      <PageTitle>AI Tutor</PageTitle>
      <ChatbotBox />
    </div>
  );
};

export default AITutor;
