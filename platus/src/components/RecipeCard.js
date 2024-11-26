export default function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    </div>
  );
}
