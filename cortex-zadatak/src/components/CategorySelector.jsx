import { useGames } from '../context/gameContext';

const CategoryFilter = () => {
  const { selectedCategory, handleCategoryChange } = useGames();

  const categories = [
    'action',
    'adventure',
    'rpg',
    'fps',
    'sports',
    'racing',
    'horror',
    'moba',
    'battle-royale'
  ];

  return (
    <select 
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
      className="category-select"
    >
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;