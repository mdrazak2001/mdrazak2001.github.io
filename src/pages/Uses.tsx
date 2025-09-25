import React from 'react';
import { Link } from 'react-router-dom';

const Uses = () => {
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
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  blog
                </Link>
                <Link 
                  to="/uses"
                  className="text-sm text-text-primary font-medium"
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
          <h2 className="text-lg text-text-primary font-inter md:w-1/4">Uses</h2>
          <div className="md:w-3/4">
            <p className="text-xs text-text-secondary leading-relaxed">
              This page will list the tools, technologies, and setups I use for development and productivity. Coming soon!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Uses;