import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function LikedRecipes() {
  const { likes, removeLike } = useAuth();

  useEffect(() => {
    console.log("Loaded Likes:", likes);
  }, [likes]);

  if (likes.length === 0) {
    return (
      <div className="login-container">
        <h1 className="titles">No liked recipes yet!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="titles">Liked Recipes</h1>
      <div className="recipes-container">
        {likes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <button onClick={() => removeLike(recipe.idMeal)}>
              Remove Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
