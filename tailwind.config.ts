import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Egy mély, elegáns sötétkék/szürke alap
        'oldal-hatter': '#0f172a',
        // Nem vakító fehér, hanem egy finom világosszürke
        'fovezetek-szoveg': '#f1f5f9', // Slate-100
        // Egy élénkebb, de szemkímélő világoskék
        'kiemeles': '#38bdf8',        // Sky-400
        // A kártyák egy árnyalattal világosabbak az alapnál (mélységet ad)
        'kartya-hatter': '#1e293b',    // Slate-800
        // Finom, sötétebb szegély
        'szegely': '#334155',         // Slate-700
      },
    },
  },
  plugins: [],
};
export default config;