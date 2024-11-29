import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [
      {
        id: 1,
        title: "Delicious Pasta",
        content: "Here's how to make a delicious pasta...",
        author: "user123",
        likes: [],
        comments: [],
      },
      {
        id: 2,
        title: "Tasty Tacos",
        content: "The perfect recipe for taco lovers.",
        author: "chefJohn",
        likes: [],
        comments: [],
      },
    ];
    setPosts(storedPosts);
  }, []);

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const alreadyLiked = post.likes.includes(user.username);
        const updatedLikes = alreadyLiked
          ? post.likes.filter((u) => u !== user.username)
          : [...post.likes, user.username];
        return { ...post, likes: updatedLikes };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="login-container">
      <div className="x-card">
        <div className="posts-container">
          <h1 className="titles">Recipe Blog</h1>
          {user && (
            <Link to="/CreatePost" className="x-button">
              Create New Post
            </Link>
          )}
        </div>
        <div className="login-container">
          {posts.map((post) => (
            <div key={post.id} className="recipes-container">
              <div className="recipe-card">
                <h2>{post.title}</h2>
                <div className="blanco">
                  <p>{post.content.slice(0, 100)}...</p>
                </div>
                <p>Likes: {post.likes.length}</p>
                <button onClick={() => handleLike(post.id)} className="button1">
                  {post.likes.includes(user?.username) ? "Unlike" : "Like"}
                </button>
                {user?.username === post.author && (
                  <button onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
