import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" alt="Trello" />
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features <FiChevronDown className="dropdown-indicator" />
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Views</a>
              <a href="#" className="dropdown-item">Automation</a>
              <a href="#" className="dropdown-item">Power-Ups</a>
              <a href="#" className="dropdown-item">Templates</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Solutions <FiChevronDown className="dropdown-indicator" />
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Marketing Teams</a>
              <a href="#" className="dropdown-item">Product Management</a>
              <a href="#" className="dropdown-item">Engineering Teams</a>
              <a href="#" className="dropdown-item">Design Teams</a>
              <a href="#" className="dropdown-item">Remote Teams</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Plans <FiChevronDown className="dropdown-indicator" />
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Standard</a>
              <a href="#" className="dropdown-item">Premium</a>
              <a href="#" className="dropdown-item">Enterprise</a>
              <a href="#" className="dropdown-item">Compare Plans</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Resources <FiChevronDown className="dropdown-indicator" />
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Trello Guide</a>
              <a href="#" className="dropdown-item">Remote Work Guide</a>
              <a href="#" className="dropdown-item">Webinars</a>
              <a href="#" className="dropdown-item">Customer Stories</a>
              <a href="#" className="dropdown-item">Help Resources</a>
            </div>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Log in</Link>
          <Link to="/signup" className="signup-btn">Get Trello for free</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;