import React, { useState, useEffect } from 'react';
import { ComponentTitle, SubtleText } from './Typography';

const CardDetailComponent = ({ id }) => {
  // Giả sử bạn fetch dữ liệu chi tiết từ API hoặc Redux/Context...
  // Ở đây chỉ minh hoạ cứng:
  const [learningContents, setLearningContents] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [learningContentsData, studentData] = await Promise.all([
          fetch('learning_contents.json').then((res) => res.json()),
          fetch('student_data_improved.json').then((res) => res.json()),
        ]);
        setLearningContents(learningContentsData);
        setStudentData(studentData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const getLevel = () => ['Foundation', 'Medium', 'Advanced', 'Exam-ready'][0];

  if (loading)
    return <div className="flex items-center justify-center p-8">Loading smart review data...</div>;
  if (!studentData || !learningContents.length)
    return <div className="flex items-center justify-center p-8">No review data available.</div>;

  const reviewSecatItems = studentData.student_smart_review
    .map(({ learning_content_id, next_review_date, mastery_levels }) => {
      const content = learningContents.find(
        ({ learning_content_id: id }) => id === learning_content_id,
      );
      return (
        content && {
          id: content.learning_content_id,
          title: content.title,
          description: content.description,
          areas: content.areas,
          type: content.type,
          level: getLevel(),
          nextReviewDate: new Date(next_review_date),
          mastery: mastery_levels,
        }
      );
    })
    .filter(Boolean);

  const review = reviewSecatItems.find((object) => `${object.id}` === id);

  return (
    <div className="bg-[#f5f5f5] z-50 overflow-y-auto ">
      <div className="flex flex-col md:flex-row mb-6 h-57.25">
        {/* Card image and etc display part */}
        <div className="rounded-lg overflow-hidden w-57 h-full">
          <div className="w-57 h-35.75 bg-gray-300 p-2 ">
            <span className="float-right bg-white px-2 py-1.5 rounded-sm text-sm text-gray-400">
              12/12/2021
            </span>
          </div>
          <div className="bg-white w-57 h-full p-4">
            <h3 className="text-xl mb-1">
              {review.title.length < 19 ? review.title : review.title.substr(0, 16) + '...'}
            </h3>
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
    </div>
  );
};

export default CardDetailComponent;
