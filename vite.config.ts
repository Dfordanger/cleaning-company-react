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
    outDir: 'dist', // Ensure this is where the build outputs static files
  },
  server: {
    port: process.env.PORT || 5173, // Use the Railway-assigned port
    host: '0.0.0.0', // Ensure the server listens on all IPs
  },
});
