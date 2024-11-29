import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: user.username,
      likes: [],
      comments: [],
    };

    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/blog");
  };

  return (
    <div className="login-container">
      <h1 className="titles">Create a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Submit</button>
    </div>
  );
}
