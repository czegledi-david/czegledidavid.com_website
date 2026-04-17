import Link from "next/link";

export default function Tananyagok() {
  return (
    <div className="space-y-10">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Tananyagok
        </h1>
        <p className="text-lg text-slate-400">
          Az oktatási segédanyagok és projektek gyűjteménye tanévekre bontva.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-cyan-400 whitespace-nowrap">2025-2026</h2>
          <div className="h-px bg-slate-800 w-full"></div>
        </div>

        <div className="grid gap-4">
          
          <Link
            href="/classes/9a" 
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
            href="/classes/10a" 
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
            href="/classes/11a" 
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
            href="/classes/13a" 
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