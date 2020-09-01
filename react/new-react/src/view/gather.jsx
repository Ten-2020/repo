import React, { Component } from 'react'
import { Button, Input } from 'antd'
export default class Gather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: 'ab',
      val: 'abb'
    }
    this.myTextInput = React.createRef()
    this.click = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick = () => {
    // this.refs.inputText.focus()
    // 这个ref是用来获取实例dom的,即使这个方法都能调到,那说明input已经渲染完成了.
    // this.setState({ liked: 'has' })
    this.myTextInput.current.value = '123'
    this.myTextInput.current.focus()
  }
  handleChange=(e)=>{
    this.setState({ val:e.target.value })
  }
  render () {
    // const text = this.state.liked
    let val = this.state.val
    // let val = ''
    return (
      <div>
        <Input type="text" ref={this.myTextInput} onChange={this.handleChange}></Input>
        <Button type="primary" onClick={this.handleClick}>更改值</Button>
          <p>{val}</p>
        {/* <Button type="primary" onClick={()=>this.handleClick()}> */}
          {/* 第一个{val}按钮 */}
        {/* </Button> */}
        <input type="button" value="点击按钮使输入框得到焦点" onClick={this.click} />
      </div>
      // <ol>
      //   {
      //     React.Children.map(this.props.children, function (child) {
      //       return <li> {child}</li>
      //     })
      //   }
      // </ol>
    )
  }
}
