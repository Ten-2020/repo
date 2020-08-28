/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-28 15:25:58
 */
import React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组件的方式
function Hello (props) {
  console.log(props)
  // props.name = 'zs'// 这句是报错的,因为是只读的
  // 结论:无论是Vue 还是React,组件中的props永远都是只读的.
  return <div>这是Hello组件---{props.name}---{props.age}---{props.gender}</div>
}
const dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}
ReactDOM.render(<div>
  123
  {/* 直接把组件名称以标签形式,丢到页面上即可 */}
  <Hello name={dog.name} age={dog.age} gender={dog.gender} ></Hello>
</div>
  , document.getElementById('app'))