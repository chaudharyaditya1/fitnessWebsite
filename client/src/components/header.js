// client/src/components/Header.js
import React, { useEffect, useRef } from 'react';
import './header.css';


const Header = () => {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const menuBtnIcon = menuBtn.querySelector("i");

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };

    const handleNavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    menuBtn.addEventListener("click", handleMenuClick);
    navLinks.addEventListener("click", handleNavClick);

    // Cleanup event listeners on component unmount
    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      navLinks.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <header>
      <button id="menu-btn" ref={menuBtnRef}>
        <i className="ri-menu-line"></i>
      </button>
      <nav id="nav-links" ref={navLinksRef}>
        {/* Add your nav items here */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
