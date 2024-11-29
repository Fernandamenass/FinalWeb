import React from "react";
import { useLocation } from "react-router-dom";

export default function PostDetail() {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <p>No post selected.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Likes: {post.likes.length}</p>
      <h3>Comments</h3>
      <ul>
        {post.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
