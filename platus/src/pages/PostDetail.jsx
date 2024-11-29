import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function PostDetail() {
  const { user } = useAuth();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = posts.find((p) => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  const handleAddComment = () => {
    if (!post) return;
    const updatedPost = {
      ...post,
      comments: [
        ...post.comments,
        { username: user.username, content: comment },
      ],
    };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPost(updatedPost);
    setComment("");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Likes: {post.likes.length}</p>
      <h2>Comments</h2>
      {post.comments.map((c, index) => (
        <p key={index}>
          <strong>{c.username}:</strong> {c.content}
        </p>
      ))}
      {user && (
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
          <button onClick={handleAddComment}>Comment</button>
        </div>
      )}
    </div>
  );
}
