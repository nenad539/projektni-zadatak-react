import { createContext, useContext, useEffect, useState } from 'react';

// 1. Kreiranje Contexta
const GamesContext = createContext();

// 2. Kreiranje Providera sa svim funkcionalnostima
export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API BASE URL
  const API_URL = 'https://dummyjson.com/products';

  // Fetch all games
  const fetchAllGames = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setGames(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single game
  const fetchGame = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`);
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Search games
  const searchGames = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/search?q=${query}`);
      const data = await response.json();
      setGames(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Sort games
  const sortGames = async (sortBy, order = 'asc') => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?sortBy=${sortBy}&order=${order}`);
      const data = await response.json();
      setGames(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch games by category
  const fetchGamesByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/category/${category}`);
      const data = await response.json();
      setGames(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new game
  const addGame = async (gameData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameData)
      });
      const newGame = await response.json();
      setGames(prev => [...prev, newGame]);
      return newGame;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update game
  const updateGame = async (id, updateData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });
      const updatedGame = await response.json();
      setGames(prev => prev.map(game => game.id === id ? updatedGame : game));
      return updatedGame;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Delete game
  const deleteGame = async (id) => {
    setLoading(true);
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setGames(prev => prev.filter(game => game.id !== id));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Učitaj podatke prilikom mountovanja
  useEffect(() => {
    fetchAllGames();
    fetchCategories();
  }, []);

  // Vrijednosti koje se prosljeđuju kroz context
  const contextValue = {
    games,
    categories,
    loading,
    error,
    fetchAllGames,
    fetchGame,
    searchGames,
    sortGames,
    fetchCategories,
    fetchGamesByCategory,
    addGame,
    updateGame,
    deleteGame
  };

  return (
    <GamesContext.Provider value={contextValue}>
      {children}
    </GamesContext.Provider>
  );
};

// 3. Eksport custom hooka za korištenje contexta
export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error('useGames must be used within a GamesProvider');
  }
  return context;
};

// 4. Eksport contexta za direktan pristup ako bude potrebno
export { GamesContext };