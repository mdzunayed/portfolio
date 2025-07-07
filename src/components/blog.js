import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./blog.css";

const Blog = () => {
  const articles = [
    {
      title: "Deep Learning Model",
      problems: [
        {
          name: "MelXception: Skin Cancer Classification",
          description:
            "Xception-based deep learning model for melanoma detection, trained on Melanoma Skin Cancer Dataset of 10000 Images.",
          link: "https://www.kaggle.com/models/mdzunayed02/melxception",
        },
      ],
    },
    {
      title: "Leetcode Problem Solution",
      problems: [
        {
          name: " 204. Count Primes ",
          description: "Simple solution using Sieve of Eratosthenes in C++",
          link: "https://leetcode.com/problems/count-primes/solutions/5417288/simple-solution-by-using-sieve-of-eratos-kjzg/",
        },
      ],
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <div className="blog-grid">
          {articles.map((article, index) => (
            <div className="blog-post" key={index}>
              <h3>{article.title}</h3>
              <div className="problems-list">
                {article.problems.map((problem, i) => (
                  <div className="problem" key={i}>
                    <strong>Problem: </strong>
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {problem.name} <FaExternalLinkAlt className="link-icon" />
                    </a>
                    <br></br>
                    <span> {problem.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
