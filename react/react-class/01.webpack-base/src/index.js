/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-02-28 15:25:58
 */
import React from 'react'
import ReactDOM from 'react-dom'

var NodeList = React.createClass({
  render: function () {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li> {child}</li>
          })
        }
      </ol>
    )
  }
})

let NodeList = function () {
  return (
    <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li> {child}</li>
        })
      }
    </ol>
  )
}

ReactDOM.render(
  <NodeList>
    <span>你好</span>
    <span>兄弟</span>
  </NodeList>
  , document.getElementById('app'))