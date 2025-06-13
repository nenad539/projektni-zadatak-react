import { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dohvati sve igre
  const fetchGames = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setGames(data.products);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  // Dodaj novu igru
  const addGame = async (game) => {
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
      });
      const newGame = await response.json();
      setGames([...games, newGame]);
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  // Obriši igru
  const deleteGame = async (id) => {
    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      });
      setGames(games.filter(game => game.id !== id));
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  // Ažuriraj igru
  const updateGame = async (id, updatedGame) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGame)
      });
      const data = await response.json();
      setGames(games.map(game => game.id === id ? data : game));
    } catch (error) {
      console.error("Error updating game:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <GameContext.Provider value={{ games, loading, addGame, deleteGame, updateGame }}>
      {children}
    </GameContext.Provider>
  );
};