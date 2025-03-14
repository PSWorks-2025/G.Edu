import React from 'react';
import MasteryChart from './MasteryChart';
import { IoChevronBackOutline } from 'react-icons/io5';

const DetailView = ({ review, onClose }) => {
  return (
    <div className="absolute inset-0 bg-[#f5f5f5] z-50 overflow-y-auto ">
      <div className="flex items-center mb-6">
        <button
          onClick={onClose}
          className="mr-2 text-xl font-semibold flex items-center space-x-2"
        >
          <IoChevronBackOutline />
          <h3>{review.title}</h3>
        </button>
      </div>

      <div className="flex flex-col md:flex-row mb-6 h-57.25">
        <div className="rounded-lg overflow-hidden w-57 h-full">
          <div className="w-57 h-35.75 bg-gray-300 p-2 ">
            <span className="float-right bg-white px-2 py-1.5 rounded-sm text-sm text-gray-400">12/12/2021</span>
          </div>
          <div className="bg-white w-57 h-full p-4">
            <h3 className="text-xl mb-1">Lorem ipsum dolor sit</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit</p>
          </div>
        </div>

        <div className="md:ml-6 mt-4 md:mt-0 h-57.25 flex-1 flex flex-col">
          <div className="h-full">
            <p className="text-gray-700 overflow-hidden max-h-18 mb-4">{review.description}</p>
            <p className="mb-4">Review again on: {review.nextReviewDate.toLocaleDateString()}</p>
            <p className="mb-4">{review.type}</p>
          </div>

          <button className="bg-black text-white px-6 py-3 w-fit rounded hover:bg-gray-800">
            Learn Now
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-6">Mastery level</h3>
        <MasteryChart mastery={review.mastery} />
      </div>
    </div>
  );
};

export default DetailView;
