import React from 'react'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {/* <li>首页</li>
          <li>学习</li>
          <li>视频</li> */}
          {
            this.props.nav.map((el,inx) => {
            return (<li key={inx}>{el}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}