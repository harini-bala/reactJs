import React from "react";
import { useTheme } from "../ThemeContext";


const BlogPost = React.memo(({ title, content }) => {
  const { theme } = useTheme();

  console.log(`Rendering BlogPost: ${title}`);

  return (
    <div style={{ 
      background: theme === "light" ? "#fff" : "#222", 
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
});

export default BlogPost;
