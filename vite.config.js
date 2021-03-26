const { resolve } = require('path')

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        'bar-chart': resolve(__dirname, 'src/bar-chart/index.html'),
        'line-chart': resolve(__dirname, 'src/line-chart/index.html')
      }
    }
  }
}

export default config
