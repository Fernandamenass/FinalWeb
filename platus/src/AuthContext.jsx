import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const registerUser = (username, password) => {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      return false;
    }

    const newUser = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser));

    return true;
  };

  const login = (username, password) => {
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.password === password) {
        setUser(parsedUser);
        localStorage.setItem("user", JSON.stringify(parsedUser));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const deleteUser = () => {
    if (user) {
      localStorage.removeItem(user.username);
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, registerUser, login, logout, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
