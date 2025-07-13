import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaCode,
  FaChartLine,
  FaBookOpen,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaTag,
  FaDatabase,
  FaGithub,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";
import "./blog.css";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const articles = [
    {
      id: "ml-projects",
      title: "Machine Learning",
      icon: <FaChartLine className="category-icon" />,
      type: "project",
      problems: [
        {
          name: "MelXception - Skin Cancer Classification",
          description:
            "Developed an Xception-based deep learning model achieving 92.3% accuracy in melanoma detection from dermatoscopic images.",

          links: [
            {
              url: "https://www.kaggle.com/models/mdzunayed02/melxception",
              icon: <FaExternalLinkAlt />,
              text: "View model",
            },
            {
              url: "https://www.kaggle.com/datasets/hasnainjaved/melanoma-skin-cancer-dataset-of-10000-images",
              icon: <FaDatabase />,
              text: "Dataset",
            },
          ],
          tags: [
            "Deep Learning",
            "Medical AI",
            "Computer Vision",
            "TensorFlow",
          ],
          date: "June 2025",
          featured: false,
          metrics: {
            accuracy: "92.3%",
            F1_Score: "0.9265",
            framework: "TensorFlow 2.0",
          },
          details: {
            Approach:
              "Fine-tuned Xception architecture with transfer learning, data augmentation, and class weighting to handle imbalance",
            Results:
              "Achieved 89% accuracy and 0.91 AUC, outperforming baseline CNNs like ResNet50 and VGG16",
          },
        },
        {
          name: "Lung Cancer Histopathology Analysis",
          description:
            "CNN model achieving 89.1% F1-score in classifying malignant vs benign lung tissue samples.",
          links: [
            {
              url: "https://www.kaggle.com/code/mdzunayed02/lung-cancer-classification-by-cnn/notebook",
              icon: <FaExternalLinkAlt />,
              text: "View Notebook",
            },
            {
              url: "https://www.kaggle.com/datasets/rm1000/lung-cancer-histopathological-images",
              icon: <FaDatabase />,
              text: "Dataset",
            },
            {
              url: "https://github.com/mdzunayed/Classifying-Lung-Cancer",
              icon: <FaGithub />,
              text: "GitHub",
            },
          ],
          tags: ["CNN", "Healthcare", "Keras"],
          date: "January 2025",
          metrics: {
            accuracy: "96.88%",
            visualization: "Grad-Cam",
            activation: "Relu & Softmax",
            framework: "Keras",
          },
          details: {
            Approach:
              "Implemented a custom CNN + transfer learning (VGG16, ResNet50) with Grad-CAM for explainability",
            Results:
              "Achieved 96.5% test accuracy with ResNet50, outperforming VGG16 (94.2%) and custom CNN (96.88%)",
          },
        },
        {
          name: "House Prices - Regression Techniques",
          description:
            "Ensemble regression model with feature engineering that reduced MAE by 32% compared to baseline.",
          links: [
            {
              url: "https://www.kaggle.com/code/mdzunayed02/house-prices-advanced-regression-techniques1",
              icon: <FaExternalLinkAlt />,
              text: "View Notebook",
            },
            {
              url: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques/data",
              icon: <FaDatabase />,
              text: "Dataset",
            },
          ],
          tags: ["Regression", "Scikit-learn", "Feature Engineering"],
          date: "March 2024",
          metrics: {
            accuracy: "0.89 R²",
            features: "79 engineered",
            technique: "Stacked Ensemble",
          },
          details: {
            Challenge:
              "Predicting house sale prices using 79 explanatory features (numerical & categorical)",
            Approach:
              "Ensemble of XGBoost, LightGBM, and CatBoost with feature engineering and hyperparameter tuning",
            Results: "Achieved RMSE of 0.122 (top 35% on Kaggle leaderboard)",
          },
        },
      ],
    },
    {
      id: "algorithms",
      title: "Problem Solving",
      icon: <FaCode className="category-icon" />,
      type: "algorithm",
      problems: [
        {
          name: "Count Primes (LeetCode #204)",
          description: "Optimized Sieve of Eratosthenes implementation.",
          links: [
            {
              url: "https://leetcode.com/problems/count-primes/description/",
              icon: <FaExternalLinkAlt />,
              text: "view problem",
            },
            {
              url: "https://leetcode.com/problems/count-primes/solutions/5417288/simple-solution-by-using-sieve-of-eratos-kjzg/",
              icon: <FaLightbulb />,
              text: "Solution",
            },
          ],
          tags: ["Algorithms", "Math", "Optimization", "C++"],
          date: "June 2024",
          featured: false,
          metrics: {
            time_complexity: "O(nlog(log(n)))",
            Space_complexity: "O(N)",
            language: "C++",
          },
        },
        {
          name: "Reverse Integer (LeetCode #7)",
          description:
            "Mathematical solution without string conversion handling all edge cases.",
          links: [
            {
              url: "https://leetcode.com/problems/reverse-integer/description/",

              icon: <FaExternalLinkAlt />,
              text: "view problem",
            },
            {
              url: "https://leetcode.com/problems/reverse-integer/solutions/6940337/reverse-integer-solution-no-strings-olog-7g50/",
              icon: <FaLightbulb />,
              text: "Solution",
            },
          ],
          tags: ["Math", "Number Theory", "C++"],
          date: "July 2025",
          metrics: {
            time_complexity: "O(log₁₀N)",
            Space_complexity: "O(1)",
            language: "C++",
          },
        },
        {
          name: "Rotate Array (LeetCode #189)",
          description:
            "Three different approaches including deque, reversal, and cyclic replacement.",
          links: [
            {
              url: "https://leetcode.com/problems/rotate-array/description/",
              icon: <FaExternalLinkAlt />,
              text: "view problem",
            },
            {
              url: "https://leetcode.com/problems/rotate-array/solutions/6940406/c-rotate-array-using-deque-simple-by-md_-munv/",
              icon: <FaLightbulb />,
              text: "Solution",
            },
          ],
          tags: ["Data Structures", "Arrays", "C++"],
          date: "July 2025",
          metrics: {
            time_complexity: "O(K * N)",
            Space_complexity: "O(N)",
            language: "C++",
          },
        },
        {
          name: "Longest Consecutive Sequence (LeetCode #128)",
          description: "Simple Sorting Solution.",
          links: [
            {
              url: "https://leetcode.com/problems/longest-consecutive-sequence/description/",
              icon: <FaExternalLinkAlt />,
              text: "view problem",
            },
            {
              url: "https://leetcode.com/problems/longest-consecutive-sequence/solutions/6940483/c-simple-sorting-solution-longest-consec-is3w/",
              icon: <FaLightbulb />,
              text: "Solution",
            },
          ],
          tags: ["Graph", "Union-Find", "C++"],
          date: "July 2025",
          metrics: {
            time_complexity: "O(N log(N))",
            Space_complexity: "O(1)",
            language: "C++",
          },
        },
      ],
    },
  ];

  const allTags = Array.from(
    new Set(
      articles.flatMap((article) =>
        article.problems.flatMap((problem) => problem.tags)
      )
    )
  );

  const filteredArticles = articles
    .filter(
      (article) => activeFilter === "all" || article.type === activeFilter
    )
    .map((article) => ({
      ...article,
      problems: article.problems
        .filter(
          (problem) =>
            problem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            problem.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            problem.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    }))
    .filter((article) => article.problems.length > 0)
    .sort((a, b) => {
      const newestDateA = new Date(a.problems[0].date);
      const newestDateB = new Date(b.problems[0].date);
      return newestDateB - newestDateA;
    });

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">
            <FaBookOpen className="section-icon" /> Technical Writings
          </h2>
          <div className="controls">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              <button
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>
              <button
                className={activeFilter === "algorithm" ? "active" : ""}
                onClick={() => setActiveFilter("algorithm")}
              >
                Problem Solving
              </button>
              <button
                className={activeFilter === "project" ? "active" : ""}
                onClick={() => setActiveFilter("project")}
              >
                Machine Learning
              </button>
            </div>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="no-results">
            <h3>No matching articles found</h3>
            <p>Try adjusting your search</p>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredArticles.map((article) => (
              <div className="blog-category" key={article.id}>
                <h3 className="category-title">
                  {article.icon} {article.title}
                </h3>
                <div className="problems-list">
                  {article.problems.map((problem) => (
                    <div
                      className={`problem-card ${
                        problem.featured ? "featured" : ""
                      }`}
                      key={problem.name}
                    >
                      <div className="problem-header">
                        <div>
                          <h4 className="problem-title">{problem.name}</h4>
                          <div className="problem-meta">
                            <span className="problem-date">
                              <FaCalendarAlt /> {problem.date}
                            </span>
                            <div className="tags">
                              {problem.tags.map((tag) => (
                                <span key={tag} className="tag">
                                  <FaTag /> {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {problem.featured && (
                          <span className="featured-badge">Featured</span>
                        )}
                      </div>

                      <p className="problem-description">
                        {problem.description}
                      </p>

                      {/* Links Section */}
                      <div className="links-container">
                        {problem.links?.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-button"
                          >
                            {link.icon} {link.text}
                          </a>
                        ))}
                      </div>

                      {/* Metrics Section */}
                      {problem.metrics && (
                        <div className="metrics-section">
                          {/* <h5 className="metrics-title">Key Metrics</h5> */}
                          <div className="metrics-grid">
                            {Object.entries(problem.metrics).map(
                              ([key, value]) => (
                                <div className="metric" key={key}>
                                  <div className="metric-label">{key}</div>
                                  <div className="metric-value">{value}</div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Details Section */}
                      {problem.details && (
                        <div className="details-section">
                          {/* <h5 className="details-title">Project Details</h5> */}
                          <ul className="details-list">
                            {Object.entries(problem.details).map(
                              ([key, value]) => (
                                <li key={key}>
                                  <strong>{key}:</strong> {value}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
