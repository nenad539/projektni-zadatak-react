import { useGames } from '../context/gameContext';

const SearchBar = () => {
  const { searchQuery, handleSearch } = useGames();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search games..."
      className="search-input"
    />
  );
};

export default SearchBar;