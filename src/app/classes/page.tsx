import Link from "next/link";

export default function Tananyagok() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-10">
      
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Tananyagok
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Az oktatási segédanyagok és projektek gyűjteménye tanévekre bontva.
        </p>
      </div>

      <section className="space-y-6">
        
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
            2025-2026
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <Link
            href="/classes/9a" 
            className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  <span className="text-2xl font-black text-cyan-400">9</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">Programozás 9.A</h3>
                  <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
                &rarr;
              </div>
            </div>
          </Link>

          <Link
            href="/classes/10a" 
            className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  <span className="text-2xl font-black text-cyan-400">10</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">Programozás 10.A</h3>
                  <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
                &rarr;
              </div>
            </div>
          </Link>

          <Link
            href="/classes/11a" 
            className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  <span className="text-2xl font-black text-cyan-400">11</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">Asztali Alk. 11.A</h3>
                  <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
                &rarr;
              </div>
            </div>
          </Link>

          <Link
            href="/classes/13a" 
            className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
                  <span className="text-2xl font-black text-cyan-400">13</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">Asztali Alk. 13.A</h3>
                  <p className="text-sm text-slate-400 mt-1">Órai anyagok és vizsgák</p>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-500/20 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
                &rarr;
              </div>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}