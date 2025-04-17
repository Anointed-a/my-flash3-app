import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main style={{
      marginLeft: '220px',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    }}>
      {children}
    </main>
  );
};

export default MainContent;
