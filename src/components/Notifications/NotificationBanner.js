import React from 'react';
import './NotificationBanner.css';

const NotificationBanner = ({ message, type = 'info', onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification-banner ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default NotificationBanner;
