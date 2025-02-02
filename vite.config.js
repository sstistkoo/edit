import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/edit/cnc_editor/',  // upravená cesta
  plugins: [react()],
  server: {
    port: 3000
  }
});
