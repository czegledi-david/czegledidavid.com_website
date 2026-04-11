import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Czeglédi Dávid",
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
        <div className="max-w-3xl mx-auto px-6 py-20">
          
          <nav className="flex justify-between items-center mb-16 border-b border-slate-800 pb-6">
            <div className="text-xl font-bold tracking-tight text-white">CD. (BETA). TESZT TESZT TESZT</div>
            <div className="space-x-6 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Rólam</Link>
              <Link href="/setup" className="hover:text-cyan-400 transition-colors">Setup</Link>
              <Link href="/lessons" className="hover:text-cyan-400 transition-colors">Tananyagok</Link>
            </div>
          </nav>
          {children}

        </div>
      </body>
    </html>
  );
}