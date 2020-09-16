/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-24 10:14:08
 */
// 向外暴露一个打包的配置对象.因为webpack是基于node构建的,所以webpack 支持所有 node api.
// webpack 默认只能打包处理 .js 后缀名类型的文件,像 .png .vue 无法主动处理,所以要配置第三方的loader.
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成 index 页面的插件.

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),// 原文件 // __dirname是指项目的目录
  filename: 'index.html' // 生成的内存中首页的名称
})


module.exports = {
  mode: 'production', // development production // 这个必选项
  entry: "./src/index.js", // 这个要加上,要不就会报错.
  plugins: [
    htmlPlugin
  ],
  module: { // 所有第三方 模块的配置规则
    rules: [ // 第三方茶杯规则
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加exclude 排除项

    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名,可以省略.
    alias:{
      '@':path.join(__dirname,'./src') // 这样,@就表示项目根目录中src的这一层路径
    }
  }
}


// 在 webpack 4.* 中,有一个很大的特性,就是 约定大于配置 ,默认的打包入口路径是 src -> index.js
// 目的是为了尽量减少配置文件的体积