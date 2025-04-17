import React from 'react';
import './WalletOverviewCard.css';

const WalletOverviewCard = ({ walletAddress, balance, isConnected }) => {
  return (
    <div className="wallet-overview-card">
      <h3>Wallet Overview</h3>
      <p><strong>Status:</strong> {isConnected ? 'Connected' : 'Not Connected'}</p>
      <p><strong>Address:</strong> {walletAddress || 'Not connected'}</p>
      <p><strong>Balance:</strong> {balance || '₦0.00'}</p>
    </div>
  );
};

export default WalletOverviewCard;
