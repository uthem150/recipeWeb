import { useEffect, useState } from "react";
import FoodBox from "../../components/FoodBox";
import "./Menu.css";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  //음식 카테고리 목록 가져옴
  const displayFood = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json(); //응답을 JSON 형식으로 파싱
    setCategories(data.categories);
  };
  useEffect(() => {
    displayFood();
  }, []);

  return (
    <section id="menu">
      <div id="categoryContainer">
        {categories.map((category) => {
          return <FoodBox key={category.idCategory} category={category} />;
        })}
      </div>
    </section>
  );
};

export default Menu;
