import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Settings from "./pages/Settings";
import LikedRecipes from "./pages/LikedRecipes";

import React from "react";

function App() {
  return (
    <Router>
      <Logo />
      <NavBar />
      <div className="espacio container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />{" "}
          <Route path="/LikedRecipes" element={<LikedRecipes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
