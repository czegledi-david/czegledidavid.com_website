import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-4 pb-20 space-y-12">

      <header className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
          Czeglédi Dávid
        </h1>
        <p className="text-xl text-slate-400 font-medium">
          Oktató & Tanuló
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link 
          href="/about" 
          className="group block p-8 bg-[#0d1117] border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between h-full"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Rólam
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Ismerd meg a szakmai hátteremet, tanulmányaimat a Miskolci Egyetemen, és az oktatói munkámat a Remenyik Zsigmond Technikumban.
            </p>
          </div>
          <div className="text-cyan-400 font-medium flex items-center gap-2 pt-6 mt-auto">
            Tovább a profilomra <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </div>
        </Link>

        <Link 
          href="/classes" 
          className="group block p-8 bg-[#0d1117] border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between h-full"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Tananyagok
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Böngéssz az általam készített oktatási anyagok, kódolási segédletek és tutoriálok között szoftverfejlesztés témakörökben.
            </p>
          </div>
          <div className="text-blue-400 font-medium flex items-center gap-2 pt-6 mt-auto">
            Ugrás a tananyagokhoz <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </div>
        </Link>

      </div>
    </div>
  );
}