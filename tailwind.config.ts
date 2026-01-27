import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20', // Dark Green
          light: '#2E7D32',
          dark: '#0d3d13',
        },
        secondary: {
          DEFAULT: '#FFC107', // Yellow/Gold
          light: '#FFD54F',
          dark: '#FFA000',
        },
        cream: '#FBF8F3',
        accent: '#8BC34A', // Light Green
      },
    },
  },
  plugins: [],
};
export default config;
