import React, { Component } from 'react'
export default class Sirloin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h3>客官,这是刚刚煎好的上好牛排,小心烫啊,请慢慢吃！</h3>
        <img src="./img/牛排.jpg" alt=""></img>
      </div>
    )
  }
}
