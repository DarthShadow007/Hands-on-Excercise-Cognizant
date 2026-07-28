import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Student App Dashboard</h1>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;