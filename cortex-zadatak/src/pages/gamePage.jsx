import { useParams, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GameContext } from '@/context/gameContext';

const GamePage = () => {
  const { id } = useParams();
  const { games } = useContext(GameContext);
  const location = useLocation();
  
  // Prvo provjeri state, pa onda context
  const game = locati
  on.state?.game || games?.find(g => g.id == id);

  useEffect(() => {
    if (!game && games.length > 0) {
      const foundGame = games.find(g => g.id == id);
      if (!foundGame) {
        console.log("Game not found");
      }
    }
  }, [games, id]);

  if (!game) return <div>Loading or game not found...</div>;

  return (
    <div className="game-details">
      <h1>{game.title}</h1>
      <img src={game.thumbnail} alt={game.title} />
      <p>{game.description}</p>
      <p>Price: €{game.price}</p>
    </div>
  );
};
export default GamePage; 