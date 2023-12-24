import { nextui } from "@nextui-org/react";
import daisyUI from 'daisyui';
import tailwindcssAnimated from 'tailwindcss-animated'; // Add import for 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), daisyUI, tailwindcssAnimated], // Replace 'require' with the imported 'tailwindcssAnimated'
  
}