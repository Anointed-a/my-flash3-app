// src/components/AuthForm.js
import React from 'react';

export default function AuthForm({
  isSignupMode,
  userData,
  setUserData,
  onSubmit,
  toggleMode
}) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>{isSignupMode ? 'Sign Up' : 'Login'}</h2>

      {isSignupMode && (
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          style={{ display: 'block', marginBottom: '10px', width: '300px' }}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />

      <button onClick={onSubmit} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {isSignupMode ? 'Sign Up' : 'Login'}
      </button>

      <p style={{ marginTop: '10px' }}>
        {isSignupMode ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span onClick={toggleMode} style={{ color: 'blue', cursor: 'pointer' }}>
          {isSignupMode ? 'Login here' : 'Sign up here'}
        </span>
      </p>
    </div>
  );
}
