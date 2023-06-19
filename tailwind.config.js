/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ['var(--font-philosopher)']
      },
    },
    colors: {
      'dBlack': '#192320',
      'dGreen': '#DDFDE8',
      'dEmerald': '#52b788',
    },
  },
  plugins: [],
  darkMode: 'class',
}

