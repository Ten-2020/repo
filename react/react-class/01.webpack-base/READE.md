<!--
 * @Author: 高腾
 * @Description:
 * @Date: 2020-02-27 16:30:19
 -->

### 20-2-27 学习所得

- 目前 node 不支持 export default {} // 这是 ES6 中向外导出模块的 api 与之对应的是 import
- 那些特性 node 支持,如果 chrome v8 支持,node 就支持.
- node.js 是一个基于 chrome v8 引擎的 js 运行环境.也就是 node.js 把 v8 扣下来了.

- 小记一下,安装 webpack 时,要 npm install --save-dev webpack-cli -d 要把的--save-dev 这个要加上,这样才会在 json 中加上. // 这里-d 是用来存放工具的,另外还有-s
- 安装 webpack-dev-server 时也要加上--save-dev // 安装这个就能实现实时编译.
- 用 cnpm 就不行,用 npm 就行,有点奇怪

- http://localhost:8080/ 访问这个就会出现该项目的所有文件.
- "dev": "webpack-dev-server --open --port chrome 2020 --hot --host 127.0.0.1 -- progress --compress"

- 安装 babel 的时候,现在都是 "babel-loader": "^8.0.6" 版本,参考网址:https://www.cnblogs.com/QianDingwei/p/10800795.html
- 版本 8 都是 '@babel/preset-react' 这种形式,就是在前面加个@
- 察看 babel 官网之后发现添加这条命令才行:npm install --save-dev @babel/preset-react
- 01/02/03.*.js都是之前写在index.js中的,一个文件就是一节的内容,一节完后就放在这样的js文件中.

### 20-7-3 学习所得

1. 生成页面的顺序是:(main.js是放在内存中的)
- 通过react渲染dom对象生成js
- webpack将这些js打包成 main.js (可以实时打包)
- 通过插件 html-webpack-plugin 把 main.js 写入index.html
2. jsx语法
- 就是符合 xml 规范的js语法(语法格式相对html严谨很多)
- 安装 babel 插件跟配置 .babelrc 文件才能使用jsx语法