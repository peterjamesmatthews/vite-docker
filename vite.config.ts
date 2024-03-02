import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), biomePlugin()],
	build: { minify: "esbuild" },
	clearScreen: true,
	server: { host: true },
});
