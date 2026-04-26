import Link from "next/link";

export default function NetworkExamSolution() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-10 px-4">
      
      <div className="space-y-6">
        <Link 
          href="/tutorials" 
          className="text-cyan-400 hover:text-white transition-colors font-medium flex items-center gap-2 w-fit"
        >
          &larr; Vissza a Tutorials-hoz
        </Link>
        
        <div className="space-y-2 border-l-4 border-cyan-500 pl-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Egyetemi Hálózatok - Megoldókulcs
          </h1>
          <p className="text-slate-400 text-lg">
            Miskolci és Egri Egyetem hálózati szimulációjának teljes CLI és GUI konfigurációja.
          </p>
        </div>
      </div>

      <div className="space-y-12">

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg text-xl">🖥️</span>
            Szükséges Eszközök
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 shadow-lg">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▪</span> 
                <div>
                  <span className="font-bold text-white">Router:</span> 2621XM (WIC-1T modullal)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▪</span> 
                <div>
                  <span className="font-bold text-white">Switch:</span> 2960-24TT
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">▪</span> 
                <span><span className="font-bold text-white">Vezeték nélküli Router:</span> WRT300N</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">▪</span> 
                <span><span className="font-bold text-white">Végberendezések:</span> PC-PT és Laptop-PT</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg text-xl">🗺️</span>
            Hálózat Topológiai Terve
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-2 shadow-lg">
            <img 
              src="/sources/topology.png" 
              alt="Hálózat Topológia" 
              className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg text-xl">📋</span>
            Címzési Táblázat
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
            <table className="w-full text-left text-sm text-slate-300 whitespace-nowrap">
              <thead className="bg-slate-800/50 text-slate-200 uppercase font-semibold text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4">Eszköz</th>
                  <th className="px-6 py-4">IP cím</th>
                  <th className="px-6 py-4">Alhálózati maszk</th>
                  <th className="px-6 py-4">Alapértelmezett átjáró</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-bold text-white" rowSpan={2}>MISKOLC_RT</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">10.0.0.5</td>
                  <td className="px-6 py-3 font-mono">255.255.255.252</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.1.254</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors border-t-2 border-slate-800">
                  <td className="px-6 py-3 font-bold text-white" rowSpan={3}>EGER_RT</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">10.0.0.6</td>
                  <td className="px-6 py-3 font-mono">255.255.255.252</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-mono text-cyan-400">10.0.0.1</td>
                  <td className="px-6 py-3 font-mono">255.255.255.252</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.2.254</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors border-t-2 border-slate-800">
                  <td className="px-6 py-3 font-bold text-white" rowSpan={2}>EGER_WIFI</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">10.0.0.2</td>
                  <td className="px-6 py-3 font-mono">255.255.255.252</td>
                  <td className="px-6 py-3 font-mono">10.0.0.1</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.100.254</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors border-t-2 border-slate-800">
                  <td className="px-6 py-3 font-bold text-white">EGER_SW</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.2.253</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono">192.168.2.254</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-bold text-white">SRV</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.1.1</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono">192.168.1.254</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-bold text-white">PC1</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.2.1</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono">192.168.2.254</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-bold text-white">PC2</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">192.168.2.2</td>
                  <td className="px-6 py-3 font-mono">255.255.255.0</td>
                  <td className="px-6 py-3 font-mono">192.168.2.254</td>
                </tr>
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-3 font-bold text-white">Laptop</td>
                  <td className="px-6 py-3 font-mono text-cyan-400">-</td>
                  <td className="px-6 py-3 font-mono text-slate-500">-</td>
                  <td className="px-6 py-3 font-mono">DHCP kliens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">1</span>
            MISKOLC_RT Beállítása
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 overflow-x-auto shadow-lg">
            <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`enable
configure terminal
hostname MISKOLC_RT
interface FastEthernet0/1
 ip address 192.168.1.254 255.255.255.0
 no shutdown
 exit
interface Serial0/0
 ip address 10.0.0.5 255.255.255.252
 no shutdown
 exit`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">2</span>
            EGER_RT Beállítása
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 overflow-x-auto shadow-lg">
            <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`enable
configure terminal
hostname EGER_RT
interface FastEthernet0/1
 ip address 192.168.2.254 255.255.255.0
 no shutdown
 exit
interface FastEthernet0/0
 ip address 10.0.0.1 255.255.255.252
 no shutdown
 exit
interface Serial0/0
 ip address 10.0.0.6 255.255.255.252
 no shutdown
 exit`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">3</span>
            EGER_SW Biztonsági Beállítások
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 overflow-x-auto shadow-lg">
            <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`enable
configure terminal
hostname EGER_SW
enable secret class
interface vlan 1
 ip address 192.168.2.253 255.255.255.0
 no shutdown
 exit
ip default-gateway 192.168.2.254
line vty 0 4
 password rezsi
 login
 exit`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">4</span>
            Statikus Útválasztás (Routing)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 overflow-x-auto shadow-lg">
              <p className="text-slate-500 mb-2 font-mono text-xs border-b border-slate-800 pb-2">MISKOLC_RT</p>
              <pre className="text-yellow-400 font-mono text-sm leading-relaxed">
{`ip route 0.0.0.0 0.0.0.0 10.0.0.6`}
              </pre>
            </div>
            <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 overflow-x-auto shadow-lg">
              <p className="text-slate-500 mb-2 font-mono text-xs border-b border-slate-800 pb-2">EGER_RT</p>
              <pre className="text-yellow-400 font-mono text-sm leading-relaxed">
{`ip route 0.0.0.0 0.0.0.0 10.0.0.5`}
              </pre>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">5</span>
            EGER_WIFI (SOHO) GUI Beállítások
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-white font-semibold">1. Internet Setup</h3>
              <p className="text-slate-400 text-sm">Static IP: <span className="text-slate-300 font-mono">10.0.0.2</span> | <span className="text-slate-300 font-mono">255.255.255.252</span> | <span className="text-slate-300 font-mono">10.0.0.1</span></p>
            </div>
            <div className="space-y-1">
              <h3 className="text-white font-semibold">2. Network Setup (LAN)</h3>
              <p className="text-slate-400 text-sm">IP <span className="text-slate-300 font-mono">192.168.100.254</span> | DHCP Server: <span className="text-cyan-400 font-mono">Enabled</span></p>
            </div>
            <div className="space-y-1">
              <h3 className="text-white font-semibold">3. Wireless Security</h3>
              <p className="text-slate-400 text-sm">SSID: <span className="text-slate-300 font-mono">Egyetem_WiFi</span> | WPA2 Personal | Password: <span className="text-slate-300 font-mono">Jelszo1234</span></p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="bg-slate-800 text-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">6</span>
            Konfiguráció Mentése
          </h2>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-5 shadow-lg">
            <pre className="text-cyan-400 font-mono text-sm leading-relaxed">
{`copy running-config startup-config`}
            </pre>
          </div>
        </section>

      </div>
    </div>
  );
}