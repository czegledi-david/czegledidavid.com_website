import Link from "next/link";

export default function TizenharmadikASegédletek() {
  const winformsLink = "https://github.com/czegledi-david/13-osztaly-winforms-app/releases/latest";
  const mainGithubLink = "https://github.com/czegledi-david/Asztali_alkalmazasok_fejlesztese_13evfolyam";

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-10 px-4">
      
      <div className="space-y-6">
        <Link 
          href="/classes" 
          className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit"
        >
          &larr; Vissza a tananyagokhoz
        </Link>
        
        <div className="space-y-2 border-l-4 border-cyan-500 pl-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Asztali Alkalmazások Fejlesztése 13.A
          </h1>
          <p className="text-slate-400 text-lg">
            Órai vázlatok, letölthető segédanyagok és feladatok.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors space-y-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">GitHub Repository</h2>
              <p className="text-slate-400 text-sm">OOP és vizsga segédletek.</p>
            </div>
          </div>
          
          <a 
            href={mainGithubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit group shadow-lg"
          >
            <span className="text-lg group-hover:rotate-12 transition-transform">🔗</span>
            <span className="font-semibold">Megnyitás GitHubon</span>
          </a>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Vizsga segédlet és Projektek</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Gyakorló feladatlapok, megoldások és a kiadott applikációk.</p>
            </div>
          </div>
          
          <div className="mb-6 p-5 bg-cyan-950/20 border border-cyan-800/40 rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-cyan-500/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 space-y-2">
              <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2 text-lg">
                <span>📦</span>WinForms Projekt
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                A legfrissebb órai vázlat letöltése.
              </p>
              
              <div className="pt-2">
                <a 
                  href={winformsLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] w-full sm:w-fit group"
                >
                  <span className="text-lg group-hover:-translate-y-0.5 transition-transform">📥</span> 
                  <span>Letöltés: WinForms Projekt (13. Osztály)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-800 w-full mb-6"></div>
          
          <div className="flex flex-col gap-3">
            <a 
              href="/lessons/C_sharp_vizsga.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 hover:bg-slate-700 text-slate-200 border border-slate-700/50 px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 shadow-sm w-full sm:w-fit group"
            >
              <span className="text-lg group-hover:scale-105 transition-transform">📄</span> 
              <span>Feladatlap megnyitása</span>
            </a>
            
            <Link 
              href="/classes/13a/solution13a"
              className="bg-slate-800/50 hover:bg-slate-700 text-slate-200 border border-slate-700/50 px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 shadow-sm w-full sm:w-fit group"
            >
              <span className="text-lg group-hover:scale-105 transition-transform">💻</span> 
              <span>Megoldás (Konzolos)</span>
            </Link>

            <a 
              href="/sources/pekseg.txt" 
              download="pekseg.txt"
              className="bg-slate-800/50 hover:bg-slate-700 text-slate-200 border border-slate-700/50 border-dashed px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center sm:justify-start gap-3 shadow-sm w-full sm:w-fit group"
            >
              <span className="text-lg group-hover:scale-105 transition-transform">📥</span> 
              <span>peksegek.txt letöltése</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}