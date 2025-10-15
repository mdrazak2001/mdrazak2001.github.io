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

            {/* Mobile Navigation Links and Icons */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link 
                to="/" 
                className="p-1.5 text-sm text-text-primary transition-colors"
                aria-label="Home"
              >
                home
              </Link>
              <Link 
                to="/blog"
                className="p-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Blog"
              >
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
              <span className="text-xs text-text-secondary md:hidden">
                Bengaluru / Berlin
              </span>
            </div>
          </div>

          {/* Desktop Location Text */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-text-secondary hidden md:inline">
              Bengaluru / Berlin
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;