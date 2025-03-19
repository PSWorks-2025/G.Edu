import React, { useState, useEffect } from 'react';
import './notification.css';

import {
  PageTitle,
  ComponentTitle,
  ComponentSubTitle,
  RegularText,
  SmallText,
} from '../../globalComponents/Typography';

import FilterGroup from '../../globalComponents/FilterGroup';
import SearchBar from '../../globalComponents/SearchBar';
import CardList from '../../globalComponents/CardList';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  const [timeSelected, setTimeSelected] = useState('Last 7 days');
  const [searchText, setSearchText] = useState('');

  const [sortSelected, setSortSelected] = useState('Time');

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
    const now = new Date();
    let temp = notifications.filter((notif) => {
      const notifDate = new Date(notif.timestamp);
      const diffInDays = (now - notifDate) / (1000 * 60 * 60 * 24);
      return diffInDays >= 0 && diffInDays <= days;
    });
    if (sortSelected === 'Time')
      temp = temp.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    else
      temp = temp.sort(
        (a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ||
          a.message.toLowerCase().localeCompare(b.message.toLowerCase())
      );

    setFilteredNotifications(temp);
  }, [timeSelected, notifications, sortSelected]);

  const sortOptions = [
    {
      set: setSortSelected,
      options: [
        { value: 'Time', label: 'Time' },
        { value: 'Name', label: 'Name' },
      ],
    },
  ];

  return (
    <div className="mt-4">
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
      <div className="mt-6">
        <CardList
          cardData={filteredNotifications.map((data) => ({
            ...data,
            description: data.message,
            id: data.notification_id,
          }))}
          width={'100%'}
          title={'Notification'}
          unread={true}
          findText={searchText}
        />
      </div>
    </div>
  );
}

export default Notification;
