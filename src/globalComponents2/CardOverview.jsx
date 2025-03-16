import React from 'react';
import PropTypes from 'prop-types';
import { Clipboard } from 'lucide-react'; // Icon library
import { ComponentTitle, SubtleText } from './Typography';
import { useNavigate } from 'react-router-dom'; // For navigation
import { LuFile } from 'react-icons/lu';

const CardOverview = ({ title, description, deadline, alertText, id }) => {
  // Added link
  const navigate = useNavigate(); // Hook for navigation


  return (
    <div
      onClick={() => navigate(`/card-detail?id=${id}`)}
      className={`mt-6 bg-[#f5f5f5] w-full px-4 py-2 ${deadline ? 'h-24' : 'h-16'} rounded-lg flex items-center`}
    >
      <div className="mt-2 w-7 h-full">
        <div className="bg-[#fbfbfb] w-full h-7 rounded-full flex items-center justify-center">
          <LuFile />
        </div>
      </div>
      <div className="ROBOTO_FONTS w-full h-full ml-3 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: title }}></h3>
          <p
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        {deadline && <p className="text-sm text-gray-500">Deadline: {deadline}</p>}
      </div>
      {alertText && (
        <div className="mt-2 h-full">
          <div className="bg-[#FFCDCE] w-max px-2 py-1 text-[#641723] text-sm rounded-lg text-center">
            {alertText}
          </div>
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
