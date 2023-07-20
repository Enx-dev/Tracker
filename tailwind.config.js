/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      colors: {
        primary: {
          50: "hsl(222, 100%, 98%)",
          100: "hsl(224, 92%, 95%)",
          200: "hsl(222, 100%, 92%)",
          300: "hsl(225, 97%, 85%)",
          400: "hsl(227, 95%, 76%)",
          500: "hsl(231, 93%, 66%)",
          600: "hsl(235, 87%, 58%)",
          700: "hsl(236, 73%, 50%)",
          DEFAULT: "hsl(236, 72%, 42%)",
          900: "hsl(236, 70%, 37%)",
          950: "hsl(233, 76%, 23%)",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
