import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Zunayed</h2>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={isMobile ? toggleMenu : null}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={isMobile ? toggleMenu : null}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={isMobile ? toggleMenu : null}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={isMobile ? toggleMenu : null}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={isMobile ? toggleMenu : null}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={isMobile ? toggleMenu : null}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
