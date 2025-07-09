import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./blog.css";

const Blog = () => {
  const articles = [
    {
      title: "Machine Learning",
      problems: [
        {
          name: "MelXception - Cancer Classification",
          description:
            "Xception-based deep learning model for melanoma detection, trained on Melanoma Skin Cancer Dataset of 10000 Images.",
          link: "https://www.kaggle.com/models/mdzunayed02/melxception",
        },
        {
          name: "Lung Cancer Classification by CNN",
          description:
            "CNN-based deep learning model for lung cancer detection, trained on histopathological images to classify benign vs. malignant.",
          link: "https://www.kaggle.com/code/mdzunayed02/lung-cancer-classification-by-cnn",
        },
        {
          name: " Regression - House Price Prediction",
          description:
            "Linear regression model to predict house prices using feature engineering and ensemble techniques.",
          link: "https://www.kaggle.com/code/mdzunayed02/house-prices-advanced-regression-techniques1",
        },
      ],
    },
    {
      title: "Problem Solving",
      problems: [
        {
          name: " 204. Count Primes ",
          description: "Simple solution using Sieve of Eratosthenes in C++",
          link: "https://leetcode.com/problems/count-primes/solutions/5417288/simple-solution-by-using-sieve-of-eratos-kjzg/",
        },
        {
          name: " 7. Reverse Integer ",
          description:
            "Reverse Integer Solution (No Strings) | O(log₁₀N) Time | O(1) Space",
          link: "https://leetcode.com/problems/reverse-integer/solutions/6940337/reverse-integer-solution-no-strings-olog-7g50",
        },
        {
          name: " 189. Rotate Array ",
          description: "C++ | Rotate Array Using Deque (Simple)",
          link: "https://leetcode.com/problems/rotate-array/solutions/6940406/c-rotate-array-using-deque-simple-by-md_-munv",
        },
        {
          name: " 128. Longest Consecutive Sequence ",
          description:
            "C++ | Simple Sorting Solution | Longest Consecutive Subsequence",
          link: "https://leetcode.com/problems/longest-consecutive-sequence/solutions/6940483/c-simple-sorting-solution-longest-consec-is3w",
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
