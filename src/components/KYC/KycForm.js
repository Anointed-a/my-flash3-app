import React, { useState } from 'react';
import Layout from '../Layout/Layout';



const KycForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    idType: '',
    idFile: null,
    selfie: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check for required fields
    if (!formData.fullName || !formData.dob || !formData.address || !formData.idType || !formData.idFile || !formData.selfie) {
      alert('Please fill out all fields and upload the required files.');
      return;
    }

    // Simulate submission
    console.log('KYC Form Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <p style={{ color: 'green' }}>✅ KYC Submitted! We’ll review your details shortly.</p>;
  }

  return (
    <Layout>
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>ID Type</label>
        <select name="idType" value={formData.idType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="passport">Passport</option>
          <option value="national_id">National ID</option>
          <option value="driver_license">Driver’s License</option>
        </select>
      </div>
      <div>
        <label>Upload ID Document</label>
        <input type="file" name="idFile" accept=".jpg,.jpeg,.png,.pdf" onChange={handleChange} required />
      </div>
      <div>
        <label>Upload Selfie</label>
        <input type="file" name="selfie" accept="image/*" onChange={handleChange} required />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Submit KYC</button>
    </form>
    </Layout>
  );
};

export default KycForm;
