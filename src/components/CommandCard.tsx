import type { ReactNode } from "react";

type CommandCardProps = {
  command: string;
  arg?: string;
  children: ReactNode;
};

export default function CommandCard({ command, arg, children }: CommandCardProps) {
  return (
    <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
      <h2 className="text-2xl font-bold font-mono mb-4 text-white">
        <span className="text-cyan-400">{command}</span>
        {arg && <> <span className="text-slate-500">{arg}</span></>}
      </h2>
      {children}
    </div>
  );
}

export function FlagList({ children }: { children: ReactNode }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none mt-4 p-0">
      {children}
    </ul>
  );
}

type FlagProps = {
  flag: string;
  children: ReactNode;
};

export function Flag({ flag, children }: FlagProps) {
  return (
    <li className="flex items-start gap-3">
      <code className="shrink-0 font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded text-sm min-w-[2.5rem] text-center">
        {flag}
      </code>
      <span className="text-sm text-slate-400 pt-1">{children}</span>
    </li>
  );
}
