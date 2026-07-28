import React from 'react';

function App() {
  // Office space data array
  const offices = [
    { id: 1, name: 'Tech Park Tower', rent: 55000, address: 'Sector 62, Noida', image: '🏢' },
    { id: 2, name: 'Cyber Hub Suites', rent: 85000, address: 'DLF Phase 2, Gurugram', image: '🏙️' },
    { id: 3, name: 'Innovation Hub', rent: 40000, address: 'HSR Layout, Bengaluru', image: '🏬' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #34495e', paddingBottom: '10px' }}>
        Office Space Rental Portal 🏢
      </h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
        {offices.map((office) => {
          // Conditional style based on rent threshold
          const isHighRent = office.rent > 60000;

          return (
            <div 
              key={office.id} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundColor: isHighRent ? '#fff0f0' : '#f0fff0'
              }}
            >
              <div style={{ fontSize: '48px' }}>{office.image}</div>
              <h3 style={{ color: '#333', marginBottom: '8px' }}>{office.name}</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>{office.address}</p>
              <h4 style={{ color: isHighRent ? '#e74c3c' : '#27ae60', marginTop: '15px' }}>
                ₹{office.rent.toLocaleString()} / month
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;