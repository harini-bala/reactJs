import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Blog from "./components/Blog";


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Blog />
      </div>
    </ThemeProvider>
  );
};

export default App;
