import React, { useEffect, useState } from 'react';
import './LivePriceWidget.css';

const LivePriceWidget = () => {
  const [prices, setPrices] = useState({ BTC: '-', ETH: '-', USDT: '-' });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=ngn');
        const data = await res.json();
        setPrices({
          BTC: data.bitcoin.ngn.toLocaleString(),
          ETH: data.ethereum.ngn.toLocaleString(),
          USDT: data.tether.ngn.toLocaleString()
        });
      } catch (err) {
        console.error('Error fetching live prices:', err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000); // auto-refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-price-widget">
      <h3>Live Crypto Prices (₦)</h3>
      <div className="price-row">
        <div className="price-card">BTC: ₦{prices.BTC}</div>
        <div className="price-card">ETH: ₦{prices.ETH}</div>
        <div className="price-card">USDT: ₦{prices.USDT}</div>
      </div>
    </div>
  );
};

export default LivePriceWidget;
