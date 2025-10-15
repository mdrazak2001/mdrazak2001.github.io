import React, { Suspense, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Copy, Check, ChevronDown, ChevronUp, Github, Linkedin, Mail, ExternalLink, Coffee } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Code Block Component with Full Dark Theme
const CodeBlock = ({ children, className = '', ...props }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const language = className?.replace(/language-/, '') || 'text';
  const code = children?.props?.children || children;
  const codeString = typeof code === 'string' ? code : String(code);
  const lines = codeString.trim().split('\n');
  const isLongCode = lines.length > 15;
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString.trim());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Custom style adjustments for dark theme integration (fixed text shadow, adjusted text)
  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: 0,
      fontSize: '0.8125rem', // Slightly larger for better readability (13px)
      lineHeight: '1.5', // Adjusted line height for spacing
      textShadow: 'none',
      boxShadow: 'none',
      color: '#e5e7eb', // Lighter text for better contrast on dark bg
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
      fontSize: '0.8125rem',
      lineHeight: '1.5',
      textShadow: 'none',
      boxShadow: 'none',
      color: '#e5e7eb', // Consistent light text color
    },
    'code[class*="language-"] .token': {
      textShadow: 'none',
      color: 'inherit', // Inherit for token-specific colors
    },
  };

  return (
    <div className="my-6 rounded-lg border border-gray-600 bg-gray-900 overflow-hidden shadow-lg"> {/* Full dark container */}
      {/* Dark Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700"> {/* Dark header bg */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium text-blue-400 rounded border border-blue-600/30"> {/* Accent language tag */}
            {language.toUpperCase()}
          </span>
          {isLongCode && (
            <span className="text-xs text-gray-400"> {/* Light gray text */}
              {lines.length} lines
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {isLongCode && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
              aria-label={isCollapsed ? 'Expand code' : 'Collapse code'}
            >
              {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          )}
          
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            aria-label="Copy code"
          >
            {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      
      {/* Code content with syntax highlighting */}
      <div 
        className={`overflow-x-auto transition-all duration-300 relative ${
          isCollapsed ? 'max-h-60' : 'max-h-none'
        }`}
      >
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          PreTag="div"
          showLineNumbers={true}
          lineNumberStyle={{ 
            color: '#9ca3af', // Gray line numbers
            minWidth: '2.5em',
            paddingRight: '1em',
            textAlign: 'right',
            userSelect: 'none',
            textShadow: 'none',
            background: 'transparent',
          }}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent', // Transparent to show dark container
            fontSize: '0.8125rem',
            lineHeight: '1.5',
            textShadow: 'none',
            boxShadow: 'none',
            color: '#e5e7eb', // Light text base color
          }}
          codeTagProps={{
            style: {
              fontSize: '0.8125rem',
              lineHeight: '1.5',
              textShadow: 'none',
              boxShadow: 'none',
              color: '#e5e7eb',
            }
          }}
        >
          {codeString}
        </SyntaxHighlighter>
        
        {/* Dark gradient overlay when collapsed */}
        {isCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        )}
      </div>
      
      {/* Dark footer for expand */}
      {isCollapsed && (
        <div className="px-4 py-2 bg-gray-800 border-t border-gray-700"> {/* Dark footer */}
          <button
            onClick={() => setIsCollapsed(false)}
            className="w-full text-xs text-gray-400 hover:text-white transition-colors"
          >
            Show {lines.length - 10} more lines
          </button>
        </div>
      )}
    </div>
  );
};

// Inline code component (kept light for contrast)
const InlineCode = ({ children, ...props }: any) => {
  return (
    <code 
      className="px-1.5 py-0.5 bg-surface-subtle text-text-accent rounded text-xs font-mono border border-border/20"
      {...props}
    >
      {children}
    </code>
  );
};

// MDX Components
const components = {
  h1: (props: any) => (
    <div className="relative group">
      <h1 
        className="font-sora text-4xl font-black mb-4 tracking-tight bg-gradient-to-r from-text-primary via-text-accent to-text-primary/70 bg-clip-text hover:scale-105 transition-all duration-300 animate-pulse-slow" 
        {...props} 
      />
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-text-accent to-transparent rounded-full group-hover:w-full transition-all duration-500" />
    </div>
  ),
  h2: (props: any) => <h2 className="font-sora text-xl font-bold mb-3 text-text-primary mt-8" {...props} />,
  h3: (props: any) => <h3 className="font-sora text-lg font-semibold mb-2 text-text-primary mt-6" {...props} />,
  h4: (props: any) => <h4 className="font-sora text-base font-semibold mb-2 text-text-primary mt-4" {...props} />,
  p: (props: any) => <p className="font-poppins mb-4 text-sm text-text-secondary leading-relaxed" {...props} />,
  code: InlineCode,
  pre: (props: any) => {
    // Extract className from code element
    const className = props?.children?.props?.className || '';
    return (
      <CodeBlock className={className}>
        {props.children}
      </CodeBlock>
    );
  },
  a: (props: any) => <a className="text-text-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
  img: (props: any) => <img className="w-full rounded-lg my-6 border border-border/20" {...props} />,
  video: (props: any) => <video className="w-full rounded-lg my-6" controls {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-text-accent pl-4 italic my-6 text-text-secondary bg-surface-subtle py-2 rounded-r" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc ml-6 mb-4 space-y-2 text-sm text-text-secondary" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6 mb-4 space-y-2 text-sm text-text-secondary" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-border/30 rounded-lg" {...props} />
    </div>
  ),
  th: (props: any) => <th className="bg-surface-hover px-4 py-2 text-left text-xs font-semibold text-text-primary border-b border-border/30" {...props} />,
  td: (props: any) => <td className="px-4 py-2 text-xs text-text-secondary border-b border-border/20" {...props} />,
};

const BlogPost = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="min-h-screen bg-background font-inter">
        <Navbar />

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
    PostComponent = React.lazy(() => import(`../content/blogs/${id}.mdx`));
  } catch (error) {
    console.error(`Failed to load MDX for id ${id}:`, error);
    return (
      <div className="min-h-screen bg-background font-inter">
        <Navbar />
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
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="prose prose-sm max-w-none">
            <MDXProvider components={components}>
              <Suspense fallback={<p className="text-xs text-text-secondary">Loading post...</p>}>
                <PostComponent />
              </Suspense>
            </MDXProvider>
            <Link to="/blog" className="text-sm text-text-accent hover:underline mt-8 inline-block">
              ← Back to Blog
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default BlogPost;