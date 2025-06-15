import { useGames } from './gameContext';
import { useNavigate } from 'react-router-dom';

const GameList = () => {
  const { games, categories, loading, error } = useGames();
  const navigate = useNavigate();

  if (loading) return <div className="loading">Loading games...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="game-list">
      <h2>All Games</h2>
      
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>

      <div className="games">
        {games.map(game => (
          <div 
            key={game.id} 
            className="game-card"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <h3>{game.title}</h3>
            <p>Category: {game.category}</p>
            <p>Price: ${game.price.toFixed(2)}</p>
            <p>Rating: {game.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;