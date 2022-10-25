// import necessary dependencies here
import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <NavLink to="/" className="navbar-brand" >
          Fullstack Boilerplate
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div className="box-1"></div>
            <div className="box-1"></div>
            <div className="box-3"></div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/home" className="nav-link" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="features" className="nav-link"  >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pricing" className="nav-link" >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
