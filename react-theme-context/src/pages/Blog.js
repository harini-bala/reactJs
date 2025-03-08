import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/Blog.css";

const Blog = () => {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const content = {
    en: {
      title: "Understanding Lazy Loading in Web Applications",
      intro: "Lazy loading improves performance by loading only required content...",
      howItWorks: "How does Lazy Loading work?",
      explanation: "React's Suspense helps dynamically load UI elements.",
      imageAlt: "Example of Lazy Loading",
      themeToggle: "Change Theme",
      useCases: "Use Cases",
      benefits: "Benefits of Lazy Loading",
      useCasesList: [
        "Dynamic content loading",
        "Optimized initial page load",
        "Efficient resource management",
      ],
      benefitsList: [
        "Faster website performance",
        "Reduces bandwidth usage",
        "Improves user experience",
      ],
    },
    ta: {
      title: "Web Application-களில் Lazy Loading பற்றி புரிந்து கொள்ளுங்கள்",
      intro: "Lazy loading பயன்பாட்டின் செயல்திறனை மேம்படுத்துகிறது...",
      howItWorks: "Lazy Loading எப்படி வேலை செய்கிறது?",
      explanation: "React Suspense-ஐ பயன்படுத்தி UI elements load செய்யலாம்.",
      imageAlt: "Lazy Loading எடுத்துக்காட்டு",
      themeToggle: "தீம் மாற்றவும்",
      useCases: "பயன்பாடுகள்",
      benefits: "Lazy Loading-ன் நன்மைகள்",
      useCasesList: [
        "மாற்றக்கூடிய உள்ளடக்கம் (Dynamic Content Loading)",
        "உறுதியான ஆரம்ப பக்க ஏற்றுதல் (Optimized Initial Page Load)",
        "சிறந்த வள மேலாண்மை (Efficient Resource Management)",
      ],
      benefitsList: [
        "வலைத்தள செயல்திறனை அதிகரிக்கிறது",
        "பரந்தகோட பயன்படுத்துதலை குறைக்கிறது",
        "பயனர் அனுபவத்தை மேம்படுத்துகிறது",
      ],
    },
  };

  return (
    <div className={`blog-container ${theme}`}>
      <div className="top-bar">
        <button onClick={toggleTheme}>{content[language].themeToggle}</button>
        <LanguageSwitcher />
      </div>

      <h1 className="blog-title">{content[language].title}</h1>
      <div className="blog-content">
        <p>{content[language].intro}</p>

        <h2>{content[language].howItWorks}</h2>
        <p>{content[language].explanation}</p>

        <h2>{content[language].useCases}</h2>
        <ul className="styled-list">
          {content[language].useCasesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{content[language].benefits}</h2>
        <ul className="styled-list">
          {content[language].benefitsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
