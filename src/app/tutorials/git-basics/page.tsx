import Link from "next/link";

export default function GitTutorialFull() {
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
          Git és GitHub Mesterkurzus
        </h1>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>📅 2026. Április</span>
          <span>⏱️ 60 perc olvasás</span>
          <span className="bg-cyan-900/30 text-cyan-400 px-2 rounded-md font-medium">Útmutató</span>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-8">
        
        <p className="text-lg">
          A szoftverfejlesztésben nem létezik "beadando_vegleges_v3_tenylegkesz.zip". 
          Helyette verziókövetést használunk. A Git egy elosztott verziókövető rendszer, 
          amely másodpercre pontosan megjegyzi a kódod minden egyes változását, lehetővé teszi 
          a csapatmunkát, és biztosítja, hogy soha semmi ne vesszen el véglegesen.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          1. Az Első Lépések: Globális Beállítás és Inicializálás
        </h2>

        <p>
          Mielőtt elkezdenél dolgozni, be kell mutatkoznod a Gitnek. Ezt a gépeden csak életésben 
          egyszer kell megtenned. Ezek a nevek fognak megjelenni a változtatások (commitok) mellett.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> config --global user.name "Vezeteknev Keresztnev"</p>
          <p><span className="text-cyan-400">git</span> config --global user.email "email@cimed.hu"</p>
        </div>

        <p>
          Ha elkezdesz egy új projektet a gépeden (egy mappában), a Git alapból nem figyeli azt. 
          A megfigyelés bekapcsolásához a projekt gyökérmappájában kell kiadnod a következő parancsot:
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> init</p>
        </div>
        <p>
          Ez létrehoz egy rejtett <code>.git</code> mappát. Ebben tárolja a Git az "időgépet". 
          Ha ezt a mappát törlöd, a projekt megmarad, de a Git történelem örökre elvész.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          2. A Napi Munkafolyamat: Módosítás, Színpad, Véglegesítés
        </h2>

        

        <p>
          A Git három fő területre osztja a munkádat: Munkakönyvtár (Working Directory), 
          Színpad (Staging Area) és a Véglegesített Tároló (Repository).
        </p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">A radar képernyője (git status)</h3>
        <p>
          Bármikor elveszve érzed magad, ez a parancs megmondja, mi történik éppen. 
          Megmutatja a módosított, az új, és a törölt fájlokat. Ezt a parancsot fogod a leggyakrabban használni.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> status</p>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Fel a színpadra (git add)</h3>
        <p>
          Ha átírtál egy fájlt, a Git látja, de magától nem menti el. Először "fel kell tenned a színpadra". 
          Ez jelzi, hogy ezeket a változtatásokat bele akarod tenni a következő mentésbe.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> add index.html</p>
          <p><span className="text-cyan-400">git</span> add .</p>
        </div>
        <p>A pont (<code>.</code>) a parancs végén azt jelenti: "Minden módosított fájlt adj hozzá egyszerre".</p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">A mentési pont létrehozása (git commit)</h3>
        <p>
          A színpadon lévő fájlokból egy véglegesített "fényképet" készítünk. 
          Kötelező hozzáadni egy üzenetet, ami röviden (jelen időben, felszólító módban) 
          leírja, mit csináltál.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> commit -m "Navigacios menu hozzaadasa"</p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          3. Időutazás és Nyomozás
        </h2>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Ki, mit, mikor csinált? (git log)</h3>
        <p>
          Kilistázza a projekt teljes történelmét. Látod a commitokat, azok egyedi azonosítóját (hash), 
          a készítőt, és az időpontot. Kilépni belőle a <code>q</code> betűvel tudsz.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> log</p>
          <p><span className="text-cyan-400">git</span> log --oneline</p>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Mi változott pontosan? (git diff)</h3>
        <p>
          Ha kiadod a <code>git status</code> parancsot, és látod, hogy a <code>style.css</code> módosult, 
          de nem emlékszel mit írtál át benne, a diff parancs sorra pontosan, piros-zöld színnel 
          megmutatja a különbséget az utolsó mentés óta.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> diff</p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          4. GitHub és Távoli Tárolók (Remote)
        </h2>

        <p>
          Eddig a pontig minden csak a te saját számítógépeden történt. Ha tönkremegy a vinyód, 
          a kód is elveszik. A GitHub egy olyan felhő szolgáltatás, ami a Git repóidat tárolja.
        </p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Mások kódjának letöltése (git clone)</h3>
        <p>
          Ha egy meglévő projekthez csatlakozol, nem <code>init</code>-el kezdesz, hanem letöltöd 
          a projektet a szerverről. Ez létrehozza a mappát, és azonnal beállítja a Gitet.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> clone https://github.com/felhasznalo/projekt.git</p>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Saját projekt feltöltése (remote és push)</h3>
        <p>
          Ha helyben kezdtél egy projektet, és utólag csináltál neki egy üres repót a GitHubon, 
          először össze kell kötnöd a kettőt. A távoli szervert hagyományosan <code>origin</code>-nek nevezzük.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> remote add origin https://github.com/te/projekt.git</p>
          <p><span className="text-cyan-400">git</span> push -u origin main</p>
        </div>
        <p>A push paranccsal feltolod a változtatásokat a felhőbe. A <code>-u</code> csak első alkalommal kell, utána elég annyit írni, hogy <code>git push</code>.</p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Új kód lehúzása a csapatról (git pull)</h3>
        <p>
          Ha valaki más (vagy te egy másik gépen) feltöltött valami újat a GitHubra, azt ezzel a 
          paranccsal tudod a saját gépedre lehúzni, szinkronizálva az állapotot.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> pull</p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          5. Párhuzamos Univerzumok: Elágazások (Branching)
        </h2>

        

[Image of Git branching and merging]


        <p>
          A fő ágat általában <code>main</code>-nek vagy <code>master</code>-nek hívják. Ezen a kódon sosem szabad kísérletezni. 
          Ha egy új funkción dolgozol, mindig létrehozol egy új ágat (branch). Ezen az ágon nyugodtan elronthatsz bármit, a fő ág érintetlen marad.
        </p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Ágak kezelése</h3>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> branch</p>
          <p><span className="text-cyan-400">git</span> branch uj-gomb</p>
          <p><span className="text-cyan-400">git</span> checkout uj-gomb</p>
          <p><span className="text-cyan-400">git</span> checkout -b sötét-mód</p>
        </div>
        <p>A <code>checkout -b</code> a leggyakoribb: létre is hozza az ágat, és azonnal át is léptet rá.</p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Összeolvasztás (git merge)</h3>
        <p>
          Ha kész vagy az új funkcióval az ágadon, vissza kell menned a fő ágra, és "beolvasztani" 
          a munkádat.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> checkout main</p>
          <p><span className="text-cyan-400">git</span> merge sötét-mód</p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          6. A Láthatatlanság Köpenye: .gitignore
        </h2>
        <p>
          Vannak fájlok, amiknek sosem szabad felkerülniük a GitHubra. Ilyenek a jelszavakat 
          tartalmazó <code>.env</code> fájlok, vagy a több gigabájtos, automatikusan generált mappák 
          (mint a <code>node_modules</code>).
        </p>
        <p>
          Hozz létre egy fájlt <code>.gitignore</code> néven a projekt gyökerében, és írd bele 
          azokat a fájl/mappa neveket, amiket a Gitnek ignorálnia kell. A Git ezután úgy tesz, mintha 
          ezek nem is léteznének (nem jelennek meg a statusban, nem lehet őket commitolni).
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-slate-800 pb-2">
          7. Pánikgomb: Hibák Javítása
        </h2>
        <p>
          Bármit elrontasz, a Git meg tud menteni. A legfontosabb, hogy soha ne törölj fájlokat kézzel 
          a fájlkezelőben, ha valami elcsúszott.
        </p>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Módosítások eldobása (Még nem volt commit)</h3>
        <p>Átírtál egy fájlt, de rájöttél, hogy rossz az egész, és szeretnéd visszakapni az utolsó mentett állapotot.</p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> restore index.html</p>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Biztonságos visszavonás (git revert)</h3>
        <p>
          Commitoltál egy hibás kódot, esetleg már fel is toltad GitHubra. Soha ne töröld a commitot! 
          Helyette használd a revertet. Ez létrehoz egy ÚJ commitot, ami pontosan az ellentéte 
          a hibásnak (kiveszi azokat a sorokat, amiket betettél). Így a történelem tiszta marad.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto">
          <p><span className="text-cyan-400">git</span> revert &lt;commit-hash-kódja&gt;</p>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mt-6">Félrerakás későbbre (git stash)</h3>
        <p>
          Dolgozol valamin, de a főnököd szól, hogy azonnal javíts ki egy hibát a main ágon. 
          Nem akarod félkészen commitolni a mostani munkád, de ágat sem válthatsz mentetlen kóddal. 
          A stash beteszi egy "fiókba" a módosításaidat, és kitisztítja a munkaterületet.
        </p>
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto space-y-2">
          <p><span className="text-cyan-400">git</span> stash</p>
          <p><span className="text-cyan-400">git</span> stash pop</p>
        </div>
        <p>Amikor kész vagy a javítással és visszatértél az ágadra, a <code>stash pop</code> paranccsal előveszed a fiókból a félbehagyott munkádat.</p>

      </article>

      <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 italic mt-12">
        <p>Utoljára módosítva: 2024.04.19.</p>
        <p>Készítette: Czeglédi Dávid</p>
      </div>

    </div>
  );
}