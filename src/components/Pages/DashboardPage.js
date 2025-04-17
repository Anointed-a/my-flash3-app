import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CryptoNewsFlash from '../widgets/CryptoNewsFlash';
import TradeHistoryTable from '../Trade/TradeHistoryTable';
import WalletActivityFeed from '../widgets/WalletActivityFeed';
import WalletOverviewCard from '../widgets/WalletOverviewCard';
import KYCStatusCard from '../KYC/KYCStatusCard';
import LivePriceWidget from '../widgets/LivePriceWidget';
import TradeSummaryCard from '../widgets/TradeSummaryCard';
import NotificationBanner from '../widgets/NotificationBanner/NotificationBanner';

import '../widgets/CryptoNewsFlash.css';
import '../widgets/WalletActivityFeed.css';

const DashboardPage = ({
  loggedInUser,
  handleLogout,
  walletAddress,
  newWalletAddress,
  setNewWalletAddress,
  walletChangeMessage,
  setWalletChangeMessage,
  connectWallet,
  tradeHistory,
  nairaAmount,
  setNairaAmount,
  selectedCrypto,
  setSelectedCrypto,
  handleTradeSubmit,
  showNotification,
}) => {
  const navigate = useNavigate();

  const [walletActivity] = useState([
    { message: 'Wallet connected', timestamp: new Date().toLocaleString() },
    { message: 'Trade submitted: ₦50,000 to BTC', timestamp: new Date().toLocaleString() }
  ]);

  return (
    <div className="dashboard-container" style={{ padding: '20px' }}>
      <h2>Welcome, {loggedInUser?.name || 'User'}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <NotificationBanner message="🚀 Welcome to your new Web3 dashboard!" type="success" />

      {/* Wallet Section */}
      <div style={{ marginTop: '30px' }}>
        <h3>Connect Wallet</h3>
        {walletAddress ? (
          <p>Wallet: <strong>{walletAddress}</strong></p>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}

        <WalletOverviewCard
          walletAddress={walletAddress}
          isConnected={!!walletAddress}
          balance="₦250,000.00"
        />

        <LivePriceWidget />

        <KYCStatusCard status="Not Verified" onVerify={() => navigate('/kyc')} />

        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder="New Wallet Address"
            value={newWalletAddress}
            onChange={(e) => setNewWalletAddress(e.target.value)}
          />
          <button
            onClick={() => {
              setWalletChangeMessage('Wallet updated!');
              showNotification('Wallet address update requested!', 'info');
            }}
          >
            Update Wallet
          </button>

          {walletChangeMessage && <p>{walletChangeMessage}</p>}
        </div>
      </div>

      <WalletActivityFeed activity={walletActivity} />

      {/* Buy Crypto Section */}
      <div style={{ marginTop: '30px' }}>
        <h3>Buy Crypto</h3>
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>
        <input
          type="number"
          placeholder="Amount in Naira"
          value={nairaAmount}
          onChange={(e) => setNairaAmount(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <button
          onClick={() => {
            handleTradeSubmit();
            showNotification('Trade submitted successfully!', 'success');
          }}
          style={{ marginLeft: '10px' }}
        >
          Submit Trade
        </button>
      </div>

      {/* Trade History */}
      <div style={{ marginTop: '30px' }}>
        <h3>Trade History</h3>
        <TradeHistoryTable trades={tradeHistory} />
      </div>

      <TradeSummaryCard tradeHistory={tradeHistory} />

      {/* Crypto News */}
      <div style={{ marginTop: '40px' }}>
        <CryptoNewsFlash />
      </div>
    </div>
  );
};

export default DashboardPage;
