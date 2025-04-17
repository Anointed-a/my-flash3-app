// src/components/AUTH/Dashboard/UserDashboard.js

import React, { useEffect, useState } from 'react';

const UserDashboard = () => {
  const [walletInfo, setWalletInfo] = useState(null);

  const fetchWalletInfo = async () => {
    // Simulated async fetch
    setWalletInfo({ balance: '₦100,000', cryptoHoldings: 'BTC: 0.01' });
  };

  useEffect(() => {
    fetchWalletInfo();
  }, []); // we can safely ignore eslint dependency warning for now

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>User Dashboard Details</h3>
      {walletInfo ? (
        <>
          <p>Wallet Balance: {walletInfo.balance}</p>
          <p>Holdings: {walletInfo.cryptoHoldings}</p>
        </>
      ) : (
        <p>Loading wallet info...</p>
      )}
    </div>
  );
};

export default UserDashboard;
