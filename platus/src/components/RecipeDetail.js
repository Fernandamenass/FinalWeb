import React, { useState, useEffect } from "react";

export default function RecipeDetail({ id, onClose }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (err) {
        setError("Failed to load recipe details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="recipe-detail">
      <button onClick={onClose}>Close</button>
      {recipe && (
        <div>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {recipe.strArea}
          </p>
          <p>
            <strong>Instructions:</strong>
          </p>
          <p>{recipe.strInstructions}</p>

          <h3>Ingredients:</h3>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return (
                ingredient && (
                  <li key={i}>
                    {ingredient} - {measure}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
