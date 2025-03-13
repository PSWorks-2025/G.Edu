import React from 'react';
import PropTypes from 'prop-types';
import { Clipboard } from 'lucide-react'; // Icon library
import { ComponentTitle, SubtleText } from './Typography';
import { useNavigate } from "react-router-dom"; // For navigation

const Card1 = ({ title, description, deadline, alertText, link }) => { // Added link
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div style={styles.card} onClick={() => navigate(link)}>
      {/* Left Section: Icon & Text */}
      <div style={styles.leftSection}>
        <Clipboard size={20} style={styles.icon} />
        <div>
          <ComponentTitle>{title}</ComponentTitle>
          <SubtleText>{description}</SubtleText>
          {deadline && <SubtleText>Deadline: {deadline}</SubtleText>}
        </div>
      </div>

      {/* Right Section: Alert */}
      {alertText && <div style={styles.alert}>{alertText}</div>}
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '16px 20px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '10px auto',
    position: 'relative', // Ensure relative positioning for alert
    cursor: 'pointer', // Improves UX
    transition: 'transform 0.2s ease-in-out', // Smooth effect
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '12px',
    color: '#666',
  },
  alert: {
    backgroundColor: '#FFCDCE',
    color: '#641723',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 'regular',
    position: 'absolute',
    top: '16px',
    right: '10px',
  },
};

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  alertText: PropTypes.string,
  link: PropTypes.string.isRequired, 
};

export default Card1;
