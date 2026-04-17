"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CsharpPeldak() {
  
  const [masolvaRegi, setMasolvaRegi] = useState(false);
  const [masolvaUj, setMasolvaUj] = useState(false);

  
  const regiKod = String.raw`using System;
using System.Collections.Generic;
using System.IO;

namespace PeksegKonzol
{
    // Ez az osztály reprezentál egyetlen sort a txt fájlból
    class Tranzakcio
    {
        public int Nap { get; private set; }
        public string Idopont { get;  private set; }
        public string Nev { get;  private set; }
        public int DolgozoId { get;  private set; }
        public int Mennyiseg { get;  private set; }
        public char Tipus { get;  private set; } // 'S' vagy 'E'
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
}
`;

  const ujKod = String.raw`namespace Pekseg
{
    //Egy osztály egyetlen sort reprezentál a txt fájlból
    class Tranzakcio
    {
        public int Nap { get; private set; }
        public string Idopont { get; private set; }
        public string Nev { get; private set; }
        public int DolgozoId { get; private set; }
        public int Mennyiseg { get; private set; }
        public char Tipus { get; private set; }
 
        public Tranzakcio(int nap, string idopont, string nev, int dolgozoId, int mennyiseg, char tipus)
        {
            Nap = nap;
            Idopont = idopont;
            Nev = nev;
            DolgozoId = dolgozoId;
            Mennyiseg = mennyiseg;
            Tipus = tipus;
        }
    }
 
    class Pekseg 
    { 
        //Itt tároljuk a beolvasott adatokat
        private List<Tranzakcio> mozgasok = new List<Tranzakcio>();
 
        // 1. Feladat: Konstruktor, ami beolvassa a fájlt
        public Pekseg(string fajlnev)
        {
            try
            {
                string[] sorok = File.ReadAllLines(fajlnev);
                foreach (string s in sorok) 
                {
                    if (string.IsNullOrWhiteSpace(s)) continue; //Üres sorok átugrása
 
                    string[] adatok = s.Split(' ');
                    Tranzakcio t = new Tranzakcio(
                    int.Parse(adatok[0]),
                    adatok[1],
                    adatok[2],
                    int.Parse(adatok[3]),
                    int.Parse(adatok[4]),
                    char.Parse(adatok[5])); //S vagy E
                    mozgasok.Add(t);
 
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
            // Visszafelé indulunk a listán és az első 'E' típust keressük
            for(int i = mozgasok.Count - 1; i >= 0; i--)
            {
                if (mozgasok[i].Tipus == 'E')
                {
                    return mozgasok[i].Nev;
                }
            }
            return "Nem volt eladás";
        }
 
        //3. feladat: Adott napi mozgások kiírása
        public void napi_forgalom(int nap)
        {
            bool voltForgalom = false;
 
            foreach (Tranzakcio t in mozgasok)
            {
                if (t.Nap == nap)
                {
                    string mNev = "";
                    if (t.Tipus == 'S') mNev = "Sütés";
                    else if (t.Tipus == 'E') mNev = "Eladás";
 
                    Console.WriteLine($"\t{t.Idopont} - {t.Nev} ({t.Mennyiseg}) {mNev}");
                    voltForgalom = true;
                }
            }
 
            if (!voltForgalom)
            {
                Console.WriteLine("Ezen a napon nem volt forgalom.");
            }
 
        }
 
        //4. feladat: Elfogyott termékek száma hó végén
        public int elfogyott_a_ho_vegen()
        {
            // Egy szótárban tároljuk az aktuális készletet
            Dictionary<string, int> keszlet = new Dictionary<string, int>();
 
            foreach (Tranzakcio t in mozgasok)
            {
                //Ha nincs bennne a szótárban a termék, 0-val felvesszük
                if (!keszlet.ContainsKey(t.Nev))
                {
                    keszlet.Add(t.Nev, 0);
                }
                //Növeljük vagy csökkentjük
                if (t.Tipus == 'S') keszlet[t.Nev] += t.Mennyiseg;
                else if (t.Tipus == 'E') keszlet[t.Nev] -= t.Mennyiseg;
            }
            //Megszámoljuk, hány termék készlete 0 vagy kevesebb
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
 
        //5. Feladat: Legnagyobb egyszeri eladás (Maximum)
        public string legnagyobb_egyszeri_eladas()
        {
            int maxMennyiseg = -1;
            string maxNev = "";
            int maxDolgozoId = 0;
 
            foreach(Tranzakcio t in mozgasok) 
            {
                if(t.Tipus == 'E')
                {
                    if(t.Mennyiseg > maxMennyiseg)
                    {
                        maxMennyiseg = t.Mennyiseg;
                        maxNev = t.Nev;
                        maxDolgozoId = t.DolgozoId;
                    }
                }
            }
 
            if(maxMennyiseg != -1)
            {
                return $"{maxNev} ({maxMennyiseg}), Dogozó száma: {maxDolgozoId}";
            }
            else
            {
                return "Nem volt eladás a hónapban.";
            }
 
        }
    }
 
 
 
    class Program
    {
        static void Main(string[] args)
        {
            Pekseg p = new Pekseg("pekseg.txt");
            Console.WriteLine("3. Feladat");
            Console.WriteLine($"\tUtolsó eladott pékáru: {p.utolso_eladott_termek()}\n");
 
            Console.WriteLine("4. Feladat");
            Console.Write("Adj meg egy napot: ");
            string bekeres = Console.ReadLine();
            if(int.TryParse(bekeres, out int bekertNap))
            {
                Console.WriteLine($"{bekertNap}. napi forgalom");
                p.napi_forgalom(bekertNap);
            }
            else
            {
                Console.WriteLine("\tHibás adatbevitel!");
            }
 
            Console.WriteLine("\n5.Feladat");
            Console.WriteLine($"\tTeljesen elfogyott pékáruk száma a hónap végén: {p.elfogyott_a_ho_vegen()}\n");
 
            Console.WriteLine("\n6.Feladat");
            Console.WriteLine($"\tLegnagyobb egyszeri eladás: {p.legnagyobb_egyszeri_eladas()}\n");
 
        }
    }
}`;

  const masolasRegi = () => {
    navigator.clipboard.writeText(regiKod);
    setMasolvaRegi(true);
    setTimeout(() => { setMasolvaRegi(false); }, 2000);
  };

  const masolasUj = () => {
    navigator.clipboard.writeText(ujKod);
    setMasolvaUj(true);
    setTimeout(() => { setMasolvaUj(false); }, 2000);
  };

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-16 xl:px-32 py-16">
      
      <Link href="/classes/13a" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-8 inline-flex items-center gap-2">
        &larr; Vissza
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
        Vizsga Megoldás
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-300 ml-2">Eredeti megoldás</h2>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full">
            
            <button
              onClick={masolasRegi}
              className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
            >
              {masolvaRegi ? <><span className="text-green-400">✓</span> Másolva!</> : <><span>📋</span> Másolás</>}
            </button>

            <SyntaxHighlighter
              language="csharp"
              style={vscDarkPlus}
              showLineNumbers={true}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                paddingTop: '3rem',
                fontSize: '0.9rem',
                backgroundColor: '#0f172a',
                height: '100%', // Kitölti a rendelkezésre álló helyet
              }}
            >
              {regiKod}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-cyan-400 ml-2">Javított (Refaktorált) megoldás</h2>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full border-t-2 border-t-cyan-500">
            
            <button
              onClick={masolasUj}
              className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
            >
              {masolvaUj ? <><span className="text-green-400">✓</span> Másolva!</> : <><span>📋</span> Másolás</>}
            </button>

            <SyntaxHighlighter
              language="csharp"
              style={vscDarkPlus}
              showLineNumbers={true}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                paddingTop: '3rem',
                fontSize: '0.9rem',
                backgroundColor: '#0f172a',
                height: '100%',
              }}
            >
              {ujKod}
            </SyntaxHighlighter>
          </div>
        </div>

      </div>
    </div>
  );
}