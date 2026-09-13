/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1f3a",
        "ink-soft": "#274060",
        cobalt: "#1d4ed8",
        "cobalt-dark": "#153b9e",
        coral: "#e84b4b",
        "coral-soft": "#fff0ef",
        paper: "#ffffff",
        mist: "#f5f7fb",
        line: "#e5e9f0",
        muted: "#6e7c91",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        // La classe générée est `ease-` + cette clé → `.ease-out-smooth`.
        "out-smooth": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        reveal: {
          from: { opacity: 0, transform: "translateY(18px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "toast-in": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal .65s cubic-bezier(0.23, 1, 0.32, 1) both",
        float: "float 6s ease-in-out infinite",
        "toast-in": "toast-in .3s cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
