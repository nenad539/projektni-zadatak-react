import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GameContext } from '../context/gameContext';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#2c3e50',
      color: 'white',
      marginBottom: '1rem'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>GameStore</Link>
        <Link to="/game/add" style={{ color: 'white', textDecoration: 'none' }}>Add Game</Link>
      </div>
      
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: 'none',
            minWidth: '300px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;