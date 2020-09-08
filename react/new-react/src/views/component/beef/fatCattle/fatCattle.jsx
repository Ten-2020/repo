import React, { Component } from 'react'
export default class FatCattle extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render () {
    return (
      <div>
        <h3>客官,这是您要的肥牛,放在汤里煮个十秒左右就可以吃了,请慢慢吃!</h3>
        <img src="./img/肥牛.jpg" alt=""></img>
      </div>
    )
  }
}