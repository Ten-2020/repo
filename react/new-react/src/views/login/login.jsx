import React, { Component } from 'react'
import { Input, Button, Row, Col, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './login.less';
import { login } from 'src/api/login'
import history from 'src/libs/history';

export default class Login extends Component {
  constructor(props) {
    super()
    this.state = {}
  }
  handleSubmit = () => {
    let params = {
      username: this.refs.user.state.value,
      password: this.refs.pass.state.value,
    }
    login(params).then((res) => {
      history.push('/drypot/crab')
    }).catch(function (error) {
      message.info('This is a error username or password');
    })
  }
  render () {
    return (
      // 649px 下面这个100vh就代表着屏幕的高度,之前写的那些不知道能不能用.
      <div style={{ height: '100vh', backgroundImage: "url(" + require("@/assets/images/湖人总冠军.jpg") + ")" }}>
        <Row>
          <Col span={8} offset={10}>
            <div className="login" >
              <br />
              <br />
              <div>
                <Input defaultValue="weiwei" ref='user' size="large" placeholder="user" prefix={<UserOutlined />} />
                <br />
                <Input defaultValue="weiwei" ref='pass' size="large" placeholder="pass" prefix={<UserOutlined />} />
                <br />
                <Button size="large" type="default" block onClick={this.handleSubmit}>login</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
