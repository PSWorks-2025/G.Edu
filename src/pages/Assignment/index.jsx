import React, { useState } from 'react';
import './Assignment.css';

import { PageTitle, ComponentTitle } from '../../globalComponents/Typography';
import Tabs from '../../globalComponents/Tabs';
import CardList from '../../globalComponents/CardList';
import { IoChevronBackOutline } from 'react-icons/io5';

const assignmentsData = await fetch('/learning_contents_improved.json').then(res => res.json())

const AssignmentFlashCard = () => {
  const [currentTab, setCurrentTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'overdue', label: 'Overdue' },
    { id: 'todo', label: 'To do' },
  ];

  const assignments = Object.values(assignmentsData);

  return (
    <div className="mt-4">
      <PageTitle>Assignment</PageTitle>

      <Tabs tabs={tabs} selectedTab={currentTab} onTabChange={setCurrentTab} />

      <CardList cardData={assignments} />

    </div>
  );
};

export default AssignmentFlashCard;
