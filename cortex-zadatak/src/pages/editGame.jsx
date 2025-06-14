// src/pages/EditGame.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GameContext } from '@/context/GameContext';

const EditGame = () => {
  const { id } = useParams();
  const { games, updateGame } = useContext(GameContext);
  const navigate = useNavigate();
  
  const game = games.find(game => game.id.toString() === id);
  
  const [formData, setFormData] = useState({
    title: game?.title || '',
    price: game?.price || '',
    thumbnail: game?.thumbnail || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGame(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Game</h2>
      <form onSubmit={handleSubmit}>
        {/* Forma za editovanje */}
      </form>
    </div>
  );
};

export default EditGame; // OBAVEZNO dodati default export