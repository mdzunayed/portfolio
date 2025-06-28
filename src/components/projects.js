import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "DermaVision",
      description: "A web application that leverages explainable deep learning to detect skin cancer (melanoma) from dermoscopic images.",
      features: [
        "CNN-based skin cancer classification",
        "Explainable AI with Grad-CAM visualizations",
        "Flask backend with REST API"
      ],
      stack: ["Python", "matplotlib","Seabon","PyTorch", "React", "Flask", "TensorFlow", "OpenCV","HTML","CSS"],
      link: "https://github.com/mdzunayed/DermaVision",
      demo: "#"
    },
    {
      title: "Lung Cancer Classifier",
      description: "Machine learning system for histopathological lung cancer image classification.",
      features: [
        "Transfer learning with ResNet50",
        "Data augmentation techniques",
        "Accuracy of 92% on test set"
      ],
      stack: ["Python","NumPy","Pandas","TensorFlow", "Keras", "matplotlib","Seabon", "OpenCV"],
      link: "https://github.com/mdzunayed/Classifying-Lung-Cancer",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern responsive portfolio showcasing my work and skills.",
      features: [
        "Responsive design for all devices",
        "React-based components",
        "Smooth animations and transitions",
        "Project showcase with details"
      ],
      stack: ["React", "CSS", "JavaScript", "HTML"],
      link: "https://github.com/mdzunayed/portfolio",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-stack">
              <h4>Tech Stack:</h4>
              <div className="stack-tags">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;