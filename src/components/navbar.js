import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2> Zunayed's Portfolio</h2>
      <div className="nav-links">
        <ul>
          <li> <Link to="/">Home</Link></li>{}
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <section id="about"><li><Link to="/about">About</Link></li></section>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
