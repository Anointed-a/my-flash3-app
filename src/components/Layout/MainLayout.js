import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children, handleLogout }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100vh',
      background: '#f8f9fa'
    }}>
      <Sidebar handleLogout={handleLogout} />
      <div style={{ flex: 1, padding: '30px', overflowY: 'scroll' }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
