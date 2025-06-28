import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaEye } from "react-icons/fa";
import "./resume.css";

const Resume = () => {
  const handleDownload = () => {
    // Using the correct path to your resume in the public/files folder
    const pdfUrl = process.env.PUBLIC_URL + '/files/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Zunayed_Resume.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Same path for viewing
    const pdfUrl = process.env.PUBLIC_URL + '/files/resume.pdf';
    window.open(pdfUrl, '_blank');
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

      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <h1>MD ZUNAYED</h1>
          <div className="contact-info">
            <span><FaPhone /> +8801888745886</span>
            <span><FaEnvelope /> <a href="mailto:md.zunayed02@gmail.com">md.zunayed02@gmail.com</a></span>
            <span><FaLinkedin /> <a href="https://www.linkedin.com/in/mdzunayed002" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span><FaGithub /> <a href="https://github.com/mdzunayed" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </header>

        {/* Experience Section */}
        <section className="resume-section">
          <h2>EXPERIENCE</h2>
          
          <div className="subsection">
            <div className="subsection-header">
              <h3>Competitive Programming, Machine Learning, Kaggle Competitions</h3>
              <span className="duration">2021 — Current</span>
            </div>
            
            <div className="subsection-content">
              <h4>Competitive Programming</h4>
              <div className="divider"></div>
              <ul>
                <li><strong>LeetCode:</strong> <a href="https://leetcode.com/u/Md_Zunayed/" target="_blank" rel="noopener noreferrer">Md_Zunayed</a> (Max Rating: 1510, Solved: 90)</li>
                <li><strong>CodeChef:</strong> <a href="https://www.codechef.com/users/Zunayed100" target="_blank" rel="noopener noreferrer">Zunayed100</a> (Max Rating: 1420, Solved: 145)</li>
                <li><strong>Codeforces:</strong> <a href="https://codeforces.com/profile/noob_zunayed" target="_blank" rel="noopener noreferrer">noob_zunayed</a> (Max Rating: 1064, Solved: 683)</li>
                <li><strong>Vjudge:</strong> <a href="https://vjudge.net/user/Md_Zunayed" target="_blank" rel="noopener noreferrer">Md_Zunayed</a> (Solved: 330)</li>
                <li><strong>AtCoder:</strong> <a href="https://atcoder.jp/users/zonayed" target="_blank" rel="noopener noreferrer">zonayed</a> (Max Rating: 73)</li>
                <li><strong>CSES:</strong> <a href="https://cses.fi/user/195018" target="_blank" rel="noopener noreferrer">zunayed_</a></li>
              </ul>
            </div>
            
            <div className="subsection-content">
              <h4>Machine Learning and AI</h4>
              <div className="divider"></div>
              <ul>
                <li>Designed a machine learning project for lung cancer classification using histopathological images</li>
                <li>Developed a CNN-based multi-class skin cancer detection system using dermoscopic images (ISIC 2019)</li>
                <li>Built a Flask web app (<a href="https://github.com/mdzunayed/DermaVision" target="_blank" rel="noopener noreferrer">DermaVision</a>) for real-time analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="resume-section">
          <h2>TECHNICAL SKILLS</h2>
          <div className="skills-table">
            <div className="table-row">
              <div className="table-cell"><strong>Programming:</strong></div>
              <div className="table-cell">C++, C, Python, Java, MATLAB, SQL</div>
            </div>
            <div className="table-row">
              <div className="table-cell"><strong>Machine Learning:</strong></div>
              <div className="table-cell">PyTorch, TensorFlow, NumPy, Pandas, Scikit-learn</div>
            </div>
            <div className="table-row">
              <div className="table-cell"><strong>Tools:</strong></div>
              <div className="table-cell">GitHub, VS Code, CodeBlocks, Jupyter Notebook, Kaggle Notebooks, Google Colab</div>
            </div>
          </div>
        </section>

        {/* Research Interests Section */}
        <section className="resume-section">
          <h2>RESEARCH INTERESTS</h2>
          <div className="interests-table">
            <div className="table-row">
              <div className="table-cell"><strong>AI & Machine Learning</strong></div>
              <div className="table-cell"><strong>Natural Language Processing</strong></div>
            </div>
            <div className="table-row">
              <div className="table-cell"><strong>Explainable AI</strong></div>
              <div className="table-cell"><strong>Deep Learning Optimization</strong></div>
            </div>
          </div>
        </section>

        {/* Academic Credentials Section */}
        <section className="resume-section">
          <h2>ACADEMIC CREDENTIALS</h2>
          <div className="subsection">
            <div className="subsection-header">
              <h3>B.Sc in Computer Science and Engineering</h3>
              <span className="duration">2021 — Current</span>
            </div>
            <div className="subsection-content">
              <p>East West University, Dhaka, Bangladesh</p>
              <ul>
                <li>Machine Learning, AI and Image Processing</li>
                <li>Engaged in research projects related to medical AI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="resume-section">
          <h2>PUBLICATIONS</h2>
          <ul>
            <li>In preparation: Explainable AI in Mental Disorder Detection by Multi-modal Data Fusion</li>
          </ul>
        </section>

        {/* Honors Section */}
        <section className="resume-section">
          <h2>HONORS</h2>
          <ul>
            <li><strong>4<sup>th</sup> Place – Rookie Code Clash (Final Round):</strong> <a href="https://vjudge.net/contest/666593#rank" target="_blank" rel="noopener noreferrer">View Rank</a></li>
            <li><strong>Top 20% Finisher in Multiple Competitive Programming Contests</strong></li>
            <li><strong>Kaggle Competitions Contributor</strong></li>
            <li><strong>Top 41% Global Rating on LeetCode</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;