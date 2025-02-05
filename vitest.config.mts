import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        environment: "jsdom",
        exclude: ["**.jest.test.{tsx,ts,jsx,js}", "node_modules", ".next"],
        globals: true,
        setupFiles: ["./src/tests/setup.ts"],
    },
});
