const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'bar-chart': resolve(__dirname, 'bar-chart/index.html'),
        'line-chart': resolve(__dirname, 'line-chart/index.html')
      }
    }
  }
}

export default config
