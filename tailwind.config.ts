import convention from "@coucoudas/ui/tailwind.config";
import type { Config } from "tailwindcss";
const { content, theme } = convention;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@coucoudas/ui/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme,
} satisfies Config;
