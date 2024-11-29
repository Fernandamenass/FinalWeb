import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { deleteUser } = useAuth();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    deleteUser();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Settings</h1>
        <button className="login-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
}
