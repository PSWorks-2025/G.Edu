import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ComponentTitle, SubtleText } from '../../../../Typography';
import { useNavigate } from 'react-router-dom'; // For navigation
import CardContext from '../../../../../utils/context/cardContext';

const CardThumbnail = ({ id, link }) => {
  const navigate = useNavigate(); // Hook for navigation
  const { cardLookupTable } = useContext(CardContext);
  const { title, description, deadline } = cardLookupTable[id] || {};
  return (
    <div style={styles.card} onClick={() => link && navigate(link)}>
      {/* Image Section */}
      <div style={styles.image}>
        <div style={styles.dateBadge}>
          <SubtleText>
            {deadline &&
              new Date(deadline).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
          </SubtleText>
        </div>
      </div>

      {/* Text Content */}
      <div style={styles.content}>
        <ComponentTitle>{title}</ComponentTitle>
        <SubtleText>{description}</SubtleText>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '14.25rem',
    height: '14.25rem',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Roboto', sans-serif",
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    backgroundColor: '#c4bcbc',
    height: '120px',
    position: 'relative',
  },
  dateBadge: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '500',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  },
  content: {
    padding: '12px',
  },
};

CardThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string, // URL for navigation
};

export default CardThumbnail;
