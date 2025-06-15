import { useContext } from 'react';
import { GamesContext } from '../context/gameContext';
import GameItem from '@/components/gameItem';
import { Link } from 'react-router-dom';

const Page2 = () => {
  const { games, loading, error } = useContext(GameContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Page 2</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {games.map(game => <GameItem key={game.id} game={game} />)}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Page2;