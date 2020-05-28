const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: '[name].[hash].zhoushuo.js',
      chunkFilename: '[name].[hash].zhoushuo.js'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        resolve('src/assets/css/global.styl')
      ]
    }
  }
}
