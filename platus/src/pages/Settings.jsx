import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { updateUser, deleteUser } = useAuth();
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (newUsername) {
      updateUser({ username: newUsername });
    }
    if (newPassword) {
      updateUser({ password: newPassword });
    }

    setNewUsername("");
    setNewPassword("");
  };

  const handleDeleteAccount = () => {
    deleteUser();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Settings</h1>
        <form onSubmit={handleUpdate} className="settings-form">
          <div>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="New Username"
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Save Changes
          </button>
        </form>
        <button className="login-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
}
