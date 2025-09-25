import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Building a Rust Backend for pgmpy',
    date: 'August 15, 2025',
    excerpt: 'Exploring the challenges and solutions in developing a high-performance Rust backend for the pgmpy library, with multi-language bindings.'
  },
  {
    id: '2',
    title: 'Optimizing Customer Onboarding with Spring Boot',
    date: 'July 10, 2025',
    excerpt: 'How we reduced client setup time by 80% using Spring Boot and JPA at JP Morgan Chase.'
  },
  {
    id: '3',
    title: 'My Journey in Open Source',
    date: 'June 5, 2025',
    excerpt: 'Reflections on contributing to projects like Haystack, Twenty, and Streamlit.'
  },
];

const Blog = () => {
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
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  home
                </Link>
                <Link 
                  to="/blog"
                  className="text-sm text-text-primary font-medium"
                >
                  blog
                </Link>
                <Link 
                  to="/uses"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  uses
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
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
              <span className="text-sm text-text-secondary">
                London / SF
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-inter md:w-1/4">Blog</h2>
          <div className="md:w-3/4 space-y-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="group">
                <Link 
                  to={`/blog/${post.id}`}
                  className="block p-3 bg-surface-subtle hover:bg-surface-hover rounded-md border border-border transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-text-primary group-hover:text-text-accent transition-colors text-sm">{post.title}</h3>
                        <ExternalLink size={12} className="text-text-secondary group-hover:text-text-accent transition-colors" />
                      </div>
                      <p className="text-xs text-text-secondary mt-1">{post.date}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;