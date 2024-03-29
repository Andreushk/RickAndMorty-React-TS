import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@responsesTypes': path.resolve(__dirname, './src/types'),
    },
  },
});
