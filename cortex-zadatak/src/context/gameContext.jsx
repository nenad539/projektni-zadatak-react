import { createContext, useContext, useState } from 'react';

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYWFhIj5HYW1lIENvdmVyPC90ZXh0Pjwvc3ZnPg==';

    const initialGames = [
    {
      id: 1, title: 'Elden Ring', price: 59.99, category: 'action-rpg',
      description: 'Action RPG from the creators of Dark Souls', rating: 4.7,
      images: ['https://i.pinimg.com/736x/a9/c9/57/a9c957ff51e68181240b6dd5578474f0.jpg', fallbackImage], stock: 120
    },
    {
      id: 2, title: 'God of War Ragnarök', price: 69.99, category: 'action',
      description: 'Kratos and Atreus journey through the Nine Realms', rating: 4.8,
      images: ['https://i.pinimg.com/736x/58/e0/05/58e005528bad04d6b9c506d6e0e68503.jpg', fallbackImage], stock: 150
    },
    {
      id: 3, title: 'Call of Duty: Modern Warfare II', price: 69.99, category: 'fps',
      description: 'The sequel to 2019\'s Modern Warfare', rating: 4.2,
      images: ['https://i.pinimg.com/736x/aa/11/18/aa11186dc69287ff7192992845d8585b.jpg', fallbackImage], stock: 200
    },
    {
      id: 4, title: 'FIFA 23', price: 59.99, category: 'sports',
      description: 'Latest installment in the FIFA series', rating: 3.9,
      images: ['https://i.pinimg.com/736x/9f/6c/66/9f6c66b0ffcc10ddb4c3dcb4a3226c3b.jpg', fallbackImage], stock: 180
    },
    {
      id: 5, title: 'Overwatch 2', price: 0, category: 'fps',
      description: 'Team-based multiplayer first-person shooter', rating: 3.5,
      images: ['https://i.pinimg.com/736x/68/79/fc/6879fc6a14062063de1cf17fb6c083a8.jpg', fallbackImage], stock: 300
    },
    {
      id: 6, title: 'Apex Legends', price: 0, category: 'battle-royale',
      description: 'Free-to-play hero shooter battle royale', rating: 4.1,
      images: ['https://i.pinimg.com/736x/bc/93/1b/bc931b47a7edf6322785f1a6427a3653.jpg', fallbackImage], stock: 250
    },
    {
      id: 7, title: 'Valorant', price: 0, category: 'fps',
      description: 'Tactical shooter with unique agent abilities', rating: 4.0,
      images: ['https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg', fallbackImage], stock: 220
    },
    {
      id: 8, title: 'League of Legends', price: 0, category: 'moba',
      description: 'Popular multiplayer online battle arena', rating: 4.3,
      images: ['https://i.pinimg.com/736x/09/a1/c3/09a1c3eb89bf631952d9929e66b067bd.jpg', fallbackImage], stock: 500
    },
    {
      id: 9, title: 'Counter-Strike 2', price: 0, category: 'fps',
      description: 'Tactical first-person shooter', rating: 4.4,
      images: ['https://i.pinimg.com/736x/32/39/b8/3239b8731d6cb06617e25d17a41cc66f.jpg', fallbackImage], stock: 400
    },
    {
      id: 10, title: 'Dota 2', price: 0, category: 'moba',
      description: 'Complex MOBA with deep strategy', rating: 4.2,
      images: ['https://i.pinimg.com/736x/2c/db/b4/2cdbb484a0081c2931fc5258650818c7.jpg', fallbackImage], stock: 350
    },
    {
      id: 11, title: 'Grand Theft Auto V', price: 29.99, category: 'action',
      description: 'Open-world crime game set in Los Santos', rating: 4.5,
      images: ['https://i.pinimg.com/736x/dd/fa/b3/ddfab39ef7ecf77310b428e13349f256.jpg', fallbackImage], stock: 280
    },
    {
      id: 12, title: 'Red Dead Redemption 2', price: 59.99, category: 'adventure',
      description: 'Western-themed action-adventure', rating: 4.8,
      images: ['https://i.pinimg.com/736x/14/43/01/1443013dd13d5a9d7483e42ad9dae720.jpg', fallbackImage], stock: 190
    },
    {
      id: 13, title: 'The Witcher 3: Wild Hunt', price: 39.99, category: 'rpg',
      description: 'Epic fantasy RPG with rich storytelling', rating: 4.9,
      images: ['https://i.pinimg.com/736x/cd/8b/2b/cd8b2bb52b4d90e9e6cb0189a1709148.jpg', fallbackImage], stock: 210
    },
    {
      id: 14, title: 'Cyberpunk 2077', price: 59.99, category: 'rpg',
      description: 'Futuristic open-world RPG', rating: 4.0,
      images: ['https://i.pinimg.com/736x/8e/22/cd/8e22cd37ac664cb6ee6c621ca3c49bea.jpg', fallbackImage], stock: 160
    },
    {
      id: 15, title: 'Starfield', price: 69.99, category: 'rpg',
      description: 'Next-generation role-playing game set in space', rating: 4.3,
      images: ['https://i.pinimg.com/736x/a6/29/a8/a629a8bf90412bc816a1c1712dd65d5e.jpg', fallbackImage], stock: 140
    },
    {
      id: 16, title: 'Hogwarts Legacy', price: 59.99, category: 'adventure',
      description: 'Open-world RPG set in Harry Potter universe', rating: 4.6,
      images: ['https://i.pinimg.com/736x/3f/25/2b/3f252b2f2d5a05a287d2ffed008e3b81.jpg', fallbackImage], stock: 170
    },
    {
      id: 17, title: 'Diablo IV', price: 69.99, category: 'rpg',
      description: 'Dark fantasy action RPG', rating: 4.4,
      images: ['https://i.pinimg.com/736x/2a/01/95/2a0195a98773c59136d9aad2fdcd2910.jpg', fallbackImage], stock: 130
    },
    {
      id: 18, title: 'Baldur\'s Gate 3', price: 59.99, category: 'rpg',
      description: 'Story-rich RPG set in Dungeons & Dragons universe', rating: 4.9,
      images: ['https://i.pinimg.com/736x/bb/b5/66/bbb5669335e6528d83f35dda866a2c87.jpg', fallbackImage], stock: 110
    },
    {
      id: 19, title: 'Resident Evil 4 Remake', price: 59.99, category: 'horror',
      description: 'Reimagining of the survival horror classic', rating: 4.7,
      images: ['https://i.pinimg.com/736x/06/67/cd/0667cdc07b7b148d38299c07d247a66a.jpg', fallbackImage], stock: 90
    },
    {
      id: 20, title: 'Dead Space Remake', price: 59.99, category: 'horror',
      description: 'Remake of the sci-fi survival horror game', rating: 4.5,
      images: ['https://i.pinimg.com/736x/49/81/35/498135e16a41108f03a3214289fd6210.jpg', fallbackImage], stock: 80
    },
    {
      id: 21, title: 'Street Fighter 6', price: 59.99, category: 'fighting',
      description: 'Latest installment in the fighting game series', rating: 4.3,
      images: ['https://i.pinimg.com/736x/23/5b/19/235b199f437f6ef1273301332ca0342a.jpg', fallbackImage], stock: 70
    },
    {
      id: 22, title: 'Mortal Kombat 1', price: 69.99, category: 'fighting',
      description: 'Reboot of the Mortal Kombat universe', rating: 4.2,
      images: ['https://i.pinimg.com/736x/24/f7/4c/24f74c600fbd83cb79db042e61bea279.jpg', fallbackImage], stock: 65
    },
    {
      id: 23, title: 'Forza Horizon 5', price: 59.99, category: 'racing',
      description: 'Open-world racing game set in Mexico', rating: 4.6,
      images: ['https://i.pinimg.com/736x/53/66/f9/5366f997784df1171c077752e6f2708e.jpg', fallbackImage], stock: 120
    },
    {
      id: 24, title: 'F1 23', price: 59.99, category: 'racing',
      description: 'Official Formula 1 racing game', rating: 4.0,
      images: ['https://i.pinimg.com/736x/dc/57/51/dc5751586af5b375cd45b25e305c73b5.jpg', fallbackImage], stock: 85
    },
    {
      id: 25, title: 'NBA 2K23', price: 59.99, category: 'sports',
      description: 'Basketball simulation game', rating: 3.8,
      images: ['https://i.pinimg.com/736x/50/fd/9a/50fd9a64ea5e78573f26142a6461fbc0.jpg', fallbackImage], stock: 95
    },
    {
      id: 26, title: 'Madden NFL 23', price: 59.99, category: 'sports',
      description: 'American football simulation game', rating: 3.5,
      images: ['https://i.pinimg.com/736x/27/41/93/274193610342018dbc7744ae35d72bd7.jpg', fallbackImage], stock: 75
    },
    {
      id: 27, title: 'Cities: Skylines II', price: 49.99, category: 'simulation',
      description: 'City-building simulation game', rating: 4.1,
      images: ['https://i.pinimg.com/736x/51/1e/de/511edeea8e7d988aa1932e4dbe810072.jpg', fallbackImage], stock: 60
    },
    {
      id: 28, title: 'The Sims 4', price: 0, category: 'simulation',
      description: 'Life simulation game', rating: 3.9,
      images: ['https://i.pinimg.com/736x/4f/13/09/4f13094f676ae3febe117f345d3beb6a.jpg', fallbackImage], stock: 300
    },
    {
      id: 29, title: 'Stardew Valley', price: 14.99, category: 'simulation',
      description: 'Farming simulation RPG', rating: 4.8,
      images: ['https://i.pinimg.com/736x/10/e8/42/10e84208e2d5092624e65a8bce1b4e9f.jpg', fallbackImage], stock: 250
    },
    {
      id: 30, title: 'Minecraft', price: 26.95, category: 'sandbox',
      description: 'Block-building sandbox game', rating: 4.7,
      images: ['https://i.pinimg.com/736x/5f/f0/e9/5ff0e997a4a8ba449056ed679660f4cc.jpg', fallbackImage], stock: 500
    },
    {
      id: 31, title: 'Terraria', price: 9.99, category: 'sandbox',
      description: '2D sandbox adventure game', rating: 4.6,
      images: ['https://i.pinimg.com/736x/39/7b/0b/397b0bb3d09c1acf08148f719683ce2a.jpg', fallbackImage], stock: 200
    },
    {
      id: 32, title: 'Hades', price: 24.99, category: 'roguelike',
      description: 'Action-packed rogue-like dungeon crawler', rating: 4.7,
      images: ['https://i.pinimg.com/736x/5f/cb/4e/5fcb4e6a3d8b2aa416aeac55a0c919ff.jpg', fallbackImage], stock: 150
    },
    {
      id: 33, title: 'Dead Cells', price: 24.99, category: 'roguelike',
      description: 'Rogue-lite, metroidvania inspired action-platformer', rating: 4.5,
      images: ['https://i.pinimg.com/736x/6d/3a/f6/6d3af6bdcba033d3a8a30bb1cbcd3308.jpg', fallbackImage], stock: 120
    },
    {
      id: 34, title: 'Returnal', price: 69.99, category: 'roguelike',
      description: 'Third-person shooter roguelike', rating: 4.3,
      images: ['https://i.pinimg.com/736x/dc/86/89/dc8689bb983a673285bdce215ff76ba8.jpg', fallbackImage], stock: 80
    },
    {
      id: 35, title: 'Sea of Thieves', price: 39.99, category: 'adventure',
      description: 'Pirate-themed action-adventure game', rating: 4.0,
      images: ['https://i.pinimg.com/736x/69/88/a8/6988a811063a197c620f66d5f2149b32.jpg', fallbackImage], stock: 140
    },
    {
      id: 36, title: 'No Man\'s Sky', price: 59.99, category: 'adventure',
      description: 'Open-world space exploration game', rating: 4.2,
      images: ['https://i.pinimg.com/736x/5c/ba/f6/5cbaf6ad8b9943f2a48221c0e924d2bc.jpg', fallbackImage], stock: 110
    },
    {
      id: 37, title: 'Among Us', price: 4.99, category: 'party',
      description: 'Multiplayer social deduction game', rating: 3.8,
      images: ['https://i.pinimg.com/736x/cc/dd/b8/ccddb85e9c34b05438bc12466d706a27.jpg', fallbackImage], stock: 400
    },
    {
      id: 38, title: 'Fall Guys', price: 0, category: 'party',
      description: 'Massively multiplayer party game', rating: 3.9,
      images: ['https://i.pinimg.com/736x/71/e9/1e/71e91ede4d7f4df133fc027cd8a43fdc.jpg', fallbackImage], stock: 350
    },
    {
      id: 39, title: 'Rocket League', price: 0, category: 'sports',
      description: 'Soccer with rocket-powered cars', rating: 4.1,
      images: ['https://i.pinimg.com/736x/3b/b5/a6/3bb5a65fc2442e19f174a93e1a53c737.jpg', fallbackImage], stock: 300
    },
    {
      id: 40, title: 'Destiny 2', price: 0, category: 'fps',
      description: 'Online-only multiplayer first-person shooter', rating: 3.7,
      images: ['https://i.pinimg.com/736x/bb/ab/9a/bbab9a5791c9d9e3dc9c6dd33e682bb4.jpg', fallbackImage], stock: 250
    }
  ];
  const [games, setGames] = useState(initialGames);
  const [categories] = useState(['action', 'sports', 'horror', 'story']);
  const [loading] = useState(false);
  const [error] = useState(null);

  // Game management functions
  const fetchGame = (id) => games.find(game => game.id === id);
  
  const searchGames = (query) => 
    games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()));
  
  const sortGames = (sortBy, order = 'asc') => {
    const sorted = [...games].sort((a, b) => 
      order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]);
    setGames(sorted);
  };

  const fetchGamesByCategory = (category) => 
    games.filter(game => game.category === category);

  const addGame = (gameData) => {
    const newGame = { ...gameData, id: Math.max(...games.map(g => g.id)) + 1 };
    setGames([...games, newGame]);
    return newGame;
  };

  const updateGame = (id, updateData) => {
    setGames(games.map(game => game.id === id ? { ...game, ...updateData } : game));
  };

  const deleteGame = (id) => {
    setGames(games.filter(game => game.id !== id));
  };

  const getStockStatus = (stock) => {
    if (stock > 100) return 'In Stock';
    if (stock > 0) return 'Low Stock';
    return 'Out of Stock';
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <GamesContext.Provider value={{
      games,
      categories,
      loading,
      error,
      fetchGame,
      searchGames,
      sortGames,
      fetchGamesByCategory,
      addGame,
      updateGame,
      deleteGame,
      getStockStatus,
      formatPrice,
      fallbackImage
    }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) throw new Error('useGames must be used within a GamesProvider');
  return context;
};

export { GamesContext };