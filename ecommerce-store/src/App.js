import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProductCatalogue from "./components/ProductCatalogue";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/products" /> : <Login onLogin={() => setIsAuthenticated(true)} />}
        />

        {}
        <Route
          path="/products"
          element={isAuthenticated ? <ProductCatalogue /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
