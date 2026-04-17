import Link from "next/link";

export default function TizenharmadikA() {
  return (
    <div className="space-y-8">
      {/* Vissza gomb a főoldalra/tananyagokra */}
      <div>
        <Link href="/classes" className="text-kiemeles hover:text-white transition-colors font-medium">
          &larr; Vissza a tananyagokhoz
        </Link>
      </div>

      {/* Oldal címe */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">Asztali Alkalmazások Fejlesztése 13.A</h1>
        <p className="text-slate-400 text-lg">
          Órai vázlatok, letölthető segédanyagok és feladatok.
        </p>
      </div>

      <div className="space-y-4">
        
        
        <div className="glass-card">
          <h2 className="text-xl font-semibold text-white mb-2">Github Repository</h2>
          <p className="text-slate-300 mb-4">
            OPP és vizsga segédletek.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/czegledi-david/Asztali_alkalmazasok_fejlesztese_13evfolyam" target="_blank" className="text-kiemeles hover:underline">
              GitHub Repo &rarr;
            </a>
          </div>
        </div>

        
      
      
      
      </div>

      <div className="space-y-4">
        
        <div className="glass-card">
          <h2 className="text-xl font-semibold text-white mb-2">Vizsga segédlet</h2>
          <p className="text-slate-300 mb-4">
            Vizsga segédlet és megoldása
          </p>
          <div className="flex gap-4">
            <a href="/lessons/C_sharp_vizsga.pdf" 
               target="_blank"
               rel="noopener noreferrer"
               className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3 shadow-sm w-full sm:w-fit group">
              <span className="text-lg group-hover:scale-110 transition-transform">📄</span> 
              <span>Feladatlap megnyitása</span>
            </a>
            
            <a href="/solution"
               className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3 shadow-sm w-full sm:w-fit group">
              <span className="text-lg group-hover:scale-110 transition-transform">💻</span> 
              <span>Megoldás (Konzolos)</span>
            </a>

            <a href="/sources/pekseg.txt" 
              download="pekseg.txt"
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 shadow-sm">
              <span>📥</span> peksegek.txt letöltése
            </a>

            
          </div>
        </div>

        
      </div>

    </div>
  );
}