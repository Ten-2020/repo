/*
 * @Author: 高腾
 * @Description: 干锅蟹煲
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Image } from 'antd'
import  pic  from '@/assets/images/牛腩面.jpg'
export default class Steak extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <h3>干锅蟹煲,你值得拥有</h3>
        {/* <Image src={pic} alt="牛腩面"></Image> */}
      </div>
    )
  }
}