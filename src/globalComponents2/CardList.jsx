import React from 'react';
import CardOverview from './CardOverview';
import { Link } from 'react-router-dom';

const CardList = ({ cardData, title, width }) => {
  return (
    <div className="bg-[#fbfbfb] px-7 pb-7 pt-6 rounded-lg" style={{ width: width }}>
      <h2 className="NUNITO_SANS text-2xl">{title}</h2>
      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <CardOverview
            key={`${card.id}_${index}`}
            title={card.title}
            description={card.description}
            deadline={card.deadline}
            id={card.id}
          />
        ))
      ) : (
        <p className="ROBOTO_FONTS text-center mt-6 w-full">No resources found.</p>
      )}
    </div>
  );
};

// const styles = {
//   container: {
//     display: 'flex',
//     gap: '1rem',
//     flexWrap: 'wrap',
//     padding: '1rem',
//   },
// };

export default CardList;
