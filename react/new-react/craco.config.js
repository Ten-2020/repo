const path = require('path')
const CracoLessPlugin = require('craco-less');
// 这里就相当于webpack.config.js,用craco来代替webpack
module.exports = {
  devServer: {
    //如果不使用mocker-api库
    before: require('./mock/api/index')// before如果不行就用after,可惜用不到了
    // before(app){
    //   app.get('/test/get', function(req, res){    
    //    res.json({ get: 'response get' });
    //   });
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名,可以省略.
  },
  webpack: {
    alias: { // 用这个来代替上面那个
      "@": path.resolve("src"),
      // "@utils": path.resolve("src/utils"),
      "@utils": path.resolve("src/libs/utils"),
    }
  },
};