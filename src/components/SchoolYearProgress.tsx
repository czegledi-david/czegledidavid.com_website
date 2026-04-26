"use client";

import { useEffect, useState } from "react";

export default function SchoolYearProgress() {
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Beállítjuk a tanév kezdetét és a végét (Június 15.)
    const start = new Date("2025-09-01T00:00:00").getTime();
    const end = new Date("2026-06-15T00:00:00").getTime();
    const now = new Date().getTime();

    if (now > end) {
      setProgress(100);
      setDaysLeft(0);
    } else {
      const total = end - start;
      const passed = now - start;
      const perc = Math.min(Math.max((passed / total) * 100, 0), 100);
      setProgress(perc);

      // Hátralévő napok kiszámítása
      const diffTime = end - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    }
  }, []);

  // Hydration hiba elkerülése miatt csak akkor renderelünk, ha már a kliensen vagyunk
  if (!mounted) return null; 

  return (
    <div className="max-w-5xl mx-auto px-4 mb-2 mt-6">
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm shadow-lg">
        <div className="flex justify-between items-end mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800/50 text-xl">
              🏖️
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Tanév vége (Jún. 15.)
              </h3>
              <p className="text-slate-500 text-xs">Szeptember óta eltelt idő</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black text-3xl leading-none">
              {daysLeft}
            </span>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">
              nap hátra
            </span>
          </div>
        </div>
        
        {/* Töltőcsík (Progress bar) */}
        <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-slate-600 text-xs font-mono">09.01.</p>
          <p className="text-cyan-500/70 text-xs font-bold">{Math.round(progress)}% teljesítve</p>
          <p className="text-slate-600 text-xs font-mono">06.15.</p>
        </div>
      </div>
    </div>
  );
}