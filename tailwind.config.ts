import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { softBlue: "#8FB7FF", lavender: "#B9A7FF", cream: "#FFF9F0", muted: "#A0A3B1" } } },
  plugins: [],
};
export default config;
