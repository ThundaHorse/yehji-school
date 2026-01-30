import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/yehji-school/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        outcomes: resolve(__dirname, 'src/outcomes.html'),
        assignments: resolve(__dirname, 'src/assignments.html'),
        schedule: resolve(__dirname, 'src/schedule.html'),
        resources: resolve(__dirname, 'src/resources.html'),
        expectations: resolve(__dirname, 'src/expectations.html'),
      },
    },
  },
});