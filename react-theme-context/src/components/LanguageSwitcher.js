import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "தமிழ்" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
