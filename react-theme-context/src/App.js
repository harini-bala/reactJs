import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Blog from "./pages/Blog";
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Blog />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
