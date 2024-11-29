import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = {
      id: Date.now(),
      title,
      content,
      likes: [],
      comments: [],
    };
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/blog");
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
