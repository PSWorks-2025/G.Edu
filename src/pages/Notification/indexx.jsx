import React from 'react';
import './Notification.css';
import NotificationTimeChangeOption from './NotificationTimeChangeOption';
import NotificationList from './NotificationList';

const Notification = () => {
  return (
    <div className="page">
      <h1>Notification Page</h1>
      <NotificationTimeChangeOption />
      <NotificationList />
    </div>
  );
};

export default Notification;
