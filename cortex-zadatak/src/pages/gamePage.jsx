import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GamesContext } from '../context/gameContext';

const GamePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { games, deleteGame } = useContext(GamesContext);
  
  // Pronalaženje igre po ID-u
  const game = games.find(game => game.id.toString() === id);

  const handleDelete = async () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete ovu igru?')) {
      await deleteGame(id);
      navigate('/');
    }
  };

  if (!game) {
    return <div className="loading">Igra nije pronađena</div>;
  }

  return (
    <div className="game-details">
      <div className="game-header">
        <h1>{game.title}</h1>
        <div className="game-actions">
          <button 
            onClick={() => navigate(`/game/edit/${id}`)}
            className="edit-btn"
          >
            Izmeni
          </button>
          <button 
            onClick={handleDelete}
            className="delete-btn"
          >
            Obriši
          </button>
        </div>
      </div>

      <div className="game-content">
       <img 
  src={game.images?.[0] || game.thumbnail || 'https://via.placeholder.com/400x300?text=No+Image'} 
  alt={game.title} 
  className="game-image"
  onError={(e) => {
    e.target.src = game.images?.[1] || 'https://via.placeholder.com/400x300?text=Image+Error';
  }}
/>
        
        <div className="game-info">
          <p className="price">Cena: €{game.price.toFixed(2)}</p>
          <p className="rating">Ocena: {game.rating}/5</p>
          <p className="description">{game.description}</p>
          
          <div className="additional-info">
            <p>Kategorija: {game.category}</p>
            <p>Dostupnost: {game.stock > 0 ? 'Na stanju' : 'Nema na stanju'}</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigate(-1)} 
        className="back-btn"
      >
        Nazad na listu igara
      </button>
    </div>
  );
};

export default GamePage;