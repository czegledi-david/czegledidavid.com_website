import Link from "next/link";

export default function LinuxCommands() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-10">
      
      <Link 
        href="/tutorials" 
        className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit"
      >
        &larr; Vissza a tutorialokhoz
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Linux Parancsok Összefoglaló
        </h1>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>📅 2026. Április</span>
          <span className="bg-cyan-900/30 text-cyan-400 px-2 rounded-md font-medium">Jegyzet</span>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
        <p className="text-lg">
          Ez az összefoglaló a leggyakrabban használt Linux terminál parancsokat és azok legfontosabb kapcsolóit tartalmazza. Tökéletes segédanyag a mindennapi munkához, a terminálban való magabiztos navigáláshoz, valamint a vizsgákra való felkészüléshez.
        </p>
      </article>

      <div className="grid gap-6 mt-8">
        
        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">pwd</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Kiírja az aktuális könyvtár abszolút elérési útvonalát.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">cd</span> <span className="text-slate-500">&lt;könyvtár&gt;</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Belép a paraméterként átadott könyvtárba. Ha nem adunk meg könyvtárat, akkor a home könyvtárba lép be.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">ls</span> <span className="text-slate-500">[kapcsoló]</span>
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Kilistázza a könyvtár tartalmát. Abc szerint növekvő sorrendben listáz.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <code className="shrink-0 font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded text-sm min-w-[2.5rem] text-center">-a</code>
              <span className="text-sm text-slate-400 pt-1">rejtett fájlokat is listáz.</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="shrink-0 font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded text-sm min-w-[2.5rem] text-center">-l</code>
              <span className="text-sm text-slate-400 pt-1">hosszú, részletes leírás.</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="shrink-0 font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded text-sm min-w-[2.5rem] text-center">-h</code>
              <span className="text-sm text-slate-400 pt-1">olvasható fájlméret (human-readable).</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="shrink-0 font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded text-sm min-w-[2.5rem] text-center">-t</code>
              <span className="text-sm text-slate-400 pt-1">módosítási idő szerinti rendezés.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">mkdir</span> <span className="text-slate-500">[kapcsoló]</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Létrehozza a paraméterben átadott nevű könyvtárat, ha még nem létezik. A <code className="text-cyan-400">-p</code> kapcsolóval a teljes útvonalat létrehozza.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">cp</span> <span className="text-slate-500">[kapcsoló]</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Átmásolja a forrás fájlt a megadott helyre. Könyvtárak másolásához a <code className="text-cyan-400">-r</code> (rekurzív) kapcsoló szükséges.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">mv</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Áthelyezi vagy átnevezi a fájlokat és könyvtárakat.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">rm</span> <span className="text-slate-500">[kapcsoló]</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Letörli a megadott fájlt vagy könyvtárat. Vigyázat: a törlés végleges! Mappákhoz használd a <code className="text-cyan-400">-rf</code> kapcsolót.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">cat</span> <span className="text-slate-500">&lt;fájl&gt;</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Kiírja a megadott fájl teljes tartalmát közvetlenül a terminálba. Gyors belenézésre ideális.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            <span className="text-cyan-400">nano</span> <span className="text-slate-500">&lt;fájl&gt;</span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Megnyitja a beépített, egyszerű szövegszerkesztőt. Lehetővé teszi fájlok létrehozását és módosítását a terminálon belül.
          </p>
        </div>

      </div>

      <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 italic mt-12">
        <p>Utoljára módosítva: 2026.04.19.</p>
        <p>Készítette: Czeglédi Dávid</p>
      </div>

    </div>
  );
}