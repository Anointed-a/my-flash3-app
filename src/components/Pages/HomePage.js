// src/pages/HomePage.js
import React from 'react';
import AuthForm from '../AUTH/AuthForm';
import LivePriceWidget from '../widgets/LivePriceWidget';
import Layout from '../Layout/Layout';

const HomePage = ({ isSignupMode, userData, setUserData, handleAuthSubmit, toggleMode }) => {
  return (
    <Layout>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>FLASH</h1>

        {/* Live Price Widget */}
        <LivePriceWidget />

        {/* Auth Form */}
        <AuthForm
          isSignupMode={isSignupMode}
          userData={userData}
          setUserData={setUserData}
          onSubmit={handleAuthSubmit}
          toggleMode={toggleMode}
        />
      </div>
    </Layout>
  );
};

export default HomePage;

