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
        primary: "rgb(71 85 105)",
        secondary: "rgb(15 23 42)",
        tertiary: "rgb(203 213 225)",
      },
      keyframes: {
        endless: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(50%)'}
        },
        endlessReverse: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-50%)'},
        },
      },
      animation: {
        endless: 'endless 105s infinite linear',
        endlessReverse: 'endlessReverse 105s infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
