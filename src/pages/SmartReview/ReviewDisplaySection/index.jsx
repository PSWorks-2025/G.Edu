import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewDisplaySection = ({ title, items, onItemClick }) => {
  return (
    <>
      <h2 className="pl-3 ROBOTO_FONTS text-xl font-semibold -mb-2">{title}</h2>
      {items.length > 0 ? (
        items.map((item, index) => (
          <ReviewCard key={`${item.id}_${index}`} item={item} onClick={onItemClick} />
        ))
      ) : (
        <p className="ROBOTO_FONTS text-center mt-6 w-full">No review set available.</p>
      )}
    </>
  );
};

export default ReviewDisplaySection;
