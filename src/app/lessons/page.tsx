// src/app/tananyagok/page.tsx
import Link from "next/link";

export default function Tananyagok() {
  return (
    <div className="space-y-10">
      
      {/* CÍMSOR SZEKCIÓ */}
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Tananyagok
        </h1>
        <p className="text-lg text-slate-400">
          Az oktatási segédanyagok és projektek gyűjteménye tanévekre bontva.
        </p>
      </div>

      {/* ÉV SZEKCIÓ - 2025-2026 */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-cyan-400 whitespace-nowrap">2025-2026</h2>
          {/* Ez a div csak egy díszítő vonal az évszám mellett */}
          <div className="h-px bg-slate-800 w-full"></div>
        </div>

        {/* LINK LISTA */}
        <div className="grid gap-4">
          
          {/* Egy tananyag kártya/sor */}
          <Link
            href="/lessons/9a" 
            className="group p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium text-lg">Programozás alapok 9.A</h3>
                <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
              </div>
              <span className="text-slate-500 group-hover:text-kiemeles transition-colors">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/lessons/10a" 
            className="group p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium text-lg">Programozás alapok 10.A</h3>
                <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
              </div>
              <span className="text-slate-500 group-hover:text-kiemeles transition-colors">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/lessons/11a" 
            className="group p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium text-lg">Asztali Alkalmazások Fejlesztése 11.A</h3>
                <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
              </div>
              <span className="text-slate-500 group-hover:text-kiemeles transition-colors">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/lessons/13a" 
            className="group p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium text-lg">Asztali Alkalmazások Fejlesztése 13.A</h3>
                <p className="text-sm text-slate-400 mt-1">Órai anyagok és feladatok</p>
              </div>
              <span className="text-slate-500 group-hover:text-kiemeles transition-colors">
                &rarr;
              </span>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
}