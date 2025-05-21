import React from 'react';
import './App.css';
import WeatherPulseContainer from './components/containers/WeatherPulseContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">☁</span> WeatherPulse
            </div>
            <button className="btn">Settings</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <WeatherPulseContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;