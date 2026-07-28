import React, { useState } from 'react';

function App() {
  const [amountInINR, setAmountInINR] = useState(1000);
  const [targetCurrency, setTargetCurrency] = useState('USD');

  // Conversion rates relative to 1 INR
  const exchangeRates = {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    JPY: 1.85
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥'
  };

  // Compute converted amount dynamically
  const convertedAmount = (amountInINR * exchangeRates[targetCurrency]).toFixed(2);

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <div style={{ padding: '30px', border: '1px solid #e0e0e0', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', backgroundColor: '#ffffff' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Currency Converter 🔱</h1>

        {/* INR Input Field */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', color: '#555', display: 'block', marginBottom: '6px' }}>
            Amount in Indian Rupees (₹):
          </label>
          <input 
            type="number" 
            value={amountInINR} 
            onChange={(e) => setAmountInINR(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>

        {/* Target Currency Selector */}
        <div style={{ marginBottom: '25px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', color: '#555', display: 'block', marginBottom: '6px' }}>
            Select Target Currency:
          </label>
          <select 
            value={targetCurrency} 
            onChange={(e) => setTargetCurrency(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#fff', boxSizing: 'border-box' }}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>

        {/* Live Conversion Display */}
        <div style={{ padding: '20px', backgroundColor: '#eaf2f8', borderRadius: '8px', borderLeft: '5px solid #3498db' }}>
          <span style={{ fontSize: '14px', color: '#7f8c8d', display: 'block', marginBottom: '5px' }}>Converted Amount</span>
          <h2 style={{ color: '#2980b9', margin: 0, fontSize: '32px' }}>
            {currencySymbols[targetCurrency]} {isNaN(convertedAmount) ? '0.00' : convertedAmount}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;