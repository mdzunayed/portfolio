import React from "react";
import "./hero.css";
import profilePic from "../assets/profile.jpg"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* Profile Image */}
        <img src={profilePic} alt="Zunayed" className="profile-pic" />

        <div className="inner-container">
            <h2>Hello! I'm <span className="highlight">Zunayed</span></h2>
            <h3>Problem Solver | <span className="star">2★</span> at CodeChef | ML & AI </h3>
            <h4>East West University</h4>
            <p>
            Passionate about Machine Learning & Artificial Intelligence, I actively participate in Kaggle competitions 
            and work with real-world datasets. My projects include explainable AI for mental disorder detection and 
            lung cancer classification using histopathological images.
            </p>
            <p>
            In addition to ML/AI, I have a good background in competitive programming, solved over  
            <strong> 1,400+ </strong> problems across various platforms like Leetcode, Codeforces, Codechef, AtCoder, Vjudge, CSES etc.
            </p>
            <p>
            My technical expertise includes C, C++, java, Python, NumPy, pandas, PyTorch, TensorFlow, Grad-Cam. I have build few Machine Learning projects.
            </p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
