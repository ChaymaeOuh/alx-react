import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      
      <main role='main' className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* OK button */}
        <button>OK</button>
        
      </main>
      
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
