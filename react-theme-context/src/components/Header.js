import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <div className="controls">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
