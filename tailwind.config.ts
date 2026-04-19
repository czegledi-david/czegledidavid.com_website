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
        'oldal-hatter': '#0f172a',
        'fovezetek-szoveg': '#f1f5f9',
        'kiemeles': '#38bdf8',
        'kartya-hatter': '#1e293b',
        'szegely': '#334155',
      },
    },
  },
  plugins: [],
};

export default config;