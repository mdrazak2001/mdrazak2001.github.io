import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-lg font-medium text-text-primary font-poppins">razak</h1>
            
            {/* Desktop Navigation Links */}
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

              <span className="text-border/50">|</span>
                  
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

            {/* Mobile Navigation Icons */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link 
                to="/" 
                className="p-1.5 text-text-primary transition-colors"
                aria-label="Home"
              >
                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg> */}
                home
              </Link>
              <Link 
                to="/blog"
                className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Blog"
              >
                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg> */}
                blog
              </Link>
              
              <span className="text-border/50">|</span>
              
              <a 
                href="mailto:mohammedrazak2001@gmail.com" 
                className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a 
                href="https://github.com/mdrazak2001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm text-text-secondary sm:inline">
              Bengaluru / Berlin
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;