import React, { useState, useEffect } from "react";
import "../styles/index.css";

function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      console.error("Error fetching random recipe:", error);
    }
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  return (
    <div>
      {recipe ? (
        <div className="recipe-content">
          <div className="recipe-details">
            <h2 className="recipe-title" id="recipeTitle">
              {recipe.strMeal}
            </h2>
            <p className="info" id="recipeDescription">
              {recipe.strInstructions}
            </p>
            <button onClick={fetchRandomRecipe}>Get Another Recipe</button>
          </div>
          <div className="recipe-image">
            <img
              id="recipeImage"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomRecipe;
