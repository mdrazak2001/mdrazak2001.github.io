import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Highlight home for exact match, blog for /blog or /blog/*
  const isHomeActive = location.pathname === '/';
  const isBlogActive = location.pathname.startsWith('/blog');

  // Set max-width based on route
  const navMaxWidth = isHomeActive ? 'max-w-2xl' : 'max-w-4xl';

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className={`${navMaxWidth} mx-auto px-4 py-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-lg font-medium text-text-primary font-poppins">razak</h1>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isHomeActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                home
              </Link>
              <Link 
                to="/blog"
                className={`text-sm font-medium transition-colors ${
                  isBlogActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
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
              <a 
                href="https://x.com/itisRazak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>

            {/* Mobile Navigation Links and Icons */}
            <div className="flex items-center space-x-2 md:hidden">
              <Link 
                to="/" 
                className={`p-1.5 text-sm font-medium transition-colors ${
                  isHomeActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
                aria-label="Home"
              >
                home
              </Link>
              <Link 
                to="/blog"
                className={`p-1.5 text-sm font-medium transition-colors ${
                  isBlogActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
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
              <a 
                href="https://x.com/itisRazak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
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