import React from 'react';
import './TradeSummaryCard.css';

const TradeSummaryCard = ({ tradeHistory }) => {
  if (!tradeHistory || tradeHistory.length === 0) {
    return (
      <div className="trade-summary-card">
        <h3>Trade Summary</h3>
        <p>No trades yet.</p>
      </div>
    );
  }

  const totalAmount = tradeHistory.reduce((sum, trade) => sum + parseFloat(trade.amount), 0);
  const lastTradeTime = tradeHistory[tradeHistory.length - 1]?.time;
  const favoriteCrypto = tradeHistory.reduce((acc, curr) => {
    acc[curr.crypto] = (acc[curr.crypto] || 0) + 1;
    return acc;
  }, {});

  const topCrypto = Object.entries(favoriteCrypto).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className="trade-summary-card">
      <h3>Trade Summary</h3>
      <p><strong>Total Traded:</strong> ₦{totalAmount.toLocaleString()}</p>
      <p><strong>Trades:</strong> {tradeHistory.length}</p>
      <p><strong>Last Trade:</strong> {lastTradeTime}</p>
      <p><strong>Favorite Crypto:</strong> {topCrypto}</p>
    </div>
  );
};

export default TradeSummaryCard;
