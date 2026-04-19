import Link from "next/link";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <div className="space-y-16 relative">
      <section className="space-y-6 pt-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          <Typewriter text="Czeglédi Dávid" speed={150} />
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          
        </p>
      </section>

      <section id="about" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white tracking-tight">Rólam</h2>
        
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl font-mono text-slate-300 leading-relaxed shadow-xl">
          <p>
            <span className="text-cyan-400">$czegledid</span>
            <br /><br />
            Jelenleg a Miskolci Egyetemen tanulok Programtervező Informatikus szakon, 
            illetve óraadóként dolgozok a Remenyik Zsigmond Technikumban.
          </p>
        </div>
      </section>

      
      <section id="source" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white tracking-tight">Weboldal Forráskódja</h2>
        
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">Portfólió</span> 
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              A teljes forráskód (React, Next.js, Tailwind CSS) nyílt forráskódú és elérhető a GitHub profilomon.
            </p>
          </div>
          
          <a 
            href="https://github.com/czegledi-david/czegledidavid.com_website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#24292f] hover:bg-[#2c333a] text-white border border-slate-700 px-6 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-3 w-full md:w-fit group shadow-lg shrink-0"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">🐙</span>
            <span className="font-semibold whitespace-nowrap">Megnézem GitHubon</span>
          </a>

        </div>
      </section>

    </div>
  );
}