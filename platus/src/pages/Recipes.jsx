import React, { useState, useEffect } from "react";
import "../styles/index.css";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";

export default function Recipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
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
        const allFetchedRecipes = results.flatMap((result) =>
          result.meals ? result.meals : []
        );

        setAllRecipes(allFetchedRecipes);
        setRecipes(allFetchedRecipes);
      } catch (err) {
        setError("Failed to load recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllRecipes();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (err) {
        setError("Failed to load categories. Please try again.");
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setRecipes(allRecipes);
    } else {
      const filteredRecipes = allRecipes.filter(
        (recipe) => recipe.strCategory === category
      );
      setRecipes(filteredRecipes);
    }
  };

  const handleRecipeClick = (id) => setSelectedRecipe(id);
  const handleCloseDetail = () => setSelectedRecipe(null);

  return (
    <div>
      <h1 className="titles">Recipes</h1>

      {loading && <p>Loading recipes...</p>}
      {error && <p>{error}</p>}

      <div className="filter-buttons-container">
        <button
          className={`filter-button ${
            selectedCategory === "All" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={`filter-button ${
              selectedCategory === category.strCategory ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

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
