import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KYCStatusCard.css';

const KYCStatusCard = ({ status = 'Not Verified' }) => {
  const navigate = useNavigate();

  return (
    <div className="kyc-status-card">
      <h3>KYC Verification</h3>
      <p><strong>Status:</strong> {status}</p>
      {status !== 'Verified' && (
        <button onClick={() => navigate('/kyc')}>Complete KYC</button>
      )}
      {status === 'Verified' && (
        <p className="verified-message">✅ Your identity is verified.</p>
      )}
    </div>
  );
};

export default KYCStatusCard;
