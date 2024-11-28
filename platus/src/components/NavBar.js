import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar container">
      <div className="nav-links">
        <div>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div>
          {user && (
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          )}
        </div>
        <div>
          {user && (
            <Link to="/LikedRecipes" className="nav-link">
              Liked Recipes
            </Link>
          )}
        </div>

        {user ? (
          <div className="user-actions">
            <div>
              <Link to="/Settings" className="nav-link">
                Settings
              </Link>

              <Link to="/" onClick={handleLogout} className="button1">
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/LoginPage" className="nav-link">
              Login
            </Link>
            <Link to="/RegisterPage" className="nav-link">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
