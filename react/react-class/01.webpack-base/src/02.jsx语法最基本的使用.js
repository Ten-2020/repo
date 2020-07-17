/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-24 10:04:58
 */
import React from 'react'
import ReactDOM from 'react-dom'

// 在 js 文件中,默认不能写下面这种类似 html 的标记,否则 打包会失败,可以使用 babel 来转换 这些 js 中的标签.
// 这种在 js 中,混合写入类似于 html 的语法,叫做 jsx 语法,符合 xml 规范的 js.
// jsx 语法的本质,还是 在运行的时候,被转换成了 React.createElement 形式来执行.
const mydiv = <div id="mydiv" title="div">
  这是一个div元素
<h1> 这是一个H1 </h1>
</div>

ReactDOM.render(mydiv, document.getElementById('app'))