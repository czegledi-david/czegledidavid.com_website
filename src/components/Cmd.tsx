type CmdProps = {
  children: string | string[];
};

export default function Cmd({ children }: CmdProps) {
  const lines = Array.isArray(children) ? children : [children];
  return (
    <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
      {lines.map((line, i) => {
        const [bin, ...rest] = line.trim().split(/\s+/);
        return (
          <p key={i}>
            <span className="text-cyan-400">{bin}</span>
            {rest.length > 0 && ` ${rest.join(" ")}`}
          </p>
        );
      })}
    </div>
  );
}
