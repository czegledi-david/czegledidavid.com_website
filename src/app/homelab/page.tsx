'use client';

import dynamic from 'next/dynamic';

const ProxmoxDashboard = dynamic(() => import('./ProxmoxDashboard'), { 
  ssr: false,
  loading: () => <div className="h-64 w-full bg-slate-900/20 border border-slate-800 rounded-3xl animate-pulse" />
});

export default function HomelabPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-10 px-6">
      <div className="space-y-4 border-l-4 border-cyan-500 pl-6 text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Homelab Live</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Valós idejű telemetria és erőforrás figyelés a központi Proxmox csomópontról.
        </p>
      </div>

      <ProxmoxDashboard />
    </div>
  );
}