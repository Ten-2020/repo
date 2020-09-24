### 9-24 login.js中出现req.body的值是undefined
- 一来,发现虽然在这些js中写入debugger没有什么反应,但是打印语句会在控制台输出的
- 二来,axios请求的时候,可以通过在axios.js中对res/req进行数据更改(在axios.js文件中具体书写)
- 三来,数据请求到login.js时,req.body的值是undefined
- 网上说是没有对req进行解析,需要引入body-parser(yarn add body-parser)
- 虽然网上说的是node的,但是我觉得应该是一样的,使用的是同一个,实践之后发现如出一辙.
- 实现:在mock/index.js中引入body-parser:const bodyParser = require('body-parser')
- 接着在方法中:app.use(bodyParser())
- 问题就得到了解决.perfect!
- 附加:下午再试时,发现还是会出现undefined.
- 经过多次调试之后发现username: this.refs.user.value 这个是取不到值的,早上应该是直接给的值.
- 解决:username: this.refs.user.state.value


### 9-23 在 vscode 上使用 node.js 来调试 js 文件
- 因为在搞react的mock数据,因为网上说是要在craco.config.js中写before: require('./mock/index')
- 但是我请求的时候,返回的数据不在data中,而是在response.request.response中,
- 所以想看看mock中index.js是怎么写的,是如何返回数据的.
- 但是在项目启动过程跟项目启动之后再到调到请求,都不能触发index.js文件写的debugger.
- 是故只得单独调试这个index.js文件.
- 调试的时候要配置 launch.json,如下:

```json
{
  "type": "node",
  "request": "launch",
  "name": "启动程序",
  "program": "${workspaceRoot}/mock/index.js", // 打开文件的位置
  "sourceMaps": true,
}
```
- request有两种模式:launch和attach,前者是直接打开文件(如:js文件),后者是附加到浏览器上打开(如:h5文件等)
- 之前一直在尝试,但是都失败了,因为之前一直使用的是attach,报找不到require,因为这个在浏览器是无法识别的.
### 9-22 -- 把登陆逻辑搞一搞

- 重新搞了一遍 craco
- yarn|yarn add antd|yarn add @craco/craco|yarn add mockjs|yarn add axios|
- yarn add craco-less|(yarn add react-script/npm install --save react-scripts|后者有用)
- craco.config.js 就相当于 webpack.config.js,用 craco 来代替 webpack---阿里的

### 9-21 -- 已经把登陆页面弄出来了

- import 'antd/dist/antd.css',在 index.js 文件中这样引入才能成功,在 app.less 文件中引入 less 形式失败
- 在 ant-design 的官网上看到的引入 less 样式是失败的,然后在网上按教程成功的引入 less 样式.

### 9-2

- 可否照着运营平台支付中心来搭建个 React 的框架,兼备路由,全局变量,mock 数据,登陆以及导航标签等
- 心想着,能不能搞个一样的呢,先来个登陆,axios 之类的.
- 一则可以用 router 的 beforeEach 的方法返回,一则可以用不管它是哪个路径,先判断其有无 token.
- 就在 beforeEach 里判断,现在先把主页面写上.

### 8-31 JSX 语法规则

- JSX 的基本语法规则：遇到 HTML 标签（以  <  开头），就用 HTML 规则解析
- 遇到代码块（以  {  开头），就用 JavaScript 规则解析
- JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员.如下:

```jsx
var arr = [<h1>Hello world!</h1>, <h2>React is awesome</h2>]
ReactDOM.render(<div>{arr}</div>, document.getElementById('example'))
```

- 组件类的第一个字母必须大写
- 组件类只能包含一个顶层标签(这个跟在 vue 中,template 中只能有一个标签一样)
- 组件的属性可以在组件类的 this.props 对象上获取
- class 属性需要写在 className,for 属性要写成 htmlFor
- this.props.children 属性表示组件子节点,值有三种可能:
- 如果当前组件没有子节点,值就是 undefined,如果只有一个节点,数据类型就是 Object
- 如果有多个子节点,数据类型就是 Array.
- React 提供一个工具方法 React.Children 来处理 this.props.children.
- 可以使用 React.Children.map 来遍历子节点.仿如 map 方法一般,对数组进行遍历.
- 由于 this.refs.[refName]属性获取的是真实 DOM,所以必须等到虚拟 DOM 插入文档以后,才能使用.
- this.props 表示那些一旦定义,就不再改变的特性,而 this.state 是会随着用户互动而产生变化的特性.
- 写一个 XML 标签,实质上就是在调用 React.createElement 这个方法,并返回一个 ReactElement 对象.
- 当需要拓展属性的时候,定义一个属性对象,并通过{...props}的方式引入
- 属性值使用表达式,只要用 {} 替换 ""
- 在一个组件的子元素位置使用注释要用 {} 包起来
- 直接在标签上使用 style 属性时,要写成 style={{}}.两个大括号
- margin-top 要写成 marginTop.
- 如果需要使用自定义属性,要加 data- 前缀.
- 在编写 jsx 时,在{}中不能使用语句(if 语句,for 语句等等).
- map 遍历的时候,需要为第一条记录添加 key.
- 在 ES6 中,
- 我们通过定义一个继承自 React.Component 的 class 来定义一个组件类
- 在组件定义方法不再用 名称:function()的写法,而是直接用名称(),在方法的最后也不能有逗号.
- 你需要通过 bind 来绑定 this 引用,或者使用箭头函数(它会绑定当前 scope 的 this 引用)来调用.

### 8-31 react 组件生命周期

- mounting: 已插入真实 DOM
- updating: 正在被重新渲染
- unmounting:已移出真实 DOM
