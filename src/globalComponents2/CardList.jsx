import React from 'react';
import CardOverview from './CardOverview';
import { ComponentTitle, RegularText } from './Typography';

const CardList = ({ cardData, title, width }) => {
  return (
    <div className="bg-[#fbfbfb] px-7 pb-7 pt-6 rounded-lg" style={{ width: width }}>
      <ComponentTitle>{title}</ComponentTitle>
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
        <div className="flex justify-center w-full mt-6">
          <RegularText>No resources found.</RegularText>
        </div>
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
