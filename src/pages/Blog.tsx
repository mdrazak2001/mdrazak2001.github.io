import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Coffee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Get all MDX files
const modules = import.meta.glob('../content/blogs/*.mdx', { 
  eager: true 
});

console.log('All modules:', modules);

// Parse the modules to extract frontmatter
const blogPosts = Object.entries(modules).map(([path, module]) => {
  const fileName = path.split('/').pop()?.replace('.mdx', '') || '';
  
  // Check what properties are available on the module
  const moduleAny = module as any;
  console.log(`Module ${fileName}:`, moduleAny);
  
  // Try to get frontmatter from various possible locations
  const frontmatter = moduleAny.frontmatter || 
                     moduleAny.metadata || 
                     moduleAny.attributes ||
                     {};

  return {
    id: fileName,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || 'Unknown date',
    excerpt: frontmatter.excerpt || 'No excerpt available',
  };
});

// Manual posts as fallback
const manualPosts = [
  {
    id: '1',
    title: 'Building Multiplayer Tic-Tac-Toe with Nakama',
    date: '2025-10-14',
    excerpt: 'Exploring real-time multiplayer gameplay, matchmaking, and leaderboards using Nakama, React Native, Go, and PostgreSQL.'
  }
];

// Use manual posts since frontmatter extraction isn't working
const postsToDisplay = manualPosts;

const Blog = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-sora md:w-1/4">Blog</h2>
          <div className="md:w-3/4 space-y-6">
            {postsToDisplay.map((post) => (
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
                      <p className="text-xs text-text-secondary mt-1 font-extralight">{post.date}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed font-extralight">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      
      </main>
    </div>
  );
};

export default Blog;