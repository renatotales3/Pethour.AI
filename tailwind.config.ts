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
        primary: "#FF9066",
        secondary: "#A78BFA",
        accent: "#34C759",
        dark: "#2D3748",
        light: "#FEFEFE",
        border: "#F0E9F5",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        lg: "16px",
        md: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
