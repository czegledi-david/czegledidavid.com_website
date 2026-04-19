import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Czeglédi Dávid",
  description: "Tudásbázis és portfólió",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="flex flex-col min-h-screen bg-oldal-hatter text-fovezetek-szoveg font-sans antialiased relative overflow-x-hidden">
        
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-900/20 blur-[100px] md:blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-900/10 blur-[100px] md:blur-[150px]" />
        </div>

        <nav className="w-full flex flex-col sm:flex-row sm:justify-between items-center px-6 sm:px-16 py-6 border-b border-slate-800 backdrop-blur-sm gap-4 sm:gap-0">
          <div className="text-xl font-bold tracking-tight text-white">CD</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Rólam</Link>
            <Link href="/setup" className="hover:text-cyan-400 transition-colors">Setup</Link>
            <Link href="/classes" className="hover:text-cyan-400 transition-colors">Tananyagok</Link>
            <Link href="/tutorials" className="hover:text-cyan-400 transition-colors">Tutorials (BETA)</Link> 
          </div>
        </nav>

        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}