import Link from "next/link";

export default function TizenegyedikA() {
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
        <h1 className="text-4xl font-bold text-white tracking-tight">Asztali Alkalmazások Fejlesztése 11.A</h1>
        <p className="text-slate-400 text-lg">
          Órai vázlatok, letölthető segédanyagok és feladatok.
        </p>
      </div>

      <div className="space-y-4">
        
        <div className="glass-card">
          <h2 className="text-xl font-semibold text-white mb-2">Github Repository</h2>
          <p className="text-slate-300 mb-4">
            C# alapok és segédlet.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/czegledi-david/Asztali_Alkalmazasok_Fejlesztese-11-" target="_blank" className="text-kiemeles hover:underline">
              GitHub Repo &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
