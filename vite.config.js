import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ABO-Shoelace/',  // Change to match your actual repository name
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/main.scss";'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}); 