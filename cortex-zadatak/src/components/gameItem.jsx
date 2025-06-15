import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GameItem = ({ game }) => {
  // 1. Obrada cene
  const price = typeof game?.price === 'number' 
    ? game.price 
    : parseFloat(game?.price) || 0;
  const formattedPrice = `€${price.toFixed(2)}`;

  // 2. Obrada ID-a
  const formattedId = game?.id ? `#${game.id}` : '#N/A';

  // 3. Obrada naslova
  const title = game?.title || 'Untitled Game';

  // 4. Obrada opisa
  const description = game?.description || 'No description available';
  const shortDescription = description.length > 50 
    ? `${description.substring(0, 50)}...` 
    : description;

  // 5. Obrada kategorije
  const category = game?.category || 'uncategorized';
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  // 6. Obrada zaliha
  const stock = typeof game?.stock === 'number' 
    ? game.stock 
    : parseInt(game?.stock) || 0;
  const stockStatus = stock > 100 
    ? 'Hot' 
    : stock > 0 
      ? 'Available' 
      : 'Sold out';
  const stockClass = stockStatus.toLowerCase().replace(' ', '-');

  // 7. Obrada slike
  const thumbnail = game?.images?.[0] || fallbackImage ;

  return (
    <div className="game-item">
      <div className="game-id">{formattedId}</div>
      <img 
        src={thumbnail} 
        alt={title} 
        className="game-image"
        onError={(e) => {
          e.target.src = game?.images?.[1] || fallbackImage;
        }}
      />
      <div className="game-info">
        <h3 className="game-title">{title}</h3>
        <p className="game-price">{formattedPrice}</p>
        <p className="game-category">{formattedCategory}</p>
        <p className={`game-stock ${stockClass}`}>{stockStatus}</p>
        <p className="game-description">{shortDescription}</p>
      </div>
      <div className="game-actions">
        <Link to={`/game/${game?.id || ''}`} className="view-btn">
          View
        </Link>
        <Link to={`/game/edit/${game?.id || ''}`} className="edit-btn">
          Edit
        </Link>
        <button className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

// Prop type validacija
GameItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
    category: PropTypes.string,
    stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    thumbnail: PropTypes.string,
     images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

// Fallback vrednosti za props
GameItem.defaultProps = {
  game: {
    id: 0,
    title: 'Unknown Game',
    price: 0,
    description: '',
    category: 'uncategorized',
    stock: 0,
    thumbnail: '',
     images: []
  }
};

export default GameItem;