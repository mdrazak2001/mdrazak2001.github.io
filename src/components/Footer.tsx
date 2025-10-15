import React from 'react';
import { Github, Mail, Linkedin, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/20 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Mohammed Razak
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:mohammedrazak2001@gmail.com"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/mdrazak2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/marazakw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://x.com/itisRazak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="X"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://buymeacoffee.com/mohammedrap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-amber-600 hover:text-amber-700 transition-colors"
              aria-label="Buy me a coffee"
            >
              <Coffee size={14} />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;