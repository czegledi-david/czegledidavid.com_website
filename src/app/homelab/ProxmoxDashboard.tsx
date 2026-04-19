'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProxmoxDashboard() {
  const { data, error, isLoading } = useSWR('/api/proxmox/status', fetcher, {
    refreshInterval: 3000,
  });

  if (isLoading) return <div className="p-12 text-center text-slate-500 font-mono animate-pulse uppercase tracking-widest">Szerver kapcsolódás...</div>;
  
  if (error || !data || data.error) {
    return (
      <div className="p-8 border border-red-900/50 bg-red-900/10 rounded-3xl text-red-400 text-xs font-mono text-center">
        HIBA: A Fő Szerver nem válaszol. <br/>
        <span className="text-[10px] text-slate-500 uppercase mt-2 block">Ellenőrizd a Permissions menüt a Proxmoxon!</span>
      </div>
    );
  }

  const cpu = (data.node.cpu * 100).toFixed(1);
  const mem = (data.node.memory.used / data.node.memory.total * 100).toFixed(1);

  return (
    <div className="max-w-2xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-md">
      <div className="p-8 border-b border-slate-800 bg-slate-900/60 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 flex items-center justify-center bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-3xl">🖥️</div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight">Fő Szerver (pvs)</h3>
            <p className="text-[10px] font-mono text-slate-500 uppercase mt-1">Uptime: {Math.floor(data.node.uptime / 86400)} nap</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4 text-left">
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
            <span>CPU</span>
            <span className="text-lg font-mono text-white">{cpu}%</span>
          </div>
          <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: `${cpu}%` }} />
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
            <span>RAM</span>
            <span className="text-lg font-mono text-white">{mem}%</span>
          </div>
          <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${mem}%` }} />
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="p-4 bg-slate-950/30 rounded-2xl border border-slate-800/50">
          <p className="text-[10px] font-bold text-slate-600 uppercase mb-3 tracking-widest text-left">Aktív Konténerek</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.lxcs.filter((l: any) => l.status === 'running').map((lxc: any) => (
              <div key={lxc.vmid} className="flex justify-between items-center px-3 py-2 bg-slate-900/50 rounded-lg text-[10px] font-mono">
                <span className="text-slate-300">{lxc.name}</span>
                <span className="text-cyan-500">{(lxc.cpu * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}