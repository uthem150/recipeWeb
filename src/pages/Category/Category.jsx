import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealBox from "../../components/MealBox";
import "./Category.css";
const Category = () => {
  const [meals, setMeals] = useState([]); //API로부터 받아온 요리 목록 저장
  const { category } = useParams(); //URL에서 카테고리 이름을 가져오는 변수

  //처음 렌더링될 때, category 값이 변경될 때 displayCategory 함수 호출
  useEffect(() => {
    displayCategory();
  }, [category]);

  const displayCategory = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    //themealdb API에 요청을 보내고, 응답을 JSON 형식으로 파싱
    const data = await res.json();
    setMeals(data.meals);
  };
  return (
    <section id="meals">
      <h2>{category}</h2>
      <div id="mealContainer">
        {meals.map((meal) => {
          return <MealBox key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </section>
  );
};

export default Category;
