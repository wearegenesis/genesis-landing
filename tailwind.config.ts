import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        genesis: {
          orange: "#E26E37",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
