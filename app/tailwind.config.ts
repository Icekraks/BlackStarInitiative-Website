import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "bsi-red": "var(--bsi-red)",
        "bsi-black": "var(--bsi-black)",
        "bsi-grey": "var(--bsi-grey)",
        "bsi-white": "var(--bsi-white)",
        "bsi-pure-white": "var(--bsi-pure-white)",
        "bsi-pure-black": "var(--bsi-pure-black)",
        border: "#b58900",
        borderAlt: "#fdf6e3",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        primary: {
          DEFAULT: "var(--bsi-black)",
          foreground: "var(--bsi-white)",
        },
        secondary: {
          DEFAULT: "var(--bsi-white)",
          foreground: "var(--bsi-black)",
        },
        tertiary: {
          DEFAULT: "var(--bsi-red)",
          hover: "var(--bsi-black-hover)",
          foreground: "var(--bsi-white)",
        },
        quaternary: {
          DEFAULT: "var(--bsi-pure-black)",
          foreground: "var(--bsi-white)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        body: ["CarbonBold", "sans-serif"],
        heading2: ["Orbitron", "sans-serif"],
        heading1: ["XPNS", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
