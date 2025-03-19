import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Clipboard } from 'lucide-react'; // Icon library
import { ComponentTitle, SubtleText } from '../../Typography';
import { useNavigate } from 'react-router-dom'; // For navigation
import { LuFile } from 'react-icons/lu';
import CardContext from '../../../utils/context/cardContext';

const CardOverview = ({ id, align, direct, unread, justifySelf }) => {
  // Added link
  const navigate = useNavigate(); // Hook for navigation
  const { cardLookupTable } = useContext(CardContext);
  const { overviewTitle, overviewDescription, deadline, alertText } = cardLookupTable[id] || {};

  return (
    <div
      onClick={() => {
        direct ? navigate(`/${direct}/${id}`) : navigate(`/card-detail?id=${id}`);
      }}
      className="w-full"
      // className={`mt-6 bg-[#f5f5f5] w-/full px-4 py-2 ${deadline ? 'h-24' : 'h-16'} rounded-lg flex items-center cursor-pointer`}
      style={{
        ...styles.card,
        margin: align ? '1rem 0' : '1rem auto',
        justifySelf: justifySelf ? '' : 'unset',
      }}
    >
      <div className="mx-2 w-7 h-full self-center">
        <div
          className="bg-[#fbfbfb] w-full h-7 rounded-full flex items-center justify-center"
          // style={styles.icon}
        >
          <LuFile />
        </div>
      </div>
      <div
        className="ROBOTO_FONTS w-full h-full ml-3 flex flex-col justify-between"
        // style={styles.leftSection}
      >
        <div>
          <h3
            className="text-lg font-bold"
            dangerouslySetInnerHTML={{ __html: overviewTitle }}
          ></h3>
          <p
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: overviewDescription }}
          ></p>
        </div>
        {deadline && (
          <p className="text-sm text-gray-500">
            Deadline:{' '}
            {new Date(deadline).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </div>
      {(alertText && (
        <div className="h-full">
          <div className="bg-[#FFCDCE] w-max px-2 py-1 text-[#641723] text-sm rounded-lg text-center align-top">
            Due {alertText}
          </div>
        </div>
      )) ||
        (unread && (
          <div className="h-full">
            <div className="bg-[#E5484D] w-3 h-3 rounded-full align-top"></div>
          </div>
        ))}
    </div>
  );
};

const styles = {
  card: {
    justifySelf: 'center',
    display: 'flex',
    // justifyContent: 'centrer',
    // alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '1rem 1.25rem',
    borderRadius: '0  .75rem',
    boxShadow: '0 2pt 4pt rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '1rem auto',
    position: 'relative', // Ensure relative positioning for alert
    cursor: 'pointer', // Improves UX
    transition: 'transform 0.2s ease-in-out', // Smooth effect
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '2px',
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

// CardOverviewDeadline.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   deadline: PropTypes.string,
//   alertText: PropTypes.string,
//   link: PropTypes.string.isRequired,
// };

export default CardOverview;
