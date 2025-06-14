import { createContext, useState, useEffect } from 'react';

// 1. Kreiranje konteksta
export const GameContext = createContext();

// 2. Glavni provider komponenta
const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dohvatanje igara sa API-ja
  const fetchGames = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=10');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setGames(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Dodavanje nove igre
  const addGame = async (newGame) => {
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGame)
      });
      const data = await response.json();
      setGames([...games, data]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Brisanje igre
  const deleteGame = async (id) => {
    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      });
      setGames(games.filter(game => game.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Ažuriranje igre
  const updateGame = async (id, updatedGame) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGame)
      });
      const data = await response.json();
      setGames(games.map(game => game.id === id ? data : game));
    } catch (err) {
      setError(err.message);
    }
  };

  // Inicijalno učitavanje igara
  useEffect(() => {
    fetchGames();
  }, []);

  // Vrednosti koje će biti dostupne u celoj aplikaciji
  const value = {
    games,
    loading,
    error,
    addGame,
    deleteGame,
    updateGame
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

// 3. Exportovanje providera kao default
export default GameProvider;