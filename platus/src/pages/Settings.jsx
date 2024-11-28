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
    <div className="settings-container">
      <h1>Settings</h1>
      <form onSubmit={handleUpdate} className="settings-form">
        <div>
          <label>Change Username:</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="New Username"
          />
        </div>
        <div>
          <label>Change Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>
        <button type="submit" className="button1">
          Save Changes
        </button>
      </form>
      <button className="button1 delete-button" onClick={handleDeleteAccount}>
        Delete Account
      </button>
    </div>
  );
}
