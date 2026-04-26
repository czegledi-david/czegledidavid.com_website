import Link from "next/link";

export default function Tutorials() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-10">
      
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Tutorials
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Részletes útmutatók technológiákról, telepítésekről és fejlesztési trükkökről.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <Link
          href="/tutorials/git-basics" 
          className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 text-2xl">
                🐙
              </div>
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors text-left">Git Alapok</h3>
                <p className="text-sm text-slate-400 mt-1">Verziókövetés és GitHub használat.</p>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
              &rarr;
            </div>
          </div>
        </Link>
        <Link
          href="/tutorials/linux-basics" 
          className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 text-2xl">
                🐧
              </div>
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors text-left">Linux alapok</h3>
                <p className="text-sm text-slate-400 mt-1">Alapvető Linux parancsok.</p>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
              &rarr;
            </div>
          </div>
        </Link>

        <Link
          href="/tutorials/network-exam" 
          className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 text-2xl">
                🌐
              </div>
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors text-left">Egyetemi Hálózatok</h3>
                <p className="text-sm text-slate-400 mt-1">Hálózati alapvizsga (Packet Tracer) megoldás.</p>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
              &rarr;
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}