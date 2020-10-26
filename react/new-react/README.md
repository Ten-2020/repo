### 10-26 
- 近来一直在弄一个配置总是,就是在mock中的文件发生更改,但是服务并没有热更新
```js
module.exports = {
  devServer: {
    before: require('./mock/api/index')// before如果不行就用after,可惜用不到了
  }
```
- 一来是因为这些文件是在启动服务器之前就已经被编译了,就跟配置文件一样,即使你改了,它也不会热更新
- 如果这些文件热更新是否由我来决定就相当好了.就不用一直在找配置,一直在网上找教程,一起在找........
- 一来如craco start 就会去读取craco.config.js这些文件,就已经配置好了.不能自主定义.贼好用.
- craco 是新的,所以很少有人知道如何配置.

### 10-19 使用node.js来对文件进来编写
- 现在的文件都是手写的,是否可以通过node.js自动书写
### 10-19 在表格的columns中绑定编辑事件时发现:
-  这个onClick={() => this.handleEdit(record)} 一定要加()=> 要不然就会被立即执行,而不是点击再执行.
-  这里的这个按钮还没有渲染,会先被渲染,而在登陆页面可以这么写,因为他不会再渲染了.
-  如果不写()=> 就会在渲染的时候把后面的内容当作js立即执行了,懂得其中差别就可以.
### 10-15 获取 input 的值

- <Input ref='user' /> 这样通过：this.refs.user.state.value 就能获取到值

```html
<Form.Item name="author" label="作者">
  <Input ref='author' onChange={event => this.handleChange(event, 'author')} />
</Form.Item>
```
```js
handleChange = (event, prop) => {
  if (event && event.target && event.target.value) {
    let value = event.target.value
    this.setState({ [prop]: value })
  }
}
```
- 要通过监听来获取到值.具体缘由不清楚.

### 10-14 想着写一个全局的 message

- 能够在每一个文件都能直接调用,而不用每次都要导入
- 但是网上的教程都挺复杂的

### 9-24 login.js 中出现 req.body 的值是 undefined

- 一来,发现虽然在这些 js 中写入 debugger 没有什么反应,但是打印语句会在控制台输出的
- 二来,axios 请求的时候,可以通过在 axios.js 中对 res/req 进行数据更改(在 axios.js 文件中具体书写)
- 三来,数据请求到 login.js 时,req.body 的值是 undefined
- 网上说是没有对 req 进行解析,需要引入 body-parser(yarn add body-parser)
- 虽然网上说的是 node 的,但是我觉得应该是一样的,使用的是同一个,实践之后发现如出一辙.
- 实现:在 mock/index.js 中引入 body-parser:const bodyParser = require('body-parser')
- 接着在方法中:app.use(bodyParser())
- 问题就得到了解决.perfect!
- 附加:下午再试时,发现还是会出现 undefined.
- 经过多次调试之后发现 username: this.refs.user.value 这个是取不到值的,早上应该是直接给的值.
- 解决:username: this.refs.user.state.value

### 9-23 在 vscode 上使用 node.js 来调试 js 文件

- 因为在搞 react 的 mock 数据,因为网上说是要在 craco.config.js 中写 before: require('./mock/index')
- 但是我请求的时候,返回的数据不在 data 中,而是在 response.request.response 中,
- 所以想看看 mock 中 index.js 是怎么写的,是如何返回数据的.
- 但是在项目启动过程跟项目启动之后再到调到请求,都不能触发 index.js 文件写的 debugger.
- 是故只得单独调试这个 index.js 文件.
- 调试的时候要配置 launch.json,如下:

```json
{
  "type": "node",
  "request": "launch",
  "name": "启动程序",
  "program": "${workspaceRoot}/mock/index.js", // 打开文件的位置
  "sourceMaps": true
}
```

- request 有两种模式:launch 和 attach,前者是直接打开文件(如:js 文件),后者是附加到浏览器上打开(如:h5 文件等)
- 之前一直在尝试,但是都失败了,因为之前一直使用的是 attach,报找不到 require,因为这个在浏览器是无法识别的.

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
