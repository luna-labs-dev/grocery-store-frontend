import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { config } from 'dotenv';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  config({
    path: './.prd.env',
  });
  const PORT = Number(`${process.env.VITE_PORT ?? '3000'}`);
  return {
    plugins: [react()],
    base: '/',
    server: {
      port: PORT,
      strictPort: true,
      host: true,
      origin: `http://0.0.0.0:${PORT}`,
    },
    preview: {
      port: 3030,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
  };
});
