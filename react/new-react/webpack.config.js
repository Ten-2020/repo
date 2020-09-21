/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-24 10:14:08
 */
// 向外暴露一个打包的配置对象.因为webpack是基于node构建的,所以webpack 支持所有 node api.
// webpack 默认只能打包处理 .js 后缀名类型的文件,像 .png .vue 无法主动处理,所以要配置第三方的loader.
const path = require('path')

module.exports = {
  mode: 'production', // development production // 这个必选项
  entry: path.resolve(__dirname, '../src/index.js'), // 这个要加上,要不就会报错.
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名,可以省略.
    alias: {
      '@': path.join(__dirname, './src') // 这样,@就表示项目根目录中src的这一层路径
    }
  },
  /**
 * 指定打包后的 bundle 如何输出
 * 特别说明：
 * 1. bundle是指多个模块打包在一起，产生的新文件。bundle 一般由html文件通过 script 标签加载
*/
  output: {
    path: path.resolve(__dirname, "../dist/"), // 打包后的 bundle 的生成位置（E:/react-template/dist/）
    filename: "js/main.js", // 主 bundle（E:/react-template/dist/js/main.js）
    chunkFilename: "js/[name].js", // chunk: 单独拆分出来的 bundle，name即为chunk的名称
    // publicPath + chunkFilename 为打包后生成的html文件请求 chunkFile 的路径
    // publicPath + 图片的URL 为打包后生成的html文件请求图片的路径，其他静态资源文件同理
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            ['import', { libraryName: 'antd', style: true }],
          ],
        },
      },
    ]
  }
}