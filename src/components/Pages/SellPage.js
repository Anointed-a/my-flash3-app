import React, { useState } from 'react';
import OrderPreviewModal from '../Modals/OrderPreviewModal';

const SellPage = () => {
  const [nairaAmount, setNairaAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [showModal, setShowModal] = useState(false);

  const handlePreview = () => {
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    console.log("Sell Order submitted:", { nairaAmount, selectedCrypto });
    setShowModal(false);
    setNairaAmount('');
  };

  return (
    <div>
      <h2>Sell Crypto</h2>
      <div>
        <label>Select Crypto:</label>
        <select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)}>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>
      </div>
      <div>
        <label>Naira Amount:</label>
        <input
          type="number"
          value={nairaAmount}
          onChange={(e) => setNairaAmount(e.target.value)}
          placeholder="Enter amount in Naira"
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

export default SellPage;
