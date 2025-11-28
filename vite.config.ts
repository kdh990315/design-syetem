/// <reference types="vitest/config" />
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// const dirname =
//   typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],

    // 일반 테스트만 돌리도록 include 지정
    include: ["src/**/*.test.{ts,tsx}"],

    // Storybook 파일 완전히 제외
    exclude: [
      "**/*.stories.{ts,tsx,mdx}",
      "**/.storybook/**",
      "node_modules",
      "dist",
    ],

    // Storybook 테스트 플러그인은 별도로 나중에 돌릴 수 있게 분리 (원하면 아래 주석 해제해서 따로 실행)
    // projects: [
    //   {
    //     name: 'storybook',
    //     plugins: [
    //       storybookTest({
    //         configDir: path.join(dirname, '.storybook'),
    //       }),
    //     ],
    //     include: ['src/**/*.stories.{ts,tsx,mdx}'],
    //   },
    // ],
  },
});
