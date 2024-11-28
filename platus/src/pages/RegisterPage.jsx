import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { registerUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const success = registerUser(username, password);
    if (success) {
      navigate("/login");
    } else {
      setError("Username already exists!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Create a New Account</h1>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
