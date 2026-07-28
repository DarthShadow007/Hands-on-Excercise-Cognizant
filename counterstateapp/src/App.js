import React, { useState } from 'react';

function App() {
  // Initialize state variable 'count' with a value of 0
  const [count, setCount] = useState(0);

  // Dynamic styling based on the count value
  const getCounterColor = () => {
    if (count > 0) return '#27ae60'; // Green for positive
    if (count < 0) return '#e74c3c'; // Red for negative
    return '#2c3e50';                // Dark grey for zero
  };

  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '40px', border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Dynamic Counter</h1>
        
        {/* Render the dynamic state variable */}
        <div style={{ fontSize: '80px', fontWeight: 'bold', margin: '30px 0', color: getCounterColor() }}>
          {count}
        </div>

        {/* Action Buttons updating state */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button onClick={() => setCount(count + 1)} style={styles.btnPrimary}>
            + Increment
          </button>
          
          <button onClick={() => setCount(0)} style={styles.btnSecondary}>
            ↻ Reset
          </button>
          
          <button onClick={() => setCount(count - 1)} style={styles.btnDanger}>
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

// Keeping styles neatly organized at the bottom
const styles = {
  btnPrimary: {
    padding: '12px 20px', fontSize: '16px', fontWeight: 'bold', color: 'white', backgroundColor: '#3498db', border: 'none', borderRadius: '6px', cursor: 'pointer'
  },
  btnSecondary: {
    padding: '12px 20px', fontSize: '16px', fontWeight: 'bold', color: '#333', backgroundColor: '#f1c40f', border: 'none', borderRadius: '6px', cursor: 'pointer'
  },
  btnDanger: {
    padding: '12px 20px', fontSize: '16px', fontWeight: 'bold', color: 'white', backgroundColor: '#e74c3c', border: 'none', borderRadius: '6px', cursor: 'pointer'
  }
};

export default App;