import '/src/assets/styles/main.css'; 
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';


const Home = () => {
  const { games, loading, deleteGame } = useContext(GameContext);

  if (loading) return <div className="loading">Loading games...</div>;

  return (
    <div className="container">
      <h1>Game Library</h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <p className="price">€{game.price.toFixed(2)}</p>
            <div className="game-actions">
              <a href={`/game/${game.id}`} className="view-btn">View</a>
              <a href={`/game/edit/${game.id}`} className="edit-btn">Edit</a>
              <button 
                className="delete-btn"
                onClick={() => deleteGame(game.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;