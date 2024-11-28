import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

const LoginPage = () => {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/recipes");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>{user ? "Logout" : "Login"}</h1>{" "}
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>{" "}
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            {error && <p className="error">{error}</p>}{" "}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
