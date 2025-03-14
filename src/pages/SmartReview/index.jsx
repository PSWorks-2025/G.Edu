import React, { useState, useEffect } from 'react';
import DetailView from './DetailView';
import ReviewDisplaySection from './ReviewDisplaySection';
import { random } from 'lodash';

const SmartReview = () => {
  const [learningContents, setLearningContents] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

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

  const getLevel = () => ['Foundation', 'Medium', 'Advanced', 'Exam-ready'][random(0, 3)];

  if (loading)
    return <div className="flex items-center justify-center p-8">Loading smart review data...</div>;
  if (!studentData || !learningContents.length)
    return <div className="flex items-center justify-center p-8">No review data available.</div>;

  const reviewSetItems = studentData.student_smart_review
    .map(({ learning_content_id, next_review_date, mastery_levels }) => {
      const content = learningContents.find(
        ({ learning_content_id: id }) => id === learning_content_id
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
          imageSrc: content.image_url,
        }
      );
    })
    .filter(Boolean);

  return (
    <div className="mt-16">
      <h1 className="font-extrabold NUNITO_SANS text-4xl mb-6">Smart Review</h1>

      <div className="relative overflow-hidden">
        <div className="bg-[#fbfbfb] w-full px-7 py-7 rounded-lg">
          <ReviewDisplaySection
            title="Review Now"
            items={reviewSetItems}
            onItemClick={setSelectedReview}
          />
        </div>

        {selectedReview && (
          <DetailView review={selectedReview} onClose={() => setSelectedReview(null)} />
        )}
      </div>
    </div>
  );
};

export default SmartReview;
