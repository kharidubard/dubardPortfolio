import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/dubardPortfolio/', // Replace 'dubardPortfolio' with your actual repository name if different
  build: {
    outDir: 'dist/dubardPortfolio',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});

