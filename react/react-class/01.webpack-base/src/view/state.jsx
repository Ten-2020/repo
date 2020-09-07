import React from 'react'

export default class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }
  increment () {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement () {
    console.log(this)
    this.setState({
      count: this.state.count - 1
    })
  }
  clickHandle =() => {
    console.log(this)
  }
  render () {
    return (
      <div>
        <h3>组件的state</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
        <button onClick={this.decrement.bind(this)}>减少</button>
        {/* <button onClick={this.decrement}>减少</button> */}
        <button onClick={this.clickHandle}>关于this</button>
      </div>
    )
  }
}