import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';


function LoginPage() {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!userData.email || !userData.password || (isSignupMode && !userData.name)) {
      alert('Please fill in all fields');
      return;
    }

    if (isSignupMode) {
      localStorage.setItem('flash3-user', JSON.stringify(userData));
      alert('Account created! You can now log in.');
      setIsSignupMode(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem('flash3-user'));
      if (
        storedUser &&
        storedUser.email === userData.email &&
        storedUser.password === userData.password
      ) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }

    setUserData({ name: '', email: '', password: '' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isSignupMode ? 'Sign Up' : 'Login'}</h2>

      {isSignupMode && (
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          style={{ display: 'block', margin: '10px auto', width: '300px' }}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        style={{ display: 'block', margin: '10px auto', width: '300px' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        style={{ display: 'block', margin: '10px auto', width: '300px' }}
      />

      <button onClick={handleAuth} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {isSignupMode ? 'Sign Up' : 'Login'}
      </button>

      <p style={{ marginTop: '10px' }}>
        {isSignupMode ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          onClick={() => setIsSignupMode(!isSignupMode)}
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          {isSignupMode ? 'Login here' : 'Sign up here'}
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
