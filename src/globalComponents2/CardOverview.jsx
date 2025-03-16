import React from 'react';
import PropTypes from 'prop-types';
import { Clipboard, Subtitles } from 'lucide-react'; // Icon library
import { ComponentTitle, SubtleText } from './Typography';
import { useNavigate } from 'react-router-dom'; // For navigation
import { LuFile } from 'react-icons/lu';

const CardOverview = ({ title, description, deadline, alertText, id }) => {
  // Added link
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div
      onClick={() => navigate(`/card-detail?id=${id}`)}
      className={`mt-6 cursor-pointer bg-[#f5f5f5] w-full px-4 py-4 ${
        deadline ? 'h-26' : 'h-18'
      } rounded-lg flex items-center`}
    >
      <div className="w-7 h-full">
        <div className="bg-[#fbfbfb] w-full h-7 rounded-full flex items-center justify-center">
          <LuFile />
        </div>
      </div>
      <div className="ROBOTO_FONTS w-full h-full ml-3 flex flex-col justify-between">
        <div>
          <ComponentTitle>{title}</ComponentTitle>
          <SubtleText className='text-[#646464]'>{description}</SubtleText>
        </div>
        {deadline && <SubtleText>Deadline: {deadline}</SubtleText>}
      </div>
      {alertText && (
        <div className="h-full">
          <SubtleText className="bg-[#FFCDCE] text-[#641723] w-max px-2 py-1 text-sm rounded-lg text-center">
            {alertText}
          </SubtleText>
        </div>
      )}
    </div>
  );
};

// const styles = {
//   card: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//     padding: '16px 20px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     maxWidth: '800px',
//     margin: '10px auto',
//     position: 'relative', // Ensure relative positioning for alert
//     cursor: 'pointer', // Improves UX
//     transition: 'transform 0.2s ease-in-out', // Smooth effect
//   },
//   leftSection: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: '12px',
//     color: '#666',
//   },
//   alert: {
//     backgroundColor: '#FFCDCE',
//     color: '#641723',
//     padding: '6px 12px',
//     borderRadius: '8px',
//     fontSize: '0.875rem',
//     fontFamily: "'Roboto', sans-serif",
//     fontWeight: 'regular',
//     position: 'absolute',
//     top: '16px',
//     right: '10px',
//   },
// };

// CardOverviewDeadline.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   deadline: PropTypes.string,
//   alertText: PropTypes.string,
//   link: PropTypes.string.isRequired,
// };

export default CardOverview;
