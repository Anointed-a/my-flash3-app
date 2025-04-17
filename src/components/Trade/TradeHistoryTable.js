// src/components/Trade/TradeHistoryTable.js
import React, { useState } from 'react';
import './TradeHistoryTable.css';

const TradeHistoryTable = ({ trades }) => {
  const [filter, setFilter] = useState('All');

  const filteredTrades =
    filter === 'All' ? trades : trades.filter((trade) => trade.crypto === filter);

  const exportToCSV = () => {
    const headers = ['Crypto', 'Amount (₦)', 'Date'];
    const rows = filteredTrades.map((t) => [t.crypto, t.amount, t.time]);

    let csvContent = 'data:text/csv;charset=utf-8,'
      + headers.join(',') + '\n'
      + rows.map((e) => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'trade_history.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="trade-history">
      <h2>Trade History</h2>
      <div className="trade-controls">
        <label>Filter by Crypto:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>
        <button onClick={exportToCSV}>Export CSV</button>
      </div>

      <table className="trade-table">
        <thead>
          <tr>
            <th>Crypto</th>
            <th>Amount (₦)</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrades.length > 0 ? (
            filteredTrades.map((trade, index) => (
              <tr key={index}>
                <td>{trade.crypto}</td>
                <td>{trade.amount}</td>
                <td>{trade.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No trades to show.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistoryTable;
