import Link from "next/link";
import Image from "next/image"; 

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-4 pb-16 space-y-12 text-slate-300">

      <header className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-slate-700 pb-8">
        
        <div className="relative w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-xl">
          <Image src="/kep.jpg" alt="Czeglédi Dávid" fill className="object-cover" />
          <span className="text-slate-500 text-sm font-mono text-center">Kép<br/>helye</span>
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              Czeglédi Dávid
            </h1>
            <p className="text-xl text-cyan-400 font-medium">
              IT Oktató & Programtervező Informatikus
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:dczegledi2004@gmail.com" className="hover:text-white transition-colors">dczegledi2004@gmail.com</a>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:+36303026285" className="hover:text-white transition-colors">+36 30 302 6285</a>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Füzesabony (Szül. Eger: 2004)</span>
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span> Szakmai Tapasztalat
        </h2>
        
        <div className="space-y-8 pl-2">
          
          <div className="relative pl-6 border-l border-slate-700">
            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-lg font-bold text-white">Óraadó Tanár</h3>
              <span className="text-sm text-cyan-400 font-mono">2024. szept. - </span>
            </div>
            <p className="text-slate-300 font-medium mb-2">Remenyik Zsigmond Technikum</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Óraadó tanárként dolgoztam itt.
            </p>
          </div>

          <div className="relative pl-6 border-l border-slate-700">
            <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-lg font-bold text-white">Adatbáziskezelő</h3>
              <span className="text-sm text-slate-400 font-mono">2024. jún. - 2024. szept.</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">MVM Next Áramszolgáltató</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Excel táblákat illetve adatbázisokat kezeltem.
            </p>
          </div>

          {/* Munka 3 */}
          <div className="relative pl-6 border-l border-slate-700">
            <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-lg font-bold text-white">Oktató</h3>
              <span className="text-sm text-slate-400 font-mono">2022. márc. - 2024. febr.</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">Logiscool</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Python és Stagescript nyelvet tanítottam.
            </p>
          </div>

        </div>
      </section>

      {/* Tanulmányok */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span> Tanulmányok
        </h2>
        
        <div className="space-y-8 pl-2">
          
          {/* Suli 1 */}
          <div className="relative pl-6 border-l border-slate-700">
            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-lg font-bold text-white">Programtervező Informatikus (Diploma)</h3>
              <span className="text-sm text-cyan-400 font-mono">Folyamatban</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">Miskolci Egyetem</p>
          </div>

          {/* Suli 2 */}
          <div className="relative pl-6 border-l border-slate-700">
            <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-lg font-bold text-white">Érettségi és Irodai Informatikus szakképesítés</h3>
              <span className="text-sm text-slate-400 font-mono">2018. szept. - 2022. jún.</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">Heves Vármegyei SZC Remenyik Zsigmond Technikum</p>
            <p className="text-sm text-slate-400">Magyarország</p>
          </div>

        </div>
      </section>

      <section className="space-y-6 pb-10">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span> Készségek & Egyéb
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Technológiák
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600">C#</span>
              <span className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600">Java</span>
              <span className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600">Python</span>
              <span className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600">TypeScript</span>
            </div>
          </div>

          <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              Nyelvismeret
            </h4>
            <p className="text-slate-300 font-medium">Angol</p>
            <p className="text-sm text-slate-400 mt-1">Középfok / kommunikációképes szint</p>
          </div>

          <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              Jogosítvány
            </h4>
            <p className="text-slate-300 font-medium">B Kategória</p>
            <p className="text-sm text-slate-400 mt-1">Személygépkocsi</p>
          </div>

        </div>
      </section>

    </div>
  );
}