import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGames } from '../context/gameContext';

const EditGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchGame, updateGame } = useGames();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const game = fetchGame(parseInt(id));
    if (game) {
      setGameData(game);
    } else {
      navigate('/');
    }
  }, [id]);

  if (!gameData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGame(parseInt(id), {
      ...gameData,
      price: parseFloat(gameData.price),
      stock: parseInt(gameData.stock),
      rating: parseFloat(gameData.rating)
    });
    navigate('/');
  };

  return (
    <div className="main-content">
      <div className="hero-section">
        <h1 className="hero-title">Edit Game</h1>
        <p className="hero-subtitle">Update game information</p>
      </div>

      <form onSubmit={handleSubmit} className="game-form">
        <div className="form-group">
          <label>Naziv:</label>
          <input
            type="text"
            name="title"
            value={gameData.title}
            onChange={(e) => setGameData({ ...gameData, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Cena:</label>
          <input
            type="number"
            name="price"
            value={gameData.price}
            onChange={(e) => setGameData({ ...gameData, price: e.target.value })}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Slika (URL):</label>
          <input
            type="url"
            name="thumbnail"
            value={gameData.thumbnail}
            onChange={(e) => setGameData({ ...gameData, thumbnail: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Opis:</label>
          <textarea
            name="description"
            value={gameData.description}
            onChange={(e) => setGameData({ ...gameData, description: e.target.value })}
            rows="5"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="nav-btn add-btn">Sačuvaj izmene</button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="nav-btn library-btn"
          >
            Odustani
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGame;