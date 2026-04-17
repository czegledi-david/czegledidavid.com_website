import Link from "next/link";
import Typewriter from "@/components/Typewriter";


export default function Home() {
  return (
    <div className="space-y-16">
      
      <section className="space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          <Typewriter text="Czeglédi Dávid" speed={150} />
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          
        </p>
      </section>

      <section id="about" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white tracking-tight">Rólam</h2>
        
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl font-mono text-slate-300 leading-relaxed">
          <p>
            <span className="text-cyan-400">$czegledid</span>
            <br /><br />
            Jelenleg a Miskolci Egyetemen tanulok Programtervező Informatikus szakon, 
            illetve óraadóként dolgozok a Remenyik Zsigmond Technikumban.
          </p>
        </div>
      </section>

      <section id="about" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white tracking-tight">Weboldal Forráskódja</h2>
        
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl font-mono text-slate-300 leading-relaxed">
          <p>
            <Link href="https://github.com/czegledi-david/czegledidavid.com_website" target='_blank' className="hover:text-cyan-400 transition-colors">Github Repository</Link>
          </p>
        </div>
      </section>

    </div>
  );
}