import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

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
    <div>
      <h1>Recipe Blog</h1>
      {user && (
        <Link to="/CreatePost" className="button">
          Create New Post
        </Link>
      )}
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <p>Likes: {post.likes.length}</p>
            <button onClick={() => handleLike(post.id)}>
              {post.likes.includes(user?.username) ? "Unlike" : "Like"}
            </button>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
