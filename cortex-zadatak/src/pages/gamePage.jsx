import { useParams, useNavigate } from 'react-router-dom';
import { useGames } from '../context/gameContext';

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchGame, deleteGame } = useGames();
  const game = fetchGame(parseInt(id));

  if (!game) {
    return (
      <div className="main-content">
        <div className="no-games">
          <h3>Game not found</h3>
          <p>The game you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')} 
            className="nav-btn library-btn"
          >
            Back to Games
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this game?')) {
      deleteGame(parseInt(id));
      navigate('/');
    }
  };

  return (
    <div className="main-content">
      <div className="game-detail">
        <div className="game-image-container">
          <img 
            src={game.images[0]} 
            alt={game.title}
            className="game-image"
            onError={(e) => {
              e.target.src = game.images[1];
            }}
          />
        </div>

        <div className="game-info">
          <div className="game-header">
            <h1 className="game-title">{game.title}</h1>
            <span className="game-category-badge">{game.category}</span>
          </div>

          <div className="game-rating">
            <div className="stars-container">
              {"★".repeat(Math.floor(game.rating))}
              {"☆".repeat(5 - Math.floor(game.rating))}
            </div>
            <span className="rating-number">{game.rating}</span>
          </div>

          <div className="game-price-container">
            <span className="game-price">
              {game.price === 0 ? 'Free to Play' : `$${game.price.toFixed(2)}`}
            </span>
          </div>

          <div className="stock-container">
            <span className={`game-stock ${game.stock > 100 ? 'hot' : game.stock > 0 ? 'available' : 'sold-out'}`}>
              {game.stock} in stock
            </span>
          </div>

          <p className="game-description">{game.description}</p>

          <div className="game-actions">
            <button 
              onClick={() => navigate(`/edit-game/${id}`)} 
              className="action-btn edit-btn"
            >
              Edit Game
            </button>
            <button 
              onClick={handleDelete} 
              className="action-btn delete-btn"
            >
              Delete Game
            </button>
            <button 
              onClick={() => navigate('/')} 
              className="nav-btn library-btn"
            >
              Back to Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;