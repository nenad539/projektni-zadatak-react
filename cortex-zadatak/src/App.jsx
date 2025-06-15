import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamesProvider } from './context/gameContext';
import Navbar from './components/navbar';
import GameList from './components/gameList';
import GamePage from './pages/gamePage';
import AddGame from './pages/addGame';
import EditGame from './pages/editGame';
import SearchBar from './components/GameSearch';
import CategoryFilter from './components/CategorySelector';
import './assets/styles/main.css';

function App() {
  return (
    <GamesProvider>
      <Router>
        <div className="app">
          <Navbar /> {/* Keep this navbar */}
          <main className="main-content">
            <div className="filters-container">
              <SearchBar />
              <CategoryFilter />
            </div>
            <Routes>
              <Route path="/" element={<GameList />} />
              <Route path="/game/:id" element={<GamePage />} />
              <Route path="/add-game" element={<AddGame />} />
              <Route path="/edit-game/:id" element={<EditGame />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GamesProvider>
  );
}

export default App;