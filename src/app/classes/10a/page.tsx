import Link from "next/link";

export default function TizedikA() {
  return (
    <div className="space-y-8">
      <div>
        <Link href="/classes" className="text-kiemeles hover:text-white transition-colors font-medium">
          &larr; Vissza a tananyagokhoz
        </Link>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white tracking-tight">Programozás alapok 10.A</h1>
        <p className="text-slate-400 text-lg">
          Órai vázlatok, letölthető segédanyagok és feladatok.
        </p>
      </div>

      <div className="space-y-4">
        
        <div className="glass-card">
          <h2 className="text-xl font-semibold text-white mb-2">Github Repository</h2>
          <p className="text-slate-300 mb-4">
            Python programozás segédlet.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/czegledi-david/Programozasi_alapok_10" target="_blank" className="text-kiemeles hover:underline">
              GitHub Repo &rarr;
            </a>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-xl font-semibold text-white mb-2">Ágazati Vizsga Segédlet</h2>
          <p className="text-slate-300 mb-4">
            Példa feladat megoldása.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/czegledi-david/programozasi_alapok_10_agazati_segedlet" target="_blank" className="text-kiemeles hover:underline">
              GitHub Repo &rarr;
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}