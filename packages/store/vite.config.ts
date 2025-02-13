import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      name: "store",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "zustand"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          zustand: "zustand",
        },
      },
    },
  },
});
