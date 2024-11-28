import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      const storedLikes = localStorage.getItem("likes");
      setLikes(storedLikes ? JSON.parse(storedLikes) : []);
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

  const addLike = (recipe) => {
    const updatedLikes = [...likes, recipe];
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    console.log("Liked Recipes:", updatedLikes);
  };

  const removeLike = (recipeId) => {
    const updatedLikes = likes.filter((like) => like.idMeal !== recipeId);
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    console.log("Updated Likes after removal:", updatedLikes);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        login,
        logout,
        deleteUser,
        likes,
        addLike,
        removeLike,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
