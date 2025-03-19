import React, { useState } from 'react';
import RenderCard from '../RenderCard';

import highlightText from '../../utils/highlightText';

import { ComponentTitle } from '../Typography';

const CardList = ({ cardData = [], title, width, findText = '', unread }) => {
  const [showAll, setShowAll] = useState(false);

  const filteredCardData = cardData.filter(
    (data) =>
      data.title.toLowerCase().includes(findText.toLowerCase()) ||
      data.description.toLowerCase().includes(findText.toLowerCase())
  );

  const initialVisible = 3;
  const visibleCards = showAll ? filteredCardData : filteredCardData.slice(0, initialVisible);

  return (
    <div className="bg-[#fbfbfb] px-7 pb-7 pt-6 rounded-lg" style={{ width }}>
      <div className="flex flex-row justify-between">
        <ComponentTitle>{title}</ComponentTitle>
        {filteredCardData.length > initialVisible && (
          <button onClick={() => setShowAll(!showAll)} className="text-blue-500 hover:underline">
            {showAll ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
      {filteredCardData.length > 0 ? (
        <>
          {visibleCards.map((card, index) => (
            <RenderCard
              key={`${card.id}_${index}`}
              id={card.id}
              title={highlightText(card.title, findText)}
              description={highlightText(card.description, findText)}
              deadline={card.deadline}
              alertText={card.alertText}
              areas={card.areas}
              subAreas={card.sub_areas}
              detailContent={card.detail_content}
              unread={unread}
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
