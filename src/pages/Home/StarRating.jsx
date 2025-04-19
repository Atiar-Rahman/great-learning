// StarRating.jsx
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
  
    return (
      <div className="rating rating-sm">
        {[...Array(fullStars)].map((_, i) => (
          <input key={i} type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
        ))}
        {halfStar && (
          <input type="radio" className="mask mask-star-2 mask-half-1 bg-yellow-400" checked readOnly />
        )}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <input key={`empty-${i}`} type="radio" className="mask mask-star-2 bg-gray-300" readOnly />
        ))}
      </div>
    );
  };
  
  export default StarRating;
  