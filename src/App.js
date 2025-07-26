import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Importing components
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
