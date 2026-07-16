import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // AlpheasAI Enterprise Color System
        maroon: "#800020",
        orange: "#F05A28",
        gold: "#D4AF37",
        white: "#FFFFFF",
        aqua: "#00FFFF",
        
        // Existing semantic colors mapped to new system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#800020",
        primary: {
          DEFAULT: "#F05A28",
          foreground: "#FFFFFF",
          glow: "rgba(240, 90, 40, 0.15)",
        },
        secondary: {
          DEFAULT: "rgba(128, 0, 32, 0.1)",
          foreground: "#800020",
        },
        destructive: {
          DEFAULT: "#800020",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "rgba(128, 0, 32, 0.05)",
          foreground: "rgba(128, 0, 32, 0.7)",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#800020",
          cyan: "#00FFFF",
        },
        success: "#D4AF37",
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#800020",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#800020",
        },
        sidebar: {
          DEFAULT: "#FFFFFF",
          foreground: "#800020",
          primary: "#F05A28",
          "primary-foreground": "#FFFFFF",
          accent: "#D4AF37",
          "accent-foreground": "#800020",
          border: "rgba(128, 0, 32, 0.1)",
          ring: "#F05A28",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        // Enterprise button styling
        enterprise: "6px",
        "enterprise-sm": "4px",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "glow-pulse": { "0%,100%": { opacity: "0.5" }, "50%": { opacity: "1" } },
        "float": { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "scale-in": "scale-in 0.4s ease-out both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

