/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-24 10:04:58
 */
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
let str = '中国'
let boo = false
let title = '999'
const h1 = <h1>上海</h1>
const arr = [
  <h2>这是h2</h2>,
  <h3>这是h3</h3>
]
const arrStr = ['a','b','c','d']
const nameArr = []
arrStr.forEach(item =>{
  const temp = <h5>{item}</h5>
  nameArr.push(temp)
})
const result = arrStr.map(item=>{ // 使用map对数组进行统一操作
  return item + '~'
})
console.log('结果是:', result)

ReactDOM.render(
<div>
  {2+a}
  <hr/>
  {str}
  <hr/>
  {boo ? '真':'假'}
  <hr/>
  <p title={title}>这是P标签</p>
  {h1}
  {arr}
  {nameArr}
  {arrStr.map((item=>{
    return <h3>{item}</h3>
  }))}
  <hr/>
  <p className="myEle">!!!!</p> 
  {/* 用className 来代替 class 用 htmlFor 代替 for */}
  <label htmlFor="ooo">1111</label>
</div>
  , document.getElementById('app'))