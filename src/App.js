import React from 'react';
import logo from './logo-secondary.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gebeya Inc. Best of African talent. <br/> ALC Phase II Challenge
        </p>
        <a
          className="App-link"
          href="https://gebeya.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </header>
    </div>
  );
}

export default App;
