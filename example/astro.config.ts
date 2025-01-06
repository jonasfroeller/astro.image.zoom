import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@assets": fileURLToPath(new URL("./src/assets", import.meta.url))
            }
        }
    }
});
