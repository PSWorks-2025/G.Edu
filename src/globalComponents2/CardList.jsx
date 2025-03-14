import React from 'react';
import CardOverview from './CardOverview';
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    subtitle: 'Overview của Card 1',
    date: '2025-03-14',
  },
  {
    id: 2,
    title: 'Card 2',
    subtitle: 'Overview của Card 2',
    date: '2025-03-15',
  },
  {
    id: 3,
    title: 'Card 3',
    subtitle: 'Overview của Card 3',
    date: '2025-03-16',
  },
];

const CardList = () => {
  return (
    <div style={styles.container}>
      {cardData.map((card) => (
        <Link 
          key={card.id} 
          to={`/card-detail/${card.id}`} 
          style={{ textDecoration: 'none' }}
        >
          <CardOverview
            title={card.title}
            subtitle={card.subtitle}
            date={card.date}
            link={`/card-detail/${card.id}`}
          />
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '1rem',
  },
};

export default CardList;
