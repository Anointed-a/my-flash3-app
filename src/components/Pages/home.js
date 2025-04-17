// src/pages/Home.js
import React from 'react';
import AuthForm from '../AUTH/AuthForm';



const Home = ({ isSignupMode, userData, setUserData, handleAuthSubmit, toggleMode }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Flash3 Crypto Trade</h1>
      <AuthForm
        isSignupMode={isSignupMode}
        userData={userData}
        setUserData={setUserData}
        onSubmit={handleAuthSubmit}
        toggleMode={toggleMode}
      />
    </div>
  );
};

export default Home;
