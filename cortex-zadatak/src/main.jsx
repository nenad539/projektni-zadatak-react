import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GameProvider } from './context/gameContext'
import '../src/assets/styles/main.css' // Try this first

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
)