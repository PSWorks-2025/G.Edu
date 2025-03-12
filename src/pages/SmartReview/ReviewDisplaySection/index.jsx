import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewDisplaySection = ({ title, items, onItemClick, emptyMessage }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {items.length > 0 ? (
        items.map((item) => <ReviewCard key={item.id} item={item} onClick={onItemClick} />)
      ) : (
        <p className="text-gray-500">{emptyMessage}</p>
      )}
    </div>
  );
};

export default ReviewDisplaySection;
