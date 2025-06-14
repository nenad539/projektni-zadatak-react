import { useContext } from 'react';
import { GameContext } from '../context/gameContext';
import GameItem from '../components/gameItem';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar';

const Home = () => {
  const { 
     games = [], 
    allGames = [],
    loading, 
    error, 
    searchTerm = '', 
    setSearchTerm = () => {}, 
    sortOption = 'default', 
    setSortOption = () => {},
    filterCategory = 'all',
    setFilterCategory = () => {},
    currentPage = 1,
    setCurrentPage = () => {},
    gamesPerPage = 30,
      totalGames = allGames.length
  } = useContext(GameContext);

   // Dobijanje jedinstvenih kategorija
  const categories = ['all', ...new Set(allGames.map(game => game.category).filter(Boolean))];

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Navbar />
      <div>Loading games...</div>
    </div>
  );

  if (error) return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Navbar />
      <div style={{ color: 'red' }}>Error: {error}</div>
    </div>
  );

  const totalPages = Math.ceil(totalGames / gamesPerPage);

  return (
    <div>
      <Navbar />
      
      <div style={{ padding: '1rem 2rem' }}>
        {/* Filter i sort kontrole */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <select
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              minWidth: '200px'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              minWidth: '200px'
            }}
          >
            <option value="default">Default Sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>

        {/* Prikaz igara */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {games.length > 0 ? (
            games.map(game => <GameItem key={game.id} game={game} />)
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
              No games found matching your criteria
            </div>
          )}
        </div>

        {/* Paginacija */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === 1 ? '#ccc' : '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>
          
          <span>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={currentPage >= totalPages}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage >= totalPages ? '#ccc' : '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>

        {/* Link ka Page2 */}
        {currentPage >= totalPages && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link 
              to="/page2" 
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#2c3e50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block'
              }}
            >
              View More Games on Page 2
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
