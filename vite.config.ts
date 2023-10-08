import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import { Plugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    <Plugin>{
      ...tailwindcss('./tailwind.config.js'),
      name: 'tailwindcss'
    }
  ],
})
