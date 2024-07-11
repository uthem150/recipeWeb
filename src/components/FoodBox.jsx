import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FoodBox = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`food-box ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/category/${category.strCategory}`)}
    >
      {/* loading="lazy" : 이미지가 실제로 필요할 때까지 로드되지 않도록 지연시킬 수 있음(성능 최적화) */}
      {/* 화면에 나타나지 않은 이미지는 로드되지 않음 */}
      <img src={category.strCategoryThumb} alt="" loading="lazy" />
      {isHovered && <p className="category-text">{category.strCategory}</p>}
    </div>
  );
};

// PropTypes 정의
FoodBox.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodBox;
