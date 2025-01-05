import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Ensure the build output directory is 'dist'
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    host: true, // Allows the server to listen on all IPs, useful for Railway
    port: process.env.PORT || 5173, // Use the Railway-provided PORT or fallback to 5173
  },
});
