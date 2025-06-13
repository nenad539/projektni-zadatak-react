import { useNavigate } from 'react-router-dom';

const GameItem = ({ game, deleteGame }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/game/${game.id}`, { state: { game } }); // Proslijedite game kroz state
    window.location.reload(); // Privremeno rješenje za osvježavanje
  };

  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>€{game.price}</p>
      <div className="game-actions">
        <button onClick={handleView} className="view-btn">View</button>
        <button onClick={() => navigate(`/game/edit/${game.id}`)} className="edit-btn">Edit</button>
        <button onClick={() => deleteGame(game.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};