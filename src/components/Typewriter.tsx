"use client"; 

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
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="animate-pulse text-cyan-400 font-light ml-[2px]">|</span>
    </span>
  );
}