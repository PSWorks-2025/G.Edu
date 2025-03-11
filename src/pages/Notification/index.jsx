import React, { useState, useRef, useEffect } from 'react';
import './notification.css';

function Notification() {
  const [notifications] = useState([
    {
      title: 'Design Conference',
      time: 'Today 3 PM',
      description:
        'Lorem ipsum dolor sit amet consectetur. A eget est dolor enim fames augue mus. Ac risus egestas rhoncus ipsum.',
    },
    {
      title: 'Design Conference',
      time: 'Today 2 PM',
      description:
        'Lorem ipsum dolor sit amet consectetur. A eget est dolor enim fames augue mus. Ac risus egestas rhoncus ipsum.',
    },
    {
      title: 'Design Conference',
      time: 'Yesterday 11 AM',
      description:
        'Lorem ipsum dolor sit amet consectetur. A eget est dolor enim fames augue mus. Ac risus egestas rhoncus ipsum.',
    },
    {
      title: 'Design Conference',
      time: '2 days ago',
      description:
        'Lorem ipsum dolor sit amet consectetur. A eget est dolor enim fames augue mus. Ac risus egestas rhoncus ipsum.',
    },
  ]);

  const [timeOpen, setTimeOpen] = useState(false);
  const [timeSelected, setTimeSelected] = useState('Last 7 days');
  const timeOptions = ['Last 7 days', 'Last 30 days', 'Last 3 months'];
  const timeFilterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (timeFilterRef.current && !timeFilterRef.current.contains(e.target)) {
        setTimeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTimeDropdown = () => {
    setTimeOpen((prev) => !prev);
  };

  const selectTimeOption = (option) => {
    setTimeSelected(option);
    setTimeOpen(false);
  };

  const [sortOpen, setSortOpen] = useState(false);
  const [sortSelected, setSortSelected] = useState('Name');
  const sortOptions = ['Name', 'Time'];
  const sortRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSortDropdown = () => {
    setSortOpen((prev) => !prev);
  };

  const selectSortOption = (option) => {
    setSortSelected(option);
    setSortOpen(false);
  };

  return (
    <div className="notification-page">
      <div className="notification-container">
        <h1 className="page-title">Notification</h1>

        <div className="notification-header">
          <div className="time-filter" ref={timeFilterRef}>
            <button className="time-filter-btn" onClick={toggleTimeDropdown}>
              {timeSelected}
              <span className="arrow-down" />
            </button>
            {timeOpen && (
              <div className="time-filter-menu">
                {timeOptions.map((option) => (
                  <div
                    key={option}
                    className={`time-filter-item ${option === timeSelected ? 'active' : ''}`}
                    onClick={() => selectTimeOption(option)}
                  >
                    {option}
                    {option === timeSelected && <span className="check-icon">✔</span>}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="search-box">
            <i className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>

          <div className="sort-dropdown" ref={sortRef}>
            <button className="sort-btn" onClick={toggleSortDropdown}>
              {sortSelected}
              <span className="arrow-down" />
            </button>
            {sortOpen && (
              <div className="sort-menu">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className={`sort-item ${option === sortSelected ? 'active' : ''}`}
                    onClick={() => selectSortOption(option)}
                  >
                    {option}
                    {option === sortSelected && <span className="check-icon">✔</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="notification-list">
          {notifications.map((item, index) => (
            <div className="notification-item" key={index}>
              <div className="item-header">
                <div className="item-title">{item.title}</div>
                <div className="item-time">{item.time}</div>
              </div>
              <div className="item-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
