import React, { Component } from 'react'
import { Col, Row } from 'antd'
import {
  HomeTwoTone,
  SmileTwoTone,
  BellTwoTone
} from '@ant-design/icons';
import history from 'src/libs/history';

export default class Head extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  logoutClick = () => {
    history.push('/')
  }
  homeClick = () => {
    history.push('/drypot/crab')
  }
  render () {
    return (
      <div style={{ padding: 0, height: '33px', borderBottom: '1px solid red' }}>
        <Row justify="space-between" align="bottom">
          <Col order={1} flex="200px" ></Col>
          <Col order={3} flex="200px">
            <div className="icons-list" align="right">
              <HomeTwoTone onClick={this.homeClick} style={{ paddingRight: '10px', fontSize: '20px', cursor: 'pointer' }} twoToneColor="#eb2f96" />
              <SmileTwoTone onClick={this.logoutClick} style={{ paddingRight: '10px', fontSize: '20px', cursor: 'pointer' }} twoToneColor="#52c41a" />
              <BellTwoTone style={{ paddingRight: '10px', fontSize: '20px', cursor: 'pointer' }} twoToneColor="#52c41a" />
            </div>
          </Col>
          <Col order={2} flex="auto" >
            <div style={{ textAlign: 'center', paddingTop: '3px' }}>
              <h3>欢迎来到新世界</h3>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}