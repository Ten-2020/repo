import React, { Component } from 'react'
export default class Steak extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render () {
    return (
      <div>
        <h3>客官,这是您的牛腩面,不辣的,请慢慢吃,不够再加,好不啦！</h3>
        {/* <img src="./img/牛腩面.jpg" alt="牛腩面"></img> */}
      </div>
    )
  }
}