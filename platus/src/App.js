import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import FavRecipe from "./components/FavRecipe";
import ChefSection from "./components/ChefSection";
import React from "react";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <div className="container main">
        <About />
      </div>
      <div className="container1">
        <FavRecipe />
      </div>
      <div className="container main">
        <ChefSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
