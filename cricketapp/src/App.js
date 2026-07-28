import React from 'react';

function App() {
  // Player data array
  const players = [
    { id: 1, name: 'Virat Kohli', runs: 82, team: 'India' },
    { id: 2, name: 'Rohit Sharma', runs: 45, team: 'India' },
    { id: 3, name: 'Steve Smith', runs: 67, team: 'Australia' },
    { id: 4, name: 'Joe Root', runs: 30, team: 'England' },
    { id: 5, name: 'KL Rahul', runs: 55, team: 'India' }
  ];

  // ES6 .filter() with arrow function
  const highScorers = players.filter((player) => player.runs >= 50);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3799' }}>Cricket Player Performance Tracker 🏏</h1>

      {/* Section 1: All Players using .map() */}
      <section style={{ marginBottom: '30px' }}>
        <h2>All Squad Members</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          {players.map(({ id, name, runs, team }) => (
            <div key={id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{name}</h3>
              <p style={{ margin: '3px 0', color: '#7f8c8d' }}>Team: {team}</p>
              <p style={{ margin: '3px 0', fontWeight: 'bold' }}>Runs: {runs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Filtered High Scorers (Runs >= 50) */}
      <section>
        <h2 style={{ color: '#27ae60' }}>High Scorers (50+ Runs)</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {highScorers.map(({ id, name, runs }) => (
            <li key={id} style={{ padding: '10px 15px', backgroundColor: '#e8f8f5', margin: '5px 0', borderRadius: '5px', borderLeft: '5px solid #27ae60' }}>
              <strong>{name}</strong> scored <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{runs}</span> runs
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;