"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CsharpPeldak() {
  // Ez az állapot figyeli, hogy rányomtunk-e a gombra
  const [masolva, setMasolva] = useState(false);

  const csharpKod = String.raw`namespace Pekseg
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