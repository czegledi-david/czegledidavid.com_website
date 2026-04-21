import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-cyan-400 mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-300 leading-relaxed">{children}</p>
    ),
    code: ({ children }) => (
      <code className="text-cyan-400 font-mono text-[0.95em]">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto text-slate-200 [&_code]:text-slate-200">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-300">
        {children}
      </ol>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-cyan-400 hover:text-white transition-colors underline"
      >
        {children}
      </a>
    ),
    ...components,
  };
}
