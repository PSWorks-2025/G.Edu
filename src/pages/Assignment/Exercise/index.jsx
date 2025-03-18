import React from 'react';
import '../Assignment.css';

import { useSearchParams } from 'react-router-dom';
import { PageTitle, ComponentTitle } from '../../../globalComponents/Typography';
import Exercise from '../../../globalComponents/FlashCardnExercise/Exercise';
import { IoChevronBackOutline } from 'react-icons/io5';

const AssignmentExercise = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="mt-4">
      <PageTitle>Assignment</PageTitle>

      <div className="flex items-center mb-6">
        <button
          
          className="mr-2 text-xl font-semibold flex items-center space-x-2"
        >
          <IoChevronBackOutline />
          <ComponentTitle>Lesson name</ComponentTitle>
        </button>
      </div>

      <Exercise id={id} />

    </div>
  );
};

export default AssignmentExercise;