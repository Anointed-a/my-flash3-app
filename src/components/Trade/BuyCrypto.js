import React, { useState } from 'react';
import OrderPreviewModal from '../Modals/OrderPreviewModal';

const BuyPage = () => {
  const [nairaAmount, setNairaAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [showModal, setShowModal] = useState(false);
  const [tradeHistory, setTradeHistory] = useState([]);

  const handlePreview = () => {
    if (!nairaAmount || isNaN(nairaAmount)) return alert("Enter a valid amount");
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    const newTrade = {
      crypto: selectedCrypto,
      amount: nairaAmount,
      time: new Date().toLocaleString(),
    };
    setTradeHistory([newTrade, ...tradeHistory]);
    setShowModal(false);
    setNairaAmount('');
  };

  return (
    <div>
      <h2>Buy Crypto</h2>
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

      <div style={{ marginTop: '2rem' }}>
        <h3>Trade History</h3>
        {tradeHistory.length === 0 ? (
          <p>No trades yet.</p>
        ) : (
          <ul>
            {tradeHistory.map((trade, index) => (
              <li key={index}>
                {trade.crypto} - ₦{trade.amount} @ {trade.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BuyPage;

