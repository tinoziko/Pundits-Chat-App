import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // for Vite or root HTML
    "./src/**/*.{js,ts,jsx,tsx}", // scan all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:  [
     {
        "green-black": {
          "primary": "#10b981",    // Emerald Green
          "secondary": "#34d399",  // Lighter Green
          "accent": "#a3e635",     // Lime Green
          "neutral": "#1f2937",    // Dark Grey (for text/ui)
          "base-100": "#000000",   // Pure Black Background
          "base-200": "#121212",   // Slightly lighter (for cards/inputs)
          "base-300": "#1f1f1f",   // Even lighter (for borders/hover)
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",

        },
     },
      "light",
      "dark",
   ]
      
    },

  
};
