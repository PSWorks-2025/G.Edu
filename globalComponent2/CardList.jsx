import React, { useState } from 'react';
import CardOverview from './CardOverview';
import { Link } from 'react-router-dom';

const CardList = ({ cardData, title, width }) => {
  const [showAll, setShowAll] = useState(false);

  const initialVisible = 3;
  const visibleCards = showAll ? cardData : cardData.slice(0, initialVisible);

  return (
    <div className="bg-[#fbfbfb] px-7 pb-7 pt-6 rounded-lg" style={{ width }}>
      <div className="flex flex-row justify-between">
        <h2 className="NUNITO_SANS text-2xl">{title}</h2>
        {cardData.length > initialVisible && (
          <button onClick={() => setShowAll(!showAll)} className="text-blue-500 hover:underline">
            {showAll ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
      {cardData.length > 0 ? (
        <>
          {visibleCards.map((card, index) => (
            <CardOverview
              key={`${card.id}_${index}`}
              title={card.title}
              description={card.description}
              deadline={card.deadline}
              id={card.id}
            />
          ))}
          {cardData.length > initialVisible && showAll && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-blue-500 hover:underline"
            >
              {showAll ? 'See Less' : 'See More'}
            </button>
          )}
        </>
      ) : (
        <p className="ROBOTO_FONTS text-center mt-6 w-full">No resources found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '0.25rem',
    flexWrap: 'wrap',
    padding: '0.5rem',
  },
};

export default CardList;
