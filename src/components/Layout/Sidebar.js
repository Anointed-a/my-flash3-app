import React from 'react';

const Sidebar = ({ handleLogout }) => {
  return (
    <div style={{
      width: '220px',
      background: '#1c1c1c',
      color: '#fff',
      padding: '30px 20px',
      minHeight: '100vh'
    }}>
      <h2 style={{ marginBottom: '40px' }}>Flash3</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '2' }}>
        <li>Dashboard</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>KYC</li>
        <li>Settings</li>
      </ul>
      <button onClick={handleLogout} style={{ marginTop: '50px' }}>Logout</button>
    </div>
  );
};

export default Sidebar;
