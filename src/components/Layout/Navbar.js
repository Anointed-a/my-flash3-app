import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
      <Link to="/dashboard" style={{ color: 'white', marginRight: '10px' }}>Dashboard</Link>
      <Link to="/buy" style={{ color: 'white', marginRight: '10px' }}>Buy</Link>
      <Link to="/sell" style={{ color: 'white', marginRight: '10px' }}>Sell</Link>
      <Link to="/kyc" style={{ color: 'white' }}>KYC</Link>
    </nav>
  );
}

export default Navbar;
