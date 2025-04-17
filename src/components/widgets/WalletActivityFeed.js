import React from 'react';
import './WalletActivityFeed.css';

const WalletActivityFeed = ({ activity }) => {
  return (
    <div className="wallet-activity-feed">
      <h3>Wallet Activity</h3>
      <div className="activity-list">
        {activity.length === 0 ? (
          <p>No recent activity</p>
        ) : (
          activity.map((item, index) => (
            <div key={index} className="activity-item">
              <p>{item.message}</p>
              <span>{item.timestamp}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WalletActivityFeed;
