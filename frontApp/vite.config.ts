import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
});
