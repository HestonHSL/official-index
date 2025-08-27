import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  icons: {
    autoInstall: {}
  },
  outputPath: "./dist",
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
