/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-28 09:16:24
 */
// 假设,main.js 还是我们的入口文件
// console.log('ko')
// webpack-dev-server 打包好的 main.js 是托管到了内存中,所以在项目根目录中找不到.
// 但是,我们可以认为,在项目根目录中,有一个看不见的 main.js.
// 项目打包之后这个index.js就会变成main.js被引入到index.html中.

// 这两个导入的时候,接收的成员名称,必须这么写:React/ReactDOM
import React from 'react' // 创建组件,虚拟DOM元素,生命周期
import ReactDOM from 'react-dom' // 把上面的放到页面上展示

const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个H1')

const mydiv = React.createContext('div',{id:'div'},myh1)
// ReactDOM.render(myh1,'#app')
ReactDOM.render(mydiv, document.getElementById('app'))