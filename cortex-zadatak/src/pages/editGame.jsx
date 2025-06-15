import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GamesContext } from '../context/gameContext';

const GameEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { games, updateGame } = useContext(GamesContext);
  
  // Pronalazak igre za izmenu
  const gameToEdit = games.find(game => game.id.toString() === id);
  
  // Stanje za formu
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    thumbnail: '',
    description: ''
  });

  // Popuni formu podacima igre kada se komponenta učita
  useEffect(() => {
    if (gameToEdit) {
      setFormData({
        title: gameToEdit.title,
        price: gameToEdit.price,
        thumbnail: gameToEdit.thumbnail,
        description: gameToEdit.description || ''
      });
    }
  }, [gameToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGame(id, formData);
      navigate(`/game/${id}`); // Vrati na detalje nakon izmene
    } catch (error) {
      console.error("Greška pri ažuriranju:", error);
    }
  };

  if (!gameToEdit) {
    return <div>Učitavanje igre...</div>;
  }

  return (
    <div className="edit-game-container">
      <h2>Izmeni igru: {gameToEdit.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Naziv:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cena:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
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
            value={formData.thumbnail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Opis:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">Sačuvaj izmene</button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate(`/game/${id}`)}
          >
            Odustani
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameEdit;