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
      animation: {
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite"
      },
      bounce: {
        from: { transform: "translateY(10px)" },
        to: { transform: "translateY(0)" },
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

