import React, { useState } from 'react';
import OrderPreviewModal from './OrderPreviewModal';

const SellCrypto = () => {
  const [nairaAmount, setNairaAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [showPreview, setShowPreview] = useState(false);
  const [tradeDetails, setTradeDetails] = useState(null);

  const exchangeRates = {
    BTC: 75000000,
    ETH: 4500000,
    USDT: 1400,
    BNB: 380000,
    SOL: 40000,
  };

  const walletAddress = '0x123456789ABCDEF'; // Replace with dynamic address later

  const getCryptoAmount = () => {
    const rate = exchangeRates[selectedCrypto];
    return nairaAmount && !isNaN(nairaAmount)
      ? (parseFloat(nairaAmount) / rate).toFixed(6)
      : '0.000000';
  };

  const handlePreview = () => {
    if (!nairaAmount || isNaN(nairaAmount)) {
      alert('Please enter a valid Naira amount.');
      return;
    }

    const estimatedCrypto = getCryptoAmount();

    const details = {
      type: 'Sell',
      crypto: selectedCrypto,
      naira: nairaAmount,
      cryptoAmount: estimatedCrypto,
      wallet: walletAddress,
    };

    setTradeDetails(details);
    setShowPreview(true);
  };

  const handleConfirm = async () => {
    alert('Trade submitted successfully!');
    setShowPreview(false);
    setTradeDetails(null);
    setNairaAmount('');
  };

  const handleCancel = () => {
    setShowPreview(false);
    setTradeDetails(null);
  };

  return (
    <div className="sell-crypto-container">
      <h2>Sell Crypto</h2>

      <select
        value={selectedCrypto}
        onChange={(e) => setSelectedCrypto(e.target.value)}
      >
        {Object.keys(exchangeRates).map((crypto) => (
          <option key={crypto} value={crypto}>
            {crypto}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Enter Naira Amount"
        value={nairaAmount}
        onChange={(e) => setNairaAmount(e.target.value)}
      />

      <p>
        You will receive approximately: <strong>{getCryptoAmount()} {selectedCrypto}</strong>
      </p>

      <button onClick={handlePreview}>Preview Order</button>

      {showPreview && tradeDetails && (
        <OrderPreviewModal
          tradeDetails={tradeDetails}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default SellCrypto;
