import { defineConfig, loadEnv, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/

const devConfig = (mode: string) =>
  mode === "development" && {
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  };
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(`running ${mode} mode!`);
  return defineConfig({
    ...devConfig(mode),
    plugins: [
      react(),
      //  mode === "development" && mkcert()
    ],
    resolve: {
      alias: [
        { find: "@components", replacement: "/src/components" },
        { find: "@", replacement: "/src" },
      ],
    },
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
    },
  });
};
