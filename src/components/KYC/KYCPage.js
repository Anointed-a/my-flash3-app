import React, { useState } from 'react';
import './KYCPage.css';

const KYCPage = ({ showNotification }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationalId: '',
    document: null,
    selfie: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('KYC submitted:', formData);

    if (showNotification) {
      showNotification("✅ KYC submission sent for review!", "success");
    } else {
      alert("KYC submission sent for review!");
    }

    // TODO: Connect this to backend / Web3 / IPFS for real KYC processing
  };

  return (
    <div className="kyc-page">
      <h2>KYC Verification</h2>
      <form onSubmit={handleSubmit} className="kyc-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="nationalId"
          placeholder="National ID Number"
          value={formData.nationalId}
          onChange={handleChange}
          required
        />

        <label htmlFor="document">Upload Government ID</label>
        <input
          id="document"
          type="file"
          name="document"
          accept="image/*,application/pdf"
          onChange={handleChange}
          required
        />

        <label htmlFor="selfie">Upload Selfie</label>
        <input
          id="selfie"
          type="file"
          name="selfie"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Submit KYC</button>
      </form>
    </div>
  );
};

export default KYCPage;
