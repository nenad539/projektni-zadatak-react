import { useGames } from '../context/gameContext';
import { Link } from 'react-router-dom';
import '../assets/styles/main.css';
const GameList = () => {
  const { games } = useGames();

  const getStockStatus = (stock) => {
    if (stock > 100) return 'hot';
    if (stock > 0) return 'available';
    return 'sold-out';
  };

  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <span className="game-id-badge">#{game.id}</span>
          <div className="game-image-container">
            <img 
              src={game.images[0]} 
              alt={game.title}
              className="game-image"
              onError={(e) => {
                e.target.src = game.images[1];
              }}
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <Link to={`/game/${game.id}`} className="quick-action">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="game-info">
            <div className="game-header">
              <h3 className="game-title">{game.title}</h3>
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
              <span className={`game-stock ${getStockStatus(game.stock)}`}>
                {game.stock} in stock
              </span>
            </div>
            <p className="game-description">{game.description}</p>
          </div>
          <div className="game-actions">
            <Link to={`/edit-game/${game.id}`} className="action-btn edit-btn">
              Edit
            </Link>
            <button className="action-btn delete-btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;