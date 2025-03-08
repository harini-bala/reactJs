import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use ReactDOM from "react-dom/client"
import App from "./App";
import "./styles/index.css";

// ✅ Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
