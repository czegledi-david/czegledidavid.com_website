import Link from "next/link";

export default function Hamarosan() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] flex flex-col items-center justify-center p-4">
      
      {/* Vissza gomb a bal felső sarokban */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/" 
          className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit text-sm"
        >
          &larr; Vissza a főoldalra
        </Link>
      </div>

      {/* Központi tartalom */}
      <div className="text-center space-y-6">
        
        
        {/* Szövegek */}
        <h1 className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] overflow-hidden">
          Hamarosan...
        </h1>
        <p className="text-xl text-slate-400 max-w-md mx-auto leading-relaxed">
          Ez az oldal még fejlesztés alatt áll. Kérlek nézz vissza később, vagy addig is töltsd az időt valami hasznossal!
        </p>
      </div>
    </div>
  );
}

{/*
import Link from "next/link";

export default function Uzenofal() {
  const bejelentesek = [
    {
      id: 1,
      datum: "2026. Április 26.",
      cim: "Python (B variáció) megoldókulcs elérhető",
      kategoria: "Új tananyag",
      ikon: "🐍",
      szin: "yellow",
      tartalom: "Felkerült a 10.A osztály számára a Python ágazati alapvizsga gyakorló B variációjának teljes, magyarázatos megoldása. A kódmásoló gomb javítva lett, immár hálózati IP-ről is tökéletesen működik!",
      linkUrl: "/tutorials/python-exam",
      linkSzoveg: "Megnézem a megoldást"
    },
    {
      id: 2,
      datum: "2026. Április 24.",
      cim: "Hálózatok ágazati feladatok (SuliNet)",
      kategoria: "Új tananyag",
      ikon: "🌐",
      szin: "cyan",
      tartalom: "A Miskolci és Egri Egyetem hálózatának szimulációs feladata (Packet Tracer) letölthető a 10.A oldaláról. Aki elakadna a statikus útválasztásnál, annak a Megoldás gomb alatt ott a teljes parancslista.",
      linkUrl: "/classes/10a",
      linkSzoveg: "Irány a 10.A felülete"
    },
    {
      id: 3,
      datum: "2026. Április 20.",
      cim: "Szerver karbantartás és API leállás",
      kategoria: "Rendszerinfó",
      ikon: "🔧",
      szin: "slate",
      tartalom: "A Fő Szerveren (IP: 11) futó konténer API statisztikát ideiglenesen lekapcsoltam, mert a folyamatos lekérdezések miatt zúgott tőle a szerver. A tananyagokat és a letöltéseket ez nem érinti, minden zavartalanul működik a Mini PC-ről!",
    },
    {
      id: 4,
      datum: "2026. Április 15.",
      cim: "Figyelem: Közeleg a C# számonkérés!",
      kategoria: "Vizsga / Dolgozat",
      ikon: "🚨",
      szin: "rose",
      tartalom: "A 13.A osztály figyelmébe: Jövő héten a Pékség konzolos alkalmazásból (fájlbeolvasás, maximumkiválasztás) számonkérés várható. Gyakoroljátok a txt fájlok feldolgozását!",
      linkUrl: "/classes/13a",
      linkSzoveg: "Gyakorló kódok"
    }
  ];

  const szinProfilok: Record<string, string> = {
    yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/30",
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    rose: "text-rose-500 bg-rose-500/10 border-rose-500/30",
    slate: "text-slate-400 bg-slate-400/10 border-slate-400/30",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-12 px-4">
      
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Üzenőfal
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Aktuális bejelentések, új tananyagok és rendszerinformációk egy helyen.
        </p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
        {bejelentesek.map((bej) => {
          const szinek = szinProfilok[bej.szin];
          const [textSz, bgSz, borderSz] = szinek.split(" ");

          return (
            <div key={bej.id} className="relative pl-8 md:pl-12">
              <div className={`absolute -left-[20px] top-1 w-10 h-10 rounded-full flex items-center justify-center text-xl border-4 border-[#0a0f1c] z-10 ${bgSz} ${textSz}`}>
                {bej.ikon}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-slate-500 text-sm font-mono tracking-wider">
                  {bej.datum}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${textSz} ${bgSz} ${borderSz} w-fit`}>
                  {bej.kategoria}
                </span>
              </div>

              <div className={`bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:border-slate-700 transition-colors`}>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {bej.cim}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">
                  {bej.tartalom}
                </p>

                {bej.linkUrl && bej.linkSzoveg && (
                  <Link 
                    href={bej.linkUrl}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline ${textSz}`}
                  >
                    {bej.linkSzoveg} &rarr;
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
*/}