import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/název-repozitáře/',
  plugins: [react()],
  server: {
    port: 3000
  }
});
