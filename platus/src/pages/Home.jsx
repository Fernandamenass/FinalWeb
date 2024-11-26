import About from "../components/About";
import FavRecipe from "../components/FavRecipe";
import ChefSection from "../components/ChefSection";

import "../styles/index.css";

export default function Home() {
  return (
    <div>
      <div className="container main">
        <About />
      </div>
      <div className="container1">
        <FavRecipe />
      </div>
      <div className="container main">
        <ChefSection />
      </div>
    </div>
  );
}
