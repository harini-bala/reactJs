import React from "react";

const BlogText = ({ language }) => {
  return (
    <p>
      {language === "en"
        ? "This is an example blog post. It demonstrates React's context API for managing themes and languages."
        : "இது ஒரு எடுத்துக்காட்டு வலைப்பதிவு. இது தீம் மற்றும் மொழிகளை மேலாண்மை செய்ய React-ன் Context API ஐ பயன்படுத்துகிறது."}
    </p>
  );
};

export default BlogText;
