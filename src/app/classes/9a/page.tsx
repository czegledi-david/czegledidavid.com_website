import Link from "next/link";

export default function KilencedikA() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-10">
      
      <div className="space-y-6">
        <Link 
          href="/classes" 
          className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2"
        >
          &larr; Vissza a tananyagokhoz
        </Link>
        
        <div className="space-y-2 border-l-4 border-cyan-500 pl-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Programozás alapok 9.A
          </h1>
          <p className="text-slate-400 text-lg">
            Órai vázlatok, letölthető segédanyagok és feladatok.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">GitHub Repository</h2>
              <p className="text-slate-400 text-sm">HTML, CSS, JS kódok és segédletek</p>
            </div>
          </div>
          
          <a 
            href="https://github.com/czegledi-david/Programozas_alapok_9a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#24292f] hover:bg-[#2c333a] text-white border border-slate-700 px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit group shadow-lg"
          >
            <span className="text-lg group-hover:rotate-12 transition-transform">🔗</span>
            <span className="font-semibold">Megnyitás GitHubon</span>
          </a>
        </div>


      </div>
    </div>
  );
}