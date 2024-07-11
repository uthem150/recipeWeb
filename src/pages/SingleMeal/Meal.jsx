import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Meal.css";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴

  useEffect(() => {
    displayMeal();
  }, []);

  const displayMeal = async () => {
    let url;

    if (!isNaN(id)) {
      //숫자 ID인 경우
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else {
      //문자열 ID인 경우
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.meals) {
      //data.meals 배열이 존재하면 첫 번째 식사 정보를 meal 상태에 저장
      setMeal(data.meals[0]);
    } else {
      //데이터가 존재하지 않으면
      console.log("Meal not found");
    }
  };

  return (
    <section id="single-meal">
      {meal.strMeal ? ( // Check if meal data exists
        <>
          <h2>{meal.strMeal}</h2>

          <div className="container">
            <div className="video-container">
              {/* 유튜브 동영상 */}
              <ReactPlayer url={meal.strYoutube} width="100%" />
            </div>
            <div className="info">
              <p>
                <strong>Category:</strong> {meal.strCategory}
              </p>
              <p>
                <strong>Area:</strong> {meal.strArea}
              </p>
              <p>
                <strong>Instructions:</strong> {meal.strInstructions}
              </p>
            </div>
            <div className="ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {/* meal 객체에서 "Ingredient" 키를 가진 항목들을 필터링하여 재료 목록 만듦 */}
                {Object.keys(meal)
                  .filter((key) => key.includes("Ingredient") && meal[key])
                  .map((key) => (
                    <li key={key}>{meal[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Meal not found</p>
      )}
    </section>
  );
};

export default Meal;
