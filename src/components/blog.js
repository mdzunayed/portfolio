import React from "react";
import "./blog.css";

const Blog = () => {
    return (
            
            <section className="blog-section">
                <div className="container">
                    <h2 className="section-title">Latest Articles</h2>
                    <div className="blog">
                        <div className="blog-post">
                            <h3>Leetcode Problem Solution</h3>
                            <p>
                                <strong>Problem:</strong>
                                <a href="https://leetcode.com/problems/count-primes/solutions/5417288/simple-solution-by-using-sieve-of-eratos-kjzg/" target="_blank" rel="noopener noreferrer">
                                    204. Count Primes
                                </a>
                                [Simple solution using Sieve of Eratosthenes in C++].
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default Blog;
