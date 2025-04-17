// src/App.js
// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './components/Pages/HomePage';
import DashboardPage from './components/Pages/DashboardPage';
import BuyPage from './components/Pages/BuyPage';
import SellPage from './components/Pages/SellPage';
import KYCPage from './components/KYC/KYCPage';
import NotificationBanner from './components/Notifications/NotificationBanner';







function App() {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [walletAddress, setWalletAddress] = useState('');
  const [newWalletAddress, setNewWalletAddress] = useState('');
  const [walletChangeMessage, setWalletChangeMessage] = useState('');
  const [tradeHistory, setTradeHistory] = useState([]);
  const [nairaAmount, setNairaAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setLoggedInUser({ name: userData.name, email: userData.email });
    navigate('/dashboard');
  };

  const toggleMode = () => setIsSignupMode(!isSignupMode);
  const handleLogout = () => {
    setLoggedInUser(null);
    navigate('/');
  };
  const connectWallet = () => setWalletAddress('0x1234567890abcdef');
  const handleTradeSubmit = () => {
    const newTrade = {
      crypto: selectedCrypto,
      amount: nairaAmount,
      time: new Date().toLocaleString(),
    };
    setTradeHistory([newTrade, ...tradeHistory]);
    setNairaAmount('');
  };


  const [notification, setNotification] = useState({ message: '', type: 'info' });

const showNotification = (message, type = 'info') => {
  setNotification({ message, type });

  setTimeout(() => {
    setNotification({ message: '', type: 'info' });
  }, 4000); // Auto dismiss after 4 seconds
};


  return (
    <>
    <NotificationBanner
  message={notification.message}
  type={notification.type}
  onClose={() => setNotification({ message: '', type: 'info' })}
/>

      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isSignupMode={isSignupMode}
                userData={userData}
                setUserData={setUserData}
                handleAuthSubmit={handleAuthSubmit}
                toggleMode={toggleMode}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              loggedInUser ? (
                <DashboardPage
                  loggedInUser={loggedInUser}
                  handleLogout={handleLogout}
                  walletAddress={walletAddress}
                  newWalletAddress={newWalletAddress}
                  setNewWalletAddress={setNewWalletAddress}
                  walletChangeMessage={walletChangeMessage}
                  setWalletChangeMessage={setWalletChangeMessage}
                  connectWallet={connectWallet}
                  tradeHistory={tradeHistory}
                  nairaAmount={nairaAmount}
                  setNairaAmount={setNairaAmount}
                  selectedCrypto={selectedCrypto}
                  setSelectedCrypto={setSelectedCrypto}
                  handleTradeSubmit={handleTradeSubmit}
                  showNotification={showNotification}
                />
              ) : (
                <HomePage
                  isSignupMode={isSignupMode}
                  userData={userData}
                  setUserData={setUserData}
                  handleAuthSubmit={handleAuthSubmit}
                  toggleMode={toggleMode}
                />
              )
            }
          />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/kyc" element={<KYCPage />} />
          

        </Routes>
      </div>
    </>
  );
}

export default App;
