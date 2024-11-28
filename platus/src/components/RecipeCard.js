import React from "react";
import { useAuth } from "../AuthContext";

export default function RecipeCard({ recipe, onClick }) {
  const { likes, addLike, removeLike } = useAuth();
  const isLiked = likes.some((like) => like.idMeal === recipe.idMeal);

  const handleLike = () => {
    if (isLiked) {
      removeLike(recipe.idMeal);
    } else {
      addLike(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <h3 onClick={onClick}>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} onClick={onClick} />
      <button
        onClick={handleLike}
        className={`like-button ${isLiked ? "liked" : ""}`}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
