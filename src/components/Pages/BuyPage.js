import React, { useState } from 'react';
import OrderPreviewModal from '../Modals/OrderPreviewModal';

const BuyPage = () => {
  const [nairaAmount, setNairaAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [showModal, setShowModal] = useState(false);

  const handlePreview = () => {
    if (nairaAmount && selectedCrypto) {
      setShowModal(true);
    } else {
      alert("Please enter an amount and select a crypto.");
    }
  };

  const handleConfirmOrder = () => {
    console.log("Order submitted:", { nairaAmount, selectedCrypto });
    // You could also add it to trade history or send to backend here
    setShowModal(false);
    setNairaAmount('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Buy Crypto</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Select Crypto: </label>
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Naira Amount: </label>
        <input
          type="number"
          value={nairaAmount}
          onChange={(e) => setNairaAmount(e.target.value)}
          placeholder="Enter amount in ₦"
        />
      </div>

      <button onClick={handlePreview}>Preview Order</button>

      <OrderPreviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmOrder}
        orderData={{ nairaAmount, crypto: selectedCrypto }}
      />
    </div>
  );
};

export default BuyPage;
