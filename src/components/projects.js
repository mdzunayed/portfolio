import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import "./projects.css";
// Import your project images
import dermavisionImg from "./projects_image/dermavision.png";
import dermavisionImg1 from "./projects_image/dermavision1.png";
import lungCancerImg from "./projects_image/lung-cancer1.png";
import lungCancerImg2 from "./projects_image/lung-cancer2.png";
import lungCancerImg3 from "./projects_image/lung-cancer3.png";
import lungCancerImg4 from "./projects_image/lung-cancer4.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      title: "DermaVision",
      images: [dermavisionImg, dermavisionImg1],
      description:
        "A web application that leverages explainable deep learning to detect skin cancer (melanoma) from dermoscopic images.",
      features: [
        "CNN-based skin cancer classification",
        "Explainable AI with Grad-CAM visualizations",
        "Flask backend with REST API",
      ],
      stack: {
        Frontend: ["React", "HTML", "CSS"],
        Backend: ["Flask", "Python"],
        "ML/DL": ["PyTorch", "TensorFlow", "OpenCV"],
        Visualization: ["matplotlib", "Grad-CAM"],
      },
      link: "https://github.com/mdzunayed/DermaVision",
      demo: "#",
    },
    {
      title: "Lung Cancer Classifier",
      images: [lungCancerImg, lungCancerImg2, lungCancerImg4, lungCancerImg3],
      description:
        "Machine learning system for histopathological lung cancer image classification.",
      features: [
        "Transfer learning with ResNet50",
        "Data augmentation techniques",
        "Accuracy of 92% on test set",
      ],
      stack: {
        Core: ["Python", "NumPy", "Pandas"],
        "Deep Learning": ["TensorFlow", "Keras"],
        Visualization: ["matplotlib", "OpenCV"],
      },
      link: "https://github.com/mdzunayed/Classifying-Lung-Cancer",
      demo: "#",
    },
  ];

  // Initialize current image index for each project
  projects.forEach((project, index) => {
    if (!currentImageIndex.hasOwnProperty(index)) {
      setCurrentImageIndex((prev) => ({ ...prev, [index]: 0 }));
    }
  });

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        (prev[projectIndex] + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        (prev[projectIndex] - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <FaCode className="section-icon" />
          Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="image-carousel">
                  <img
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={`${project.title} ${currentImageIndex[index] + 1}`}
                    className="project-image"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-btn prev"
                        onClick={() => prevImage(index)}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="carousel-btn next"
                        onClick={() => nextImage(index)}
                        aria-label="Next image"
                      >
                        <FaChevronRight />
                      </button>
                      <div className="image-counter">
                        {currentImageIndex[index] + 1}/{project.images.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="project-title-wrapper">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="tech-icons">
                    {project.icons?.map((icon, i) => (
                      <span key={i} className="tech-icon" title={icon.label}>
                        {icon.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="subsection-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-stack">
                  <h4 className="subsection-title">Tech Stack</h4>
                  <div className="stack-container">
                    {Object.entries(project.stack).map(
                      ([category, technologies]) => (
                        <div key={category} className="stack-category">
                          <h5 className="stack-category-title">{category}</h5>
                          <div className="stack-tags">
                            {technologies.map((tech, i) => (
                              <span key={i} className="stack-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code-link"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
