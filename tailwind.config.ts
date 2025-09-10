import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B3467",
          foreground: "#FCFFE7",
        },
        secondary: {
          DEFAULT: "#EB455F",
          foreground: "#FCFFE7",
        },
        accent: {
          DEFAULT: "#BAD7E9",
          foreground: "#2B3467",
        },
        background: "#FCFFE7",
        foreground: "#2B3467",
        muted: "#F3F6DC",
        border: "#E6E9D1",
        input: "#E6E9D1",
        ring: "#2B3467",
        card: {
          DEFAULT: "#FCFFE7",
          foreground: "#2B3467",
        },
        popover: {
          DEFAULT: "#FCFFE7",
          foreground: "#2B3467",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;


