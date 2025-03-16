import React, { useState } from 'react';
import RenderCard from '../RenderCard';

const CardList = ({ cardData = [], title, width }) => {
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
            <RenderCard
              key={`${card.id}_${index}`}
              id={card.id}
              title={card.title}
              description={card.description}
              deadline={card.deadline}
              alertText={card.alertText}
              areas={card.areas}
              subAreas={card.subAreas}
              detailContent={card.detailContent}
            />
          ))}
        </>
      ) : (
        <p className="ROBOTO_FONTS text-center mt-6 w-full">No resources found.</p>
      )}
    </div>
  );
};

export default CardList;
