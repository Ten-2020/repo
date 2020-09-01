### 8-31 学习

- JSX 的基本语法规则：遇到 HTML 标签（以  <  开头），就用 HTML 规则解析
- 遇到代码块（以  {  开头），就用 JavaScript 规则解析
- JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员.如下:

```jsx
var arr = [<h1>Hello world!</h1>, <h2>React is awesome</h2>]
ReactDOM.render(<div>{arr}</div>, document.getElementById('example'))
```

- 组件类的第一个字母必须大写
- 组件类只能包含一个顶层标签(这个跟在vue中,template中只能有一个标签一样)
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

###　听说可以,试下,再试下,来了,好的,再来,再来,再来再来  