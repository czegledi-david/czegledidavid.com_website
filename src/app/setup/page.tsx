export default function Setup() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-10">
      
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          A Setupom
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          Itt található a hardver környezetem leírása, a szerverektől kezdve a mindennapi munkaállomásokig.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl group-hover:scale-110 transition-transform">🖥️</span>
            <div>
              <h2 className="text-xl font-bold text-white">Fő Szerver</h2>
              <p className="text-cyan-400 text-sm font-mono">Proxmox Node</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Processzor</p>
              <p className="text-sm font-medium text-slate-300">Intel Core i7-10700<br/><span className="text-xs text-slate-500">(8 mag, 16 szál)</span></p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Memória</p>
              <p className="text-sm font-medium text-slate-300">32 GB DDR5</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tárhely</p>
              <p className="text-sm font-medium text-slate-300">512 GB SSD<br/><span className="text-xs text-slate-500">+ 2 TB HDD</span></p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">OS</p>
              <p className="text-sm font-medium text-slate-300">Proxmox 9.1.6 (VE)</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl group-hover:scale-110 transition-transform">🖲️</span>
            <div>
              <h2 className="text-xl font-bold text-white">Mini PC</h2>
              <p className="text-cyan-400 text-sm font-mono">Kiegészítő Node</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Processzor</p>
              <p className="text-sm font-medium text-slate-300">Intel Core i5-1145GRE<br/><span className="text-xs text-slate-500">(8 szál, 2.60 GHz)</span></p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Memória</p>
              <p className="text-sm font-medium text-slate-300">16 GB DDR5</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tárhely</p>
              <p className="text-sm font-medium text-slate-300">512 GB SSD</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">OS</p>
              <p className="text-sm font-medium text-slate-300">Proxmox 9.1.6 (VE)</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl group-hover:scale-110 transition-transform">💻</span>
            <div>
              <h2 className="text-xl font-bold text-white">MacBook Air M2</h2>
              <p className="text-cyan-400 text-sm font-mono">2024 / Midnight Black</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Processzor</p>
              <p className="text-sm font-medium text-slate-300">Apple M2 Chip</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Memória</p>
              <p className="text-sm font-medium text-slate-300">16 GB DDR5</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tárhely</p>
              <p className="text-sm font-medium text-slate-300">256 GB SSD</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">OS</p>
              <p className="text-sm font-medium text-slate-300">macOS</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl group-hover:scale-110 transition-transform">📟</span>
            <div>
              <h2 className="text-xl font-bold text-white">ThinkPad X220</h2>
              <p className="text-cyan-400 text-sm font-mono">Linuxos laptopom</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Processzor</p>
              <p className="text-sm font-medium text-slate-300">Intel Core i7-2620M</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Memória</p>
              <p className="text-sm font-medium text-slate-300">16 GB DDR3</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tárhely</p>
              <p className="text-sm font-medium text-slate-300">80 GB SSD</p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">OS</p>
              <p className="text-sm font-medium text-slate-300">Arch Linux</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}