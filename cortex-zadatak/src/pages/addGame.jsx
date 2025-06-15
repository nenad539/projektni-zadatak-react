import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGames } from '../context/gameContext';

const AddGame = () => {
  const navigate = useNavigate();
  const { addGame } = useGames();
  const [gameData, setGameData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    images: ['', ''],
    stock: '',
    rating: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      ...gameData,
      price: parseFloat(gameData.price),
      stock: parseInt(gameData.stock),
      rating: parseFloat(gameData.rating)
    };
    addGame(newGame);
    navigate('/');
  };

  return (
    <div className="main-content">
      <div className="hero-section">
        <h1 className="hero-title">Add New Game</h1>
        <p className="hero-subtitle">Create a new game listing</p>
      </div>
      
      <form onSubmit={handleSubmit} className="game-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={gameData.title}
            onChange={(e) => setGameData({...gameData, title: e.target.value})}
            required
            className="search-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={gameData.price}
            onChange={(e) => setGameData({...gameData, price: e.target.value})}
            required
            step="0.01"
            min="0"
            className="search-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={gameData.category}
            onChange={(e) => setGameData({...gameData, category: e.target.value})}
            required
            className="category-select"
          >
            <option value="">Select Category</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="rpg">RPG</option>
            <option value="fps">FPS</option>
            <option value="sports">Sports</option>
            <option value="racing">Racing</option>
            <option value="simulation">Simulation</option>
            <option value="strategy">Strategy</option>
            <option value="horror">Horror</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={gameData.description}
            onChange={(e) => setGameData({...gameData, description: e.target.value})}
            required
            className="search-input"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mainImage">Main Image URL</label>
          <input
            type="url"
            id="mainImage"
            value={gameData.images[0]}
            onChange={(e) => setGameData({
              ...gameData,
              images: [e.target.value, gameData.images[1]]
            })}
            required
            className="search-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fallbackImage">Fallback Image URL</label>
          <input
            type="url"
            id="fallbackImage"
            value={gameData.images[1]}
            onChange={(e) => setGameData({
              ...gameData,
              images: [gameData.images[0], e.target.value]
            })}
            className="search-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            value={gameData.stock}
            onChange={(e) => setGameData({...gameData, stock: e.target.value})}
            required
            min="0"
            className="search-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            value={gameData.rating}
            onChange={(e) => setGameData({...gameData, rating: e.target.value})}
            required
            min="0"
            max="5"
            step="0.1"
            className="search-input"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="nav-btn add-btn">Add Game</button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="nav-btn library-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGame;