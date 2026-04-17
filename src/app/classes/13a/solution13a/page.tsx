"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CsharpPeldak() {
  // Ez az állapot figyeli, hogy rányomtunk-e a gombra
  const [masolva, setMasolva] = useState(false);

  const csharpKod = String.raw`using System;
using System.Collections.Generic;
using System.IO;

namespace PeksegKonzol
{
    // Ez az osztály reprezentál egyetlen sort a txt fájlból
    class Tranzakcio
    {
        public int Nap { get; set; }
        public string Idopont { get; set; }
        public string Nev { get; set; }
        public int DolgozoId { get; set; }
        public int Mennyiseg { get; set; }
        public char Tipus { get; set; } // 'S' vagy 'E'
    }

    class Pekseg
    {
        // Itt tároljuk a beolvasott adatokat
        private List<Tranzakcio> mozgallasok = new List<Tranzakcio>();

        // 1. Feladat: Konstruktor, ami beolvassa a fájlt
        public Pekseg(string fajlnev)
        {
            try
            {
                string[] sorok = File.ReadAllLines(fajlnev);
                foreach (string sor in sorok)
                {
                    if (string.IsNullOrWhiteSpace(sor)) continue; // Üres sorok átugrása

                    string[] adatok = sor.Split(' ');
                    
                    Tranzakcio t = new Tranzakcio();
                    t.Nap = int.Parse(adatok[0]);
                    t.Idopont = adatok[1];
                    t.Nev = adatok[2];
                    t.DolgozoId = int.Parse(adatok[3]);
                    t.Mennyiseg = int.Parse(adatok[4]);
                    t.Tipus = char.Parse(adatok[5]); // S vagy E beolvasása
                    
                    mozgallasok.Add(t);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hiba a beolvasáskor: " + ex.Message);
            }
        }

        // 2. Feladat: Utolsó eladott termék
        public string utolso_eladott_termek()
        {
            // Visszafelé indulunk a listán, és az első 'E' (Eladás) típusút keressük
            for (int i = mozgallasok.Count - 1; i >= 0; i--)
            {
                if (mozgallasok[i].Tipus == 'E')
                {
                    return mozgallasok[i].Nev;
                }
            }
            return "Nem volt eladás";
        }

        // 3. Feladat: Adott napi mozgások kiírása
        public void napi_forgalom(int nap)
        {
            bool voltForgalom = false;
            
            foreach (Tranzakcio t in mozgallasok)
            {
                if (t.Nap == nap)
                {
                    string muveletNev = "";
                    if (t.Tipus == 'S') muveletNev = "Sütés";
                    else if (t.Tipus == 'E') muveletNev = "Eladás";

                    Console.WriteLine($"\t{t.Idopont} - {t.Nev} ({t.Mennyiseg}) {muveletNev}");
                    voltForgalom = true;
                }
            }

            if (!voltForgalom)
            {
                Console.WriteLine("Ezen a napon nem volt forgalom.");
            }
        }

        // 4. Feladat: Elfogyott termékek száma a hónap végén
        public int elfogyott_a_ho_vegen()
        {
            // Egy szótárban (Dictionary) tartjuk nyilván az aktuális készletet termékenként
            Dictionary<string, int> keszlet = new Dictionary<string, int>();

            foreach (Tranzakcio t in mozgallasok)
            {
                // Ha még nincs benne a szótárban a termék, felvesszük 0 kezdőértékkel
                if (!keszlet.ContainsKey(t.Nev))
                {
                    keszlet.Add(t.Nev, 0);
                }

                // Növeljük vagy csökkentjük a készletet a művelet típusától függően
                if (t.Tipus == 'S')
                {
                    keszlet[t.Nev] += t.Mennyiseg;
                }
                else if (t.Tipus == 'E')
                {
                    keszlet[t.Nev] -= t.Mennyiseg;
                }
            }

            // Megszámoljuk, hány termék készlete nulla vagy kevesebb
            int elfogyottDb = 0;
            foreach (KeyValuePair<string, int> elem in keszlet)
            {
                if (elem.Value <= 0)
                {
                    elfogyottDb++;
                }
            }

            return elfogyottDb;
        }

        // 5. Feladat: Legnagyobb egyszeri eladás (Maximumkiválasztás tétele)
        public string legnagyobb_egyszeri_eladas()
        {
            int maxMennyiseg = -1;
            string maxNev = "";
            int maxDolgozoId = 0;

            foreach (Tranzakcio t in mozgallasok)
            {
                // Csak az eladásokat vizsgáljuk
                if (t.Tipus == 'E')
                {
                    if (t.Mennyiseg > maxMennyiseg)
                    {
                        maxMennyiseg = t.Mennyiseg;
                        maxNev = t.Nev;
                        maxDolgozoId = t.DolgozoId;
                    }
                }
            }

            if (maxMennyiseg != -1)
            {
                return $"{maxNev} ({maxMennyiseg}) , Dolgozó száma: {maxDolgozoId}";
            }
            else
            {
                return "Nem volt eladás a hónapban.";
            }
        }
    }

    class Program
    {
        // 6. Feladat: Main függvény a teszteléshez
        static void Main(string[] args)
        {
            Pekseg p = new Pekseg("pekseg.txt");

            Console.WriteLine("3. Feladat");
            Console.WriteLine($"\tUtolsó eladott pékáru: {p.utolso_eladott_termek()}\n");

            Console.WriteLine("4. Feladat");
            Console.Write("Adjon meg egy napot: ");
            string bekeres = Console.ReadLine();
            
            if (int.TryParse(bekeres, out int bekertNap))
            {
                Console.WriteLine($"{bekertNap}. napi forgalom:");
                p.napi_forgalom(bekertNap);
            }
            else
            {
                Console.WriteLine("\tHibás adatbevitel!");
            }

            Console.WriteLine("\n5. Feladat");
            Console.WriteLine($"\tTeljesen elfogyott pékáruk száma a hónap végén: {p.elfogyott_a_ho_vegen()}\n");

            Console.WriteLine("6. Feladat");
            Console.WriteLine($"\tLegnagyobb egyszeri eladás: {p.legnagyobb_egyszeri_eladas()}");

            // Várakozás, hogy ne záródjon be azonnal az ablak
            Console.ReadLine();
        }
    }
}`;

  // Ez a függvény fut le, amikor rányomnak a gombra
  const masolasVagolapra = () => {
    navigator.clipboard.writeText(csharpKod); // Kód bemásolása (sorszámok nélkül!)
    setMasolva(true); // Gomb szövegének átírása "Másolva!"-ra
    
    // 2 másodperc múlva visszaállítjuk az eredeti feliratot
    setTimeout(() => {
      setMasolva(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/classes/13a" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-8 inline-flex items-center gap-2">
        &larr; Vissza
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
        Vizsga Megoldás - C# Kód
      </h1>
      
      {/* Itt a "relative" osztály a kulcs, ez tartja a helyén a gombot */}
      <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        
        {/* MÁSOLÁS GOMB */}
        <button
          onClick={masolasVagolapra}
          className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
          aria-label="Kód másolása"
        >
          {masolva ? (
            <>
              <span className="text-green-400">✓</span> Másolva!
            </>
          ) : (
            <>
              <span>📋</span> Másolás
            </>
          )}
        </button>

        <SyntaxHighlighter
          language="csharp"
          style={vscDarkPlus}
          showLineNumbers={true}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            paddingTop: '3rem', // Kicsit lejjebb toljuk a kódot, hogy ne csússzon rá a gombra
            fontSize: '0.9rem',
            backgroundColor: '#0f172a',
          }}
        >
          {csharpKod}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}