import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // This should now work after installation

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Zunayed. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/mdzunayed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/mdzunayed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
