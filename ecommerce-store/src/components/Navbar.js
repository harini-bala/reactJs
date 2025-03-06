import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Commerce Store</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/laptops">Laptops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/phones">Phones</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/headphones">Headphones</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart <span className="badge bg-danger">{cartCount}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={onLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
