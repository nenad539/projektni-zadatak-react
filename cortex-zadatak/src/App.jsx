import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import GamePage from './pages/gamePage';
import AddGame from './pages/addGame';
import EditGame from './pages/editGame';
import { GameProvider } from './context/gameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/game/add" element={<AddGame />} />
          <Route path="/game/edit/:id" element={<EditGame />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;