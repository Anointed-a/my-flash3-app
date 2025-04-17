// src/components/Widgets/CryptoNewsFlash.js
import React from 'react';
import './CryptoNewsFlash.css';

const mockNews = [
  { id: 1, title: "Bitcoin hits $75k milestone" },
  { id: 2, title: "Ethereum gas fees drop by 40%" },
  { id: 3, title: "USDT issuer reveals new audit transparency" },
  { id: 4, title: "Solana network upgrades security layer" },
  { id: 5, title: "Nigeria leads crypto adoption in Africa" },
];

const CryptoNewsFlash = () => {
  return (
    <div className="newsflash-widget">
      <h3>📰 Crypto News Flash</h3>
      <div className="news-list">
        {mockNews.map((news) => (
          <div key={news.id} className="news-item">
            {news.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoNewsFlash;
