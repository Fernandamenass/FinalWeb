import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar container">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}
