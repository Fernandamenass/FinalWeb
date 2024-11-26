import React, { useState, useEffect } from "react";
import "../styles/index.css";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

      try {
        const requests = alphabet.map((letter) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
          ).then((res) => res.json())
        );

        const results = await Promise.all(requests);
        const allRecipes = results.flatMap((result) =>
          result.meals ? result.meals : []
        );

        setRecipes(allRecipes);
      } catch (err) {
        setError("Failed to load recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (id) => {
    setSelectedRecipe(id); // Guarda la ID de la receta seleccionada
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null); // Cierra el detalle
  };

  return (
    <div>
      <h1 className="titles">Recipes</h1>
      {loading && <p>Loading recipes...</p>}
      {error && <p>{error}</p>}

      {selectedRecipe ? (
        <RecipeDetail id={selectedRecipe} onClose={handleCloseDetail} />
      ) : (
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe.idMeal)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
