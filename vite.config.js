// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './public/assets'),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '1082-210-183-56-229.ngrok-free.app',
      '3610-210-183-56-229.ngrok-free.app',
      'a582-121-167-58-230.ngrok-free.app'
    ],
  },
});
