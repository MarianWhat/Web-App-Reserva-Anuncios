import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CampoProducto } from './components/predictive-input';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <CampoProducto />
    </div>
  );
}

export default App;
