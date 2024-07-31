import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://techlogic-production.up.railway.app',
        changeOrigin: true, // Ensure this is set
        secure: false,      // Sometimes needed depending on the SSL configuration
      },
    },
  },
  plugins: [react()],
});
