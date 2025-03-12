import React from 'react';
import MasteryChart from './MasteryChart';

const DetailView = ({ review, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-6">
          <button onClick={onClose} className="mr-2">
            <span className="text-2xl">←</span>
          </button>
          <h2 className="text-xl font-semibold">Lesson name</h2>
        </div>

        <div className="flex flex-col md:flex-row mb-6">
          <div className="relative">
            <div className="w-full md:w-64 h-48 bg-gray-300 flex-shrink-0"></div>
            <div className="absolute top-0 right-0 bg-white px-3 py-1 shadow-sm m-2">
              12/12/2021
            </div>
          </div>

          <div className="md:ml-6 flex-1 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-2">{review.title}</h2>
            <p className="text-gray-700 mb-6">{review.description}</p>

            <p className="mb-4">Review again on: {review.nextReviewDate.toLocaleDateString()}</p>

            <p className="mb-6">{review.type}</p>

            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              Learn Now
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6">Mastery level</h3>
          <MasteryChart mastery={review.mastery} />
        </div>
      </div>
    </div>
  );
};

export default DetailView;
