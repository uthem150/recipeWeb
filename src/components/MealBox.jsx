import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MealBox = ({ meal }) => {
  return (
    <div className="meal-box">
      <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
      {/* 이름의 첫 25자까지만 잘라서 표시 */}
      <p>{meal.strMeal.slice(0, 25)}</p>
      <Link to={`/meal/${meal.idMeal}`}>
        {/* 아이콘 */}
        <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  );
};

// PropTypes를 사용하여 props를 정의
MealBox.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealBox;
