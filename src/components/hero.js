import React from "react";
import "./hero.css";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Profile Image on the Left */}
      <img src={profilePic} alt="Zunayed" className="profile-pic" />
      {/* Text Content on the Right */}
      <div className="container">
        <div className="inner-container">
          <h2>
            Hello! I'm <span className="highlight">Zunayed</span>
          </h2>
          <h3>Competitive Programmer | ML & AI </h3>
          <h4>East West University</h4>
          <p>
            Aspiring Machine Learning Engineer with a solid foundation in
            competitive programming and experience building and deploying ML
            models using Kaggle competitions, Hugging Face Transformers, and
            deep learning frameworks like TensorFlow and PyTorch. Passionate
            about applying AI to solve real-world problems and eager to
            contribute to innovative projects in a dynamic environment that
            values continuous learning and growth. My projects include
            explainable AI for mental disorder detection and lung cancer
            classification using histopathological images and skin cancer.
          </p>
          <p>
            In addition to ML/AI, I have a good background in competitive
            programming, I have solved over
            <strong> 1,500+ </strong> problems across various platforms like
            Leetcode, Codeforces, Codechef, AtCoder, Vjudge, CSES etc.
          </p>
          <p>
            My technical expertise includes C, C++, OOP, java, Python, NumPy,
            pandas, PyTorch, TensorFlow, Grad-Cam. I have build few Machine
            Learning projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
