import React, { Component } from 'react'
import { Input, Button, Row, Col, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './login.less';
import { login } from 'src/api/login'
import history from 'src/libs/history';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleSubmit = () => {
    let prarms = {
      username: this.refs.user.state.value,
      password: this.refs.pass.state.value,
    }
    login(prarms).then((res) => {
      history.push('/main/steak')
    }).catch(function (error) {
      message.info('This is a error username or password');
    })
  }
  render () {
    return (
      <div>
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
  // import axios from 'src/libs/axios.js'
    // axios.post('/api/login', {
    //   username: this.refs.user.state.value,
    //   password: this.refs.pass.state.value,
    // }).then((res) => {
    //   console.log('登陆', res)
    //   this.setState({
    //   })
    // }).catch(function (error) {
    //   message.info('This is a error username or password');
    // })

  // <div id="login-div" style={{ textAlign: 'center',width:'250px' }}>

    // axios.get('/api/user')
    //   .then((res) => {
    //     this.setState({
    //       // list: res.data
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })