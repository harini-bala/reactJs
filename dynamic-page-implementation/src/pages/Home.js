import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to My Blog!</h2>
      <p>Discover amazing content here.</p>
      <h3>Recent Posts</h3>
      <ul>
        <li><Link to="/post/1">Understanding React Hooks</Link></li>
        <li><Link to="/post/2">Building a Simple Web App</Link></li>
        <li><Link to="/post/3">JavaScript Best Practices</Link></li>
      </ul>
    </div>
  );
};

export default Home;
