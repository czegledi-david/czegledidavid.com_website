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
        bb: {
          blue: "#001A6E",      
          yellow: "#FFCC00",    
          lightBlue: "#0033cc", 
          darkBlue: "#000a2e",  
        },
      },
      fontFamily: {
        blockbuster: ['"Arial Black"', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        'vhs': '6px 6px 0px 0px #FFCC00',
        'vhs-hover': '10px 10px 0px 0px #FFCC00',
        'vhs-dark': '6px 6px 0px 0px #001A6E',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};

export default config;