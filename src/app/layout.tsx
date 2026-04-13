import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Czeglédi Dávid (BETA)",
  description: "Személyes tudásbázis és portfólió",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="min-h-screen bg-oldal-hatter text-fovezetek-szoveg font-sans antialiased">
        
        {/* --- FELSŐ SÁV: Kifut a képernyő széléig --- */}
        <nav className="w-full flex justify-between items-center px-8 sm:px-16 py-6 border-b border-slate-800">
          <div className="text-xl font-bold tracking-tight text-white">CD. (BETA).</div>
          <div className="space-x-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Rólam</Link>
            <Link href="/setup" className="hover:text-cyan-400 transition-colors">Setup</Link>
            <Link href="/lessons" className="hover:text-cyan-400 transition-colors">Tananyagok</Link>
          </div>
        </nav>

        {/* --- FŐ TARTALOM: Középen marad --- */}
        <main className="max-w-3xl mx-auto px-6 py-16">
          {children}
        </main>

      </body>
    </html>
  );
}