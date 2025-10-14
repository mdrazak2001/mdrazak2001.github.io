import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const components = {
  h1: (props: any) => <h1 className="text-2xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold mb-3" {...props} />,
  p: (props: any) => <p className="mb-4 text-sm text-text-secondary" {...props} />,
  code: (props: any) => <code className="bg-surface-subtle px-1 py-0.5 rounded" {...props} />,
  pre: (props: any) => <pre className="bg-surface-subtle p-4 rounded-md mb-4 overflow-x-auto" {...props} />
};

export function MDXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}