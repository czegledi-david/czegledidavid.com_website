import Link from "next/link";

export default function TizedikA() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-10 px-4">
      
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6">
        <Link 
          href="/classes" 
          className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit mb-2 text-sm"
        >
          &larr; Vissza a tananyagokhoz
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Programozás alapok 10.A
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Órai vázlatok, letölthető segédanyagok és feladatok.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
            Ágazati Alapvizsga Feladatok
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300 overflow-hidden md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800/50 group-hover:scale-110 group-hover:border-yellow-500/30 transition-all duration-300 text-3xl">
                  🐍
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-yellow-500 transition-colors">Programozás (Python)</h3>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl">Adatbeolvasás fájlból, összetett algoritmusok és fájlba írás feladatok a 2025-ös követelményeknek megfelelően.</p>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <span className="px-5 py-2.5 bg-slate-800/50 text-slate-500 border border-slate-700/50 rounded-xl text-sm font-semibold cursor-not-allowed">
                  Feladatlap (Hamarosan...)
                </span>
                <span className="px-5 py-2.5 bg-slate-800/50 text-slate-500 border border-slate-700/50 rounded-xl text-sm font-semibold cursor-not-allowed">
                  Megoldás (Készül...)
                </span>
              </div>
            </div>
          </div>

          <div className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 overflow-hidden md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800/50 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 text-3xl shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  🌐
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">Hálózatok (Packet Tracer)</h3>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl">Miskolci és Egri Egyetem hálózatának szimulációja: statikus útválasztás, switch biztonság és SOHO router konfiguráció.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <a 
                  href="/lessons/halozat_alapvizsga.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-105 transition-transform">📄</span> 
                  <span>Feladatlap</span>
                </a>

                <a 
                  href="/sources/megoldas_enye.pkt" 
                  download
                  className="px-5 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-105 transition-transform">💾</span> 
                  <span>.pkt fájl letöltése</span>
                </a>

                <Link
                  href="/tutorials/network-exam"
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  Megoldás (Online)
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}