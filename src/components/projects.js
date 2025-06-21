import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "DermaVision",
      description: "DermaVision is a web application that leverages explainable deep learning to detect skin cancer (melanoma) from dermoscopic images.",
      link: "https://github.com/mdzunayed/DermaVision",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built with React.",
      link: "https://github.com/mdzunayed/portfolio",
    },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
