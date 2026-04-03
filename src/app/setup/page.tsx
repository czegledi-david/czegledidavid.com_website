export default function Setup() {
  return (
    <div className="space-y-8">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          A Setupom
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Itt található a hardver környezetem leírása, amivel nap mint nap dolgozom.
        </p>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Szerver 1</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>Processzor:</strong> 16 x Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz (1 Socket)</li>
          <li><strong>RAM:</strong> 32 GB (DDR5)</li>
          <li><strong>SSD:</strong> 512 GB</li>
          <li><strong>(HDD):</strong> 2 TB </li>
          <li><strong>OS:</strong> Proxmox</li>
        </ul>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Szerver 2</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>Processzor:</strong> 8 x 11th Gen Intel(R) Core(TM) i5-1145GRE @ 2.60GHz (1 Socket)</li>
          <li><strong>RAM:</strong> 16 GB (DDR5)</li>
          <li><strong>SSD:</strong> 512 GB</li>
          <li><strong>OS:</strong> Proxmox</li>
        </ul>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Apple Macbook Air M2 2024 (Midnight Black)</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>Processzor:</strong> Apple M2 Chip</li>
          <li><strong>RAM:</strong> 16 GB (DDR5)</li>
          <li><strong>Storage (SSD):</strong> 256 GB</li>
          <li><strong>OS:</strong> MacOS</li>
        </ul>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Thinkpad x220</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>Processzor:</strong> Intel i7-2620M</li>
          <li><strong>RAM:</strong> 16 GB (DDR3)</li>
          <li><strong>Storage (SSD):</strong> 80 GB</li>
          <li><strong>OS:</strong> Arch Linux</li>
        </ul>
      </div>

    </div>
  );
}