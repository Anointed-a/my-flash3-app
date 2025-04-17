import React, { useState } from 'react';

const KYCPage = () => {
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [utilityBill, setUtilityBill] = useState(null);

  const [kycStatus, setKycStatus] = useState('Not Submitted');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  const handleSubmitKYC = () => {
    setIsSubmitting(true);
    setKycStatus('Submitting...');

    setTimeout(() => {
      setIsSubmitting(false);
      setKycStatus('Pending Approval');
    }, 2000);
  };

  const renderPreview = (file) =>
    file ? (
      <img
        src={URL.createObjectURL(file)}
        alt="Preview"
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginTop: '10px',
        }}
      />
    ) : null;

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>KYC Verification</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>Upload ID (Front):</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setIdFront)} />
        {renderPreview(idFront)}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Upload ID (Back):</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setIdBack)} />
        {renderPreview(idBack)}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Upload Selfie:</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setSelfie)} />
        {renderPreview(selfie)}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Upload Utility Bill:</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setUtilityBill)} />
        {renderPreview(utilityBill)}
      </div>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={handleSubmitKYC}
          disabled={isSubmitting}
          style={{
            padding: '12px 24px',
            backgroundColor: isSubmitting ? '#999' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit KYC'}
        </button>

        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          KYC Status: {kycStatus}
        </div>
      </div>
    </div>
  );
};

export default KYCPage;
