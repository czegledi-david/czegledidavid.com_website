import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-6 space-y-8">
      
      <div className="space-y-4">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 drop-shadow-lg">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <span className="text-cyan-400">Oldal nem található</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
          </p>
        </div>
      </div>

    </div>
  );
}