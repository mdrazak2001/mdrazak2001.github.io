import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => <h1 className="text-2xl font-bold mb-4 text-text-primary" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold mb-3 text-text-primary" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-semibold mb-2 text-text-primary" {...props} />,
  h4: (props: any) => <h4 className="text-base font-semibold mb-2 text-text-primary" {...props} />,
  p: (props: any) => <p className="mb-4 text-sm text-text-secondary leading-relaxed" {...props} />,
  code: (props: any) => <code className="bg-surface-subtle px-1 py-0.5 rounded text-xs font-mono" {...props} />,
  pre: (props: any) => (
    <pre className="bg-surface-subtle p-4 rounded-md mb-4 overflow-x-auto text-xs font-mono">
      {props.children}
    </pre>
  ),
  a: (props: any) => <a className="text-text-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
  video: (props: any) => <video className="w-full rounded-md mt-4" controls {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-text-accent pl-4 italic my-4" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6 mb-4" {...props} />,
};

const BlogPost = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <h1 className="text-lg font-medium text-text-primary">razak</h1>
                <div className="hidden md:flex items-center space-x-4">
                  <Link to="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">home</Link>
                  <Link to="/blog" className="text-sm text-text-primary font-medium">blog</Link>
                </div>
                <span className="text-border/50 hidden md:inline">|</span>
                <a href="mailto:mohammedrazak2001@gmail.com" className="text-sm text-text-secondary hover:text-text-primary transition-colors">email</a>
                <a href="https://github.com/mdrazak2001" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">github</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-text-secondary">Bengaluru / Berlin</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-lg text-text-primary font-inter">Post Not Found</h2>
            <p className="text-xs text-text-secondary mt-1">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-sm text-text-accent hover:underline mt-4 inline-block">Back to Blog</Link>
          </section>
        </main>
      </div>
    );
  }

  let PostComponent;
  try {
    // FIXED: Absolute path for compiled MDX component (no ?raw, strips frontmatter)
    PostComponent = React.lazy(() => import(`../content/blogs/${id}.mdx`));
    console.log(`Attempting to load /src/content/blogs/${id}.mdx`); // DEBUG
  } catch (error) {
    console.error(`Failed to load MDX for id ${id}:`, error); // DEBUG
    return (
      <div className="min-h-screen bg-background font-inter">
        <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <h1 className="text-lg font-medium text-text-primary">razak</h1>
                <div className="hidden md:flex items-center space-x-4">
                  <Link to="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">home</Link>
                  <Link to="/blog" className="text-sm text-text-primary font-medium">blog</Link>
                </div>
                <span className="text-border/50 hidden md:inline">|</span>
                <a href="mailto:mohammedrazak2001@gmail.com" className="text-sm text-text-secondary hover:text-text-primary transition-colors">email</a>
                <a href="https://github.com/mdrazak2001" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">github</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-text-secondary">Bengaluru / Berlin</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-lg text-text-primary font-inter">Post Not Found</h2>
            <p className="text-xs text-text-secondary mt-1">Sorry, the blog post you're looking for doesn't exist (file load error).</p>
            <Link to="/blog" className="text-sm text-text-accent hover:underline mt-4 inline-block">Back to Blog</Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3">
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
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="prose prose-sm max-w-none text-text-secondary">
            <MDXProvider components={components}>
              <Suspense fallback={<p className="text-xs text-text-secondary">Loading post...</p>}>
                <PostComponent />
              </Suspense>
            </MDXProvider>
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