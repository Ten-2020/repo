const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    config.resolve.symlinks(true)
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    open: true, // 自动打开浏览器
    disableHostCheck: true,
    port: '12085',
    proxy: {
      '/translate': {
        // target: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh', //https://fanyi.baidu.com/?aldtype=16047#en/zh/i
        target: 'https://fanyi.baidu.com/?aldtype=16047#en/zh/i',
        ws: true,
        pathRewrite: { '^/translate': '' }, // 重写请求路径，把/translate用空替换掉
        changeOrigin: true
      }
    }
  }
}
