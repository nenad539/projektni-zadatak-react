// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  GameProvider  from './context/gameContext'; // Named import
import './assets/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);