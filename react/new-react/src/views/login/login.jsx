import React, { Component } from 'react'
import { Input, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './login.less'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      // <div id="login-div" style={{ textAlign: 'center',width:'250px' }}>
      <div>
        <Row>
          <Col span={8} offset={10}>
            <div className="login" >
              <br />
              <br />
              <div>
                <Input size="large" placeholder="user" prefix={<UserOutlined />} />
                <br />
                <Input size="large" placeholder="pass" prefix={<UserOutlined />} />
                <br />
                <Button size="large" type="default" block >login</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}