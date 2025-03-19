import React, { useState, useEffect } from 'react';
import './notification.css';

import { PageTitle, ComponentTitle, ComponentSubTitle, RegularText, SmallText } from '../../globalComponents/Typography';

import FilterGroup from '../../globalComponents/FilterGroup';
import SearchBar from '../../globalComponents/SearchBar';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  const [timeSelected, setTimeSelected] = useState('Last 7 days');
  const [searchText, setSearchText] = useState('');

  const timeOptions = [
    {
      set: setTimeSelected,
      options: [
        { value: 'Last 7 days', label: 'Last 7 days' },
        { value: 'Last 30 days', label: 'Last 30 days' },
        { value: 'Last 3 months', label: 'Last 3 months' },
      ],
    },
  ];

  useEffect(() => {
    fetch('/notifications.json')
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  useEffect(() => {
    let days = 7;
    if (timeSelected === 'Last 30 days') days = 30;
    else if (timeSelected === 'Last 3 months') days = 90;
    const now = new Date('2025-03-10T00:00:00Z');
    let temp = notifications.filter((notif) => {
      const notifDate = new Date(notif.timestamp);
      const diffInDays = (now - notifDate) / (1000 * 60 * 60 * 24);
      return diffInDays >= 0 && diffInDays <= days;
    });
    temp = temp.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setFilteredNotifications(temp);
  }, [timeSelected, notifications]);

  const [sortSelected, setSortSelected] = useState('Name');

  const sortOptions = [
    {
      set: setSortSelected,
      options: [
        { value: 'Name', label: 'Name' },
        { value: 'Time', label: 'Time' },
      ],
    },
  ];

  return (
    <div className='mt-4'>
      <PageTitle>Notifications</PageTitle>
      <div className="flex items-center mb-6 space-x-4 h-11">
        <FilterGroup OptionGroups={timeOptions} widthOfEachFilter={'9rem'} height={'100%'} />

        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          width={'40%'}
          height={'100%'}
        />

        <FilterGroup OptionGroups={sortOptions} widthOfEachFilter={'7rem'} height={'100%'} />
      </div>
      <div className="notification-list">
        {filteredNotifications.map((item) => (
          <div className="notification-item" key={item.notification_id}>
            <div className="item-content">
              <div className="circle-indicator" />
              <div className="item-text">
                <ComponentSubTitle className='mb-1'>{item.title}</ComponentSubTitle>
                <RegularText className='mb-2'>{item.message}</RegularText>
                <SmallText className='text-[#777777]'>{new Date(item.timestamp).toLocaleString()}</SmallText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
