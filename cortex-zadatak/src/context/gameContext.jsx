import { createContext, useState, useEffect, useCallback } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  // Dohvatanje igara
  const fetchGames = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const { products } = await response.json();
      
      // Generišemo dodatne igre sa različitim kategorijama
      const additionalGames = Array.from({ length: 30 }, (_, i) => ({
        id: 100 + i + 1,
        title: `Game ${100 + i + 1}`,
        price: (Math.random() * 100 + 10).toFixed(2),
        rating: (Math.random() * 5).toFixed(1),
        stock: Math.floor(Math.random() * 150),
        category: ['RPG', 'FPS', 'Strategy', 'Adventure', 'Sports', 'Puzzle'][Math.floor(Math.random() * 6)],
        thumbnail: `https://via.placeholder.com/300x200?text=Game+${100 + i + 1}`,
        description: `Description for Game ${100 + i + 1}`
      }));
      
      setAllGames([...products, ...additionalGames]);
      setFilteredGames([...products, ...additionalGames]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Ažuriranje prikaza
  useEffect(() => {
    let result = [...allGames];
    
    // Filtriranje
    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCategory !== 'all') {
      result = result.filter(game => 
        game.category?.toLowerCase() === filterCategory.toLowerCase()
      );
    }
    
    // Sortiranje
    switch(sortOption) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating-asc': result.sort((a, b) => a.rating - b.rating); break;
      case 'rating-desc': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    
    // Paginacija
    const startIdx = (currentPage - 1) * gamesPerPage;
    const paginated = result.slice(startIdx, startIdx + gamesPerPage);
    setFilteredGames(paginated);
  }, [allGames, searchTerm, filterCategory, sortOption, currentPage]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <GameContext.Provider value={{
      games: filteredGames,
      allGames,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      sortOption,
      setSortOption,
      filterCategory,
      setFilterCategory,
      currentPage,
      setCurrentPage,
      gamesPerPage,
       totalGames: allGames.length
    }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;