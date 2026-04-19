import Link from "next/link";

export default function LinuxTutorial() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 py-10">
      
      <Link 
        href="/tutorials" 
        className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit"
      >
        &larr; Vissza a tutorialokhoz
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Linux Alapok
        </h1>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>📅 2026. Március</span>
          <span>⏱️ 10 perc olvasás</span>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
        <p className="text-lg">
          Ebben a tutorialban átvesszük a Linux operációs rendszerek alapvető kezelését, 
          a terminál parancsoktól kezdve a fájlrendszer felépítéséig.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2">
          1. A Terminál megnyitása
        </h2>
        <p>
          A legtöbb disztribúción a <kbd className="px-2 py-1 bg-slate-800 rounded text-cyan-400 font-mono text-xs">CTRL + ALT + T</kbd> 
          billentyűkombinációval indíthatod el a terminált.
        </p>

        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p className="text-slate-500 mb-2">// Kilistázza a mappában lévő fájlokat</p>
          <p><span className="text-cyan-400">ls</span> -la</p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2">
          2. Jogosultságok (sudo)
        </h2>
        <p>
          A Linux rendszereken a kritikus módosításokhoz adminisztrátori (root) jogkör szükséges. 
          Ezt a <code className="text-cyan-400">sudo</code> parancs használatával érheted el.
        </p>
      </article>

      <div className="pt-10 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500 italic">
        <p>Utoljára frissítve: 2026.03.10</p>
        <p>Készítette: Czeglédi Dávid</p>
      </div>
    </div>
  );
}