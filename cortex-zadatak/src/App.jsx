import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameProvider from './context/gameContext';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import AddGame from './pages/AddGame';
import EditGame from './pages/EditGame';
import Navbar from './components/Navbar'; // Osnovna navigacija

function App() {
  return (
    <GameProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/game/add" element={<AddGame />} />
          <Route path="/game/edit/:id" element={<EditGame />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;