import React, { Component } from 'react';
import { Button, Input } from 'antd'
export default class Gather extends Component {

  render () {
    let handleClick = function () {
      this.refs.inputText.focus()
      // 这个ref是用来获取实例dom的,即使这个方法都能调到,那说明input已经渲染完成了.
    }
    return (
      <div>
      <Input type="text" ref="inputText"></Input>
      <Button type="primary" onClick={this.handleClick}>第一个按钮</Button>
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