import React from "react";
import { useParams } from "react-router-dom";

const posts = {
  1: { title: "Understanding React Hooks", content: "Hooks are functions that let you use state and other React features without writing a class." },
  2: { title: "Building a Simple Web App", content: "Learn how to create a simple web application using React and modern tools." },
  3: { title: "JavaScript Best Practices", content: "Follow these best practices to write clean and efficient JavaScript code." }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
