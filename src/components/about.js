import React from "react";
import "./about.css";
import {
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaTrophy,
  FaClipboardCheck,
  FaBrain,
  FaFileAlt,
  FaFacebook,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiKaggle,
  SiHuggingface,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I'm a passionate developer with expertise in Machine Learning, AI, and
          Competitive Programming. I love building innovative solutions to
          real-world problems and constantly challenge myself to grow as an
          engineer.
        </p>

      {/* Buttons for CV */}
        <div className="cv-buttons">
          <a href="/files/CV.pdf" download className="btn btn-download">
            Download CV
          </a>
        </div>

        <div className="profile-links">
          {/* Competitive Programming */}
          <div className="profile-column">
            <h3>Competitive Programming</h3>
            <ul>
              <li>
                <SiCodeforces />
                <a
                  href="https://codeforces.com/profile/Noob_Zunayed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Codeforces
                </a>
              </li>
              <li>
                <SiLeetcode />
                <a
                  href="https://leetcode.com/u/Md_Zunayed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <SiCodechef />
                <a
                  href="https://www.codechef.com/users/zunayed100"
                  target="_blank"
                  rel="noreferrer"
                >
                  CodeChef
                </a>
              </li>
              <li>
                <FaTrophy />
                <a
                  href="https://vjudge.net/user/Md_Zunayed"
                  target="_blank"
                  rel="noreferrer"
                >
                  VJudge
                </a>
              </li>
              <li>
                <FaCode />
                <a
                  href="https://atcoder.jp/users/zunayed_"
                  target="_blank"
                  rel="noreferrer"
                >
                  AtCoder
                </a>
              </li>
              
              <li>
              <FaClipboardCheck />
              <a
                href="https://cses.fi/user/195018"
                target="_blank"
                rel="noreferrer"
              >
                CSES
              </a>
            </li>
            </ul>
          </div>

          {/* ML & AI */}
          <div className="profile-column">
            <h3>ML & AI</h3>
            <ul>
              <li>
                <SiKaggle />
                <a
                  href="https://www.kaggle.com/mdzunayed02"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kaggle
                </a>
              </li>
              <li>
              <FaBrain />
              <a
                href="https://www.deep-ml.com/profile/ccfKkpcty4cRNvQzg5xgneiWnPi1"
                target="_blank"
                rel="noreferrer"
              >
                Deep-ML
              </a>
            </li>
            <li>
              <SiHuggingface />
              <a
                href="https://huggingface.co/zunayed02"
                target="_blank"
                rel="noreferrer"
              >
                Hugging Face
              </a>
            </li>
            <li>
              <FaFileAlt />
              <a
                href="https://paperswithcode.com/profile/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                Papers with Code
              </a>
            </li>
              </ul>
          </div>

          {/* Social & Contact */}
          <div className="profile-column">
            <h3>Social & Contact</h3>
            <ul>
              
              <li>
                <FaLinkedin />
                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                  <FaFacebook />
                  <a
                    href="https://www.facebook.com/zunayed002"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>

              <li>
                <FaTwitter />
                <a
                  href="https://x.com/mdzunayed_"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
