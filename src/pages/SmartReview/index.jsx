import React, { useState, useEffect } from 'react';
import DetailView from './DetailView';
import ReviewDisplaySection from './ReviewDisplaySection';
import { random } from 'lodash';
import { PageTitle } from '../../globalComponents2/Typography';

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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <PageTitle className="mb-6">Smart Review</PageTitle>

      <ReviewDisplaySection
        title="Your Review Set"
        items={reviewSetItems}
        onItemClick={setSelectedReview}
        emptyMessage="No review set available."
      />

      {selectedReview && (
        <DetailView review={selectedReview} onClose={() => setSelectedReview(null)} />
      )}
    </div>
  );
};

export default SmartReview;
