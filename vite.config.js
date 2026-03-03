import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: 'public',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        styles: path.resolve(__dirname, 'src/styles/styles.scss')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]'
          }
          if (assetInfo.type === 'image') {
            return 'assets/images/[name][extname]'
          }
          return 'assets/[name][extname]'
        }
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})
