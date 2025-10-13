import React from 'react';
import { Link, useParams } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: 'Building a Rust Backend for pgmpy',
    date: 'August 15, 2025',
    content: `
      In this post, I dive into the process of building a high-performance Rust backend for the pgmpy library, which focuses on probabilistic graphical models and causal inference. Rust's performance and safety guarantees made it an ideal choice for this project. I faced challenges in integrating Rust with Python via PyO3, but the results were worth it. This post covers the technical setup, key challenges, and lessons learned.
    `
  },
  {
    id: '2',
    title: 'Optimizing Customer Onboarding with Spring Boot',
    date: 'July 10, 2025',
    content: `
      At JP Morgan Chase, I worked on optimizing the customer onboarding process using Spring Boot and JPA. By designing efficient microservices, we reduced client setup time by 80%. This post discusses the architecture, key optimizations, and the impact on the business.
    `
  },
  {
    id: '3',
    title: 'My Journey in Open Source',
    date: 'June 5, 2025',
    content: `
      Contributing to open-source projects like Haystack, Twenty, and Streamlit has been a rewarding experience. This post reflects on my journey, the challenges of contributing to established projects, and tips for new contributors.
    `
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <main className="max-w-2xl mx-auto px-4 py-8">
          <h2 className="text-lg text-text-primary font-inter">Post Not Found</h2>
          <p className="text-xs text-text-secondary mt-1">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="text-sm text-text-accent hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
              <div className="max-w-2xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <h1 className="text-lg font-medium text-text-primary">razak</h1>
                    <div className="hidden md:flex items-center space-x-4">
                      <Link 
                        to="/" 
                        className="text-sm text-text-primary font-medium"
                      >
                        home
                      </Link>
                      <Link 
                        to="/blog"
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        blog
                      </Link>
                      {/* <Link 
                        to="/uses"
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        uses
                      </Link> */}
                    </div>
      
                    <span className="text-border/50 hidden md:inline">|</span>
                        
                    <a 
                      href="mailto:mohammedrazak2001@gmail.com" 
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      aria-label="Email"
                    >
                      email
                    </a>
                    <a 
                      href="https://github.com/mdrazak2001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      github
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    
                    <span className="text-sm text-text-secondary">
                      Bengaluru / Berlin
                    </span>
                  </div>
                </div>
              </div>
            </nav>
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-inter md:w-1/4">{post.title}</h2>
          <div className="md:w-3/4">
            <p className="text-xs text-text-secondary mb-4">{post.date}</p>
            <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">{post.content}</p>
            <Link to="/blog" className="text-sm text-text-accent hover:underline mt-4 inline-block">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;