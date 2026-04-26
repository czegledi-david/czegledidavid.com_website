"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PythonExamSolution() {
  
  const [masolva1, setMasolva1] = useState(false);
  const [masolva2, setMasolva2] = useState(false);
  const [masolva3, setMasolva3] = useState(false);

  const feladat1Kod = String.raw`fok = int(input("Add meg a napi középhőmérsékletet: "))

if fok < 0:
    print("Fagyos nap.")
elif fok <= 15:
    print("Hűvös idő.")
elif fok <= 25:
    print("Kellemes idő.")
else:
    print("Hőség van!")
`;

  const feladat2Kod = String.raw`eladasok = []

# 1. Beolvasás
try:
    with open('kiadasok.txt', 'r', encoding='utf-8') as f:
        for sor in f:
            adatok = sor.strip().split(';')
            eladasok.append(adatok)
except FileNotFoundError:
    print("Hiba: A kiadasok.txt nem található!")

# 2. Eladások száma
print(f"Összesen {len(eladasok)} eladás történt aznap.")

# 3. Napi bevétel kiszámítása
osszbevetel = 0
for eladas in eladasok:
    osszbevetel += int(eladas[2])
print(f"Napi összbevétel: {osszbevetel} Ft")

# 4. Termék keresése
keresett = input("Milyen terméket keresel? ")
vasaroltak = False

for eladas in eladasok:
    if eladas[1] == keresett:
        vasaroltak = True
        break

if vasaroltak:
    print("Igen, vásároltak ilyen terméket ma.")
else:
    print("Nem vásároltak ilyen terméket ma.")
`;

  const feladat3Kod = String.raw`import random

dobasok = []

# 1-2. 50 dobás generálása (0 = fej, 1 = írás)
for _ in range(50):
    dobasok.append(random.randint(0, 1))

# 3. Dobások kiírása
print("Dobások eredménye:")
print(dobasok)

# 4. Hányszor dobtunk fejet (0)
fej_db = dobasok.count(0)
print(f"Összesen {fej_db} alkalommal dobtunk fejet.")

# 5. Melyikből volt több?
iras_db = 50 - fej_db

if fej_db > iras_db:
    print("A Fej nyert!")
elif iras_db > fej_db:
    print("Az Írás nyert!")
else:
    print("Döntetlen lett!")
`;

  // Törhetetlen másoló logika (működik IP címen is!)
  const masolas = (szoveg: string, setMasolva: (allapot: boolean) => void) => {
    try {
      // 1. Ha támogatott és biztonságos a kapcsolat (pl. localhost)
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(szoveg);
      } else {
        // 2. Ha HTTP-n (IP címen) vagyunk, régi típusú másolás
        const textArea = document.createElement("textarea");
        textArea.value = szoveg;
        // Láthatatlanná tesszük, de a DOM-ban hagyjuk
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      // Vizuális visszajelzés
      setMasolva(true);
      setTimeout(() => setMasolva(false), 2000);
    } catch (err) {
      console.error("Másolás hiba: ", err);
      alert("A böngésződ blokkolta a másolást! Kérlek jelöld ki a szöveget kézzel.");
    }
  };

  const masolas1 = () => masolas(feladat1Kod, setMasolva1);
  const masolas2 = () => masolas(feladat2Kod, setMasolva2);
  const masolas3 = () => masolas(feladat3Kod, setMasolva3);

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-8 xl:px-16 py-16">
      
      <Link href="/classes/10a" className="text-yellow-500 hover:text-yellow-400 transition-colors mb-8 inline-flex items-center gap-2 font-medium">
        &larr; Vissza a 10.A oldalra
      </Link>
      
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Python Alapvizsga (B) - Megoldókulcs
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Hőmérséklet vizsgáló, szöveges adatfájl feldolgozása és pénzfeldobás szimulátor.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 1. Feladat */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 ml-2">
            <span className="bg-slate-800 text-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg font-bold">1</span>
            <h2 className="text-xl font-semibold text-slate-300">Hőmérséklet</h2>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full border-t-2 border-t-yellow-500">
            
            <button
              onClick={masolas1}
              className="absolute top-4 right-4 z-[100] cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
            >
              {masolva1 ? <><span className="text-green-400">✓</span> Másolva!</> : <><span>📋</span> Másolás</>}
            </button>

            <SyntaxHighlighter
              language="python"
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
              {feladat1Kod}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* 2. Feladat */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 ml-2">
            <span className="bg-slate-800 text-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg font-bold">2</span>
            <h2 className="text-xl font-semibold text-slate-300">Kiadások (Fájlkezelés)</h2>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full border-t-2 border-t-yellow-500">
            
            <button
              onClick={masolas2}
              className="absolute top-4 right-4 z-[100] cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
            >
              {masolva2 ? <><span className="text-green-400">✓</span> Másolva!</> : <><span>📋</span> Másolás</>}
            </button>

            <SyntaxHighlighter
              language="python"
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
              {feladat2Kod}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* 3. Feladat */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 ml-2">
            <span className="bg-slate-800 text-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg font-bold">3</span>
            <h2 className="text-xl font-semibold text-slate-300">Fej vagy Írás</h2>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-full border-t-2 border-t-yellow-500">
            
            <button
              onClick={masolas3}
              className="absolute top-4 right-4 z-[100] cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-md transition-all border border-slate-600 flex items-center gap-2"
            >
              {masolva3 ? <><span className="text-green-400">✓</span> Másolva!</> : <><span>📋</span> Másolás</>}
            </button>

            <SyntaxHighlighter
              language="python"
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
              {feladat3Kod}
            </SyntaxHighlighter>
          </div>
        </div>

      </div>
    </div>
  );
}