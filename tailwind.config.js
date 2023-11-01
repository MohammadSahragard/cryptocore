import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#f1f5f9',
          foreground: '#0f172a',
          default: {
            100: '#f8fafc',
            200: '#f8fafc10',
            300: '#dAdFF3',
            DEFAULT: '#cbd5e1',
            foreground: '#0b111f',
          },
        },
      },
      dark: {
        colors: {
          background: '#0b111f',
          foreground: '#cbd5e1',
          default: {
            100: '#1E283C30',
            200: '#1E283C10',
            300: '#33415550',
            DEFAULT: '#171f31',
            foreground: '#f1f5f9',
          },
        },
      },
    },
  })],
};