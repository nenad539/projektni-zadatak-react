import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page2 from './pages/Page2';
import GamePage from './pages/gamePage';
import AddGame from './pages/addGame';
import EditGame from './pages/editGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/game/add" element={<AddGame />} />
        <Route path="/game/edit/:id" element={<EditGame />} />
      </Routes>
    </Router>
  );
}

export default App;