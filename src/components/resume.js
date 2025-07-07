import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaEye,
} from "react-icons/fa";
import "./resume.css";

const Resume = () => {
  const handleDownload = () => {
    // Using the correct path to your resume in the public/files folder
    const pdfUrl = process.env.PUBLIC_URL + "/files/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Zunayed_Resume.pdf"; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Same path for viewing
    const pdfUrl = process.env.PUBLIC_URL + "/files/resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-actions">
        <button onClick={handleView} className="action-btn view-btn">
          <FaEye /> View PDF
        </button>
        <button onClick={handleDownload} className="action-btn download-btn">
          <FaFilePdf /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
