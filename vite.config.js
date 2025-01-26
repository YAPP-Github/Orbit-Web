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
    host: true, // 모든 네트워크 인터페이스에서 서버가 실행되도록 설정
    allowedHosts: [
      '1082-210-183-56-229.ngrok-free.app', // 현재 사용 중인 ngrok 도메인 추가
      // 필요에 따라 다른 호스트를 추가할 수 있습니다.
    ],
  },
});
