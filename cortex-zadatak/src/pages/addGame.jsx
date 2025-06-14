import { useState, useContext } from 'react';
import  {GameContext } from '@/context/gameContext';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/main.css';

const AddGame = () => {
  const [game, setGame] = useState({
    title: '',
    price: '',
    thumbnail: '',
    description: ''
  });
  const { addGame } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addGame({
        title: game.title,
        price: parseFloat(game.price),
        thumbnail: game.thumbnail || 'https://via.placeholder.com/300x200?text=No+Image',
        description: game.description,
        rating: 0,
        stock: 100
      });
      navigate('/');
    } catch (error) {
      console.error("Error adding game:", error);
      alert("Failed to add game. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game Title"
          value={game.title}
          onChange={(e) => setGame({...game, title: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={game.price}
          onChange={(e) => setGame({...game, price: e.target.value})}
          step="0.01"
          min="0"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={game.thumbnail}
          onChange={(e) => setGame({...game, thumbnail: e.target.value})}
        />
        <textarea
          placeholder="Description"
          value={game.description}
          onChange={(e) => setGame({...game, description: e.target.value})}
        />
        <button type="submit" className="submit-btn">Add Game</button>
      </form>
    </div>
  );
};

export default AddGame;