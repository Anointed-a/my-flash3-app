import React from 'react';
import './NotificationBanner.css';

const NotificationBanner = ({ message, type = 'info' }) => {
  if (!message) return null;

  return (
    <div className={`notification-banner ${type}`}>
      {message}
    </div>
  );
};

export default NotificationBanner;

