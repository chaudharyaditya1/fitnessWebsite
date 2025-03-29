// client/src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <Link to="/">
              <span>FITNESS POINT</span>
            </Link>
          </div>
          <button className="nav__menu__btn" onClick={toggleMenu}>
            ☰
          </button>
          <div className="nav__btns">
            <Link to="/register" className="btn">Join Now</Link>
          </div>
        </div>
        
        <ul className={`nav__links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
