import React from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';
import { ComponentTitle } from '../../globalComponents/Typography';
import FlashCard from '../../globalComponents/FlashCardAndExercise/FlashCard';
import { IoChevronBackOutline } from 'react-icons/io5';

const AssignmentFlashCard = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/assignment')}
          className="mr-2 text-xl font-semibold flex items-center space-x-2"
        >
          <IoChevronBackOutline />
          <ComponentTitle>Lesson name</ComponentTitle>
        </button>
      </div>

      <FlashCard id={id} />
    </div>
  );
};

export default AssignmentFlashCard;
