"use client"; // Fontos: ez jelzi a Next.js-nek, hogy ez egy interaktív, böngészőben futó kód

import { useState, useEffect } from "react";

export default function Typewriter({ 
  text, 
  speed = 100 
}: { 
  text: string; 
  speed?: number 
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Ha még nem értünk a szöveg végére, adunk hozzá egy új betűt
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      // Takarítás, ha esetleg hamarabb elnavigálna az oldalról
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      {/* A villogó kurzor a szöveg végén */}
      <span className="animate-pulse text-cyan-400 font-light ml-[2px]">|</span>
    </span>
  );
}