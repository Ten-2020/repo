/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-28 15:25:58
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
ReactDOM.render(<App></App>,document.getElementById('app'))

// function tick(){
//   const ele = (// 这里的括号,就像计算的时候,只是为了表示括号内是一个整体
//     <div>
//       <h1>Hello.world</h1>
//       <h2>It is {new Date().toLocaleDateString()}</h2>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(ele,document.getElementById('app'))
// }
// setInterval(tick,1000)