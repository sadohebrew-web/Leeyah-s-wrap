/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Leeyah's Wrap brand tokens — warm neutral base, one disciplined plum accent,
        // gold as its complement. stone/ink flip in dark mode via CSS vars; charcoal/cream
        // are fixed (used by sections that are deliberately dark in either theme).
        stone: "var(--color-stone)",
        "stone-deep": "var(--color-stone-deep)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        charcoal: "#1C1D1F",
        cream: "#F6EFE2",
        dye: "#6E3868",
        "dye-deep": "var(--color-dye-deep)",
        brass: "var(--color-brass)",
        "brass-deep": "#8F6B22",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 2.1rem + 2.6vw, 4.75rem)", { lineHeight: "1.04", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 1.6rem + 1.6vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 1.3rem + 0.8vw, 2rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        widest2: "0.14em",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.3333%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
