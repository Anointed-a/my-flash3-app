import React from 'react';
import './OrderPreviewModal.css';

const OrderPreviewModal = ({ isOpen, onClose, orderData, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '30%',
      width: '40%',
      background: 'white',
      padding: '20px',
      border: '1px solid #ccc',
      zIndex: 9999
    }}>
      <h2>Confirm Your Order</h2>
      <p><strong>Crypto:</strong> {orderData.crypto}</p>
      <p><strong>Amount (₦):</strong> {orderData.nairaAmount}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
    </div>
  );
};

export default OrderPreviewModal;

