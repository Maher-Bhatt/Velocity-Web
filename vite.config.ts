import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("recharts")) {
              return "charts";
            }

            if (id.includes("@vercel")) {
              return "observability";
            }

            if (id.includes("framer-motion")) {
              return "motion";
            }

            if (id.includes("react-router-dom")) {
              return "router";
            }

            if (id.includes("react") || id.includes("scheduler")) {
              return "react-vendor";
            }

            if (id.includes("lucide-react") || id.includes("react-helmet-async")) {
              return "ui";
            }
          }

          if (id.includes("src/pages/SpeedInsightsDashboard") || id.includes("src/components/dashboard")) {
            return "speed-dashboard";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
