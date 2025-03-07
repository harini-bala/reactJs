import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#f7f7f7" : "#222";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  // ✅ useCallback prevents re-creation of the toggleTheme function
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // ✅ useMemo ensures the context value object remains the same unless theme changes
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
