import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteImageOptimizer from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer({
    compress: {
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    },
    webp: {
      quality: 75,
    },
  })],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 500 * 1024,
    maxEntrypointSize: 500 * 1024
  }
});
