import React, { Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";

const BlogText = React.lazy(() => import("./BlogText"));

const BlogContent = () => {
  const { language } = useLanguage();

  return (
    <div className="blog-container">
      <h2 className="blog-title">{language === "en" ? "Welcome to My Blog" : "என் வலைப்பதிவில் வரவேற்கிறேன்"}</h2>
      <Suspense fallback={<p>Loading content...</p>}>
        <BlogText language={language} />
      </Suspense>
    </div>
  );
};

export default BlogContent;
