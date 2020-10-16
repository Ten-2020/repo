/*
 * @Author: 高腾
 * @Description: 干锅蟹煲
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col, Table, message } from 'antd'
import './wanyue.less'
import { search } from 'src/api/wanyue'

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
}

const columns = [
  {
    title: '词牌名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    align: 'center'
  },
  {
    title: '朝代',
    dataIndex: 'dynasty',
    key: 'dynasty',
    width: 70,
    align: 'center'
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
    width: 70,
    align: 'center'
  },
  {
    title: '内容',
    dataIndex: 'poetry',
    key: 'poetry',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    align: 'center',
    render: () => (
      <>
        <Button htmlType="button" size="small" type="primary">修改</Button>
        <Button htmlType="button" size="small" type="danger" style={{ marginLeft: '10px' }}>删除</Button>
      </>
    )
  },
]
let params = {
  name: '',
  author: '',
}
export default class Wanyue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      author: '',
      name: ''
    }
    this.search(params) // 这里要写上this,要不然就是调用引入的search方法.
  }
  search = (params) => { // 这个参数是有顺序要求的
    search(params).then((res) => {
      // console.log('res', res)
      this.setState({ list: res.data.data })
    }).catch(function (error) {
      console.log('获取失败', error)
      message.error('获取失败', error)
    })
  }
  handleSubmit = () => {
    let params = {
      name: this.state.name,
      author: this.state.author
    }
    this.search(params)
  }
  onFinish = values => { // 这个不知道是干嘛的.
    console.log(values);
  }
  handleChange = (event, prop) => {
    if (event && event.target && event.target.value) {
      let value = event.target.value;
      this.setState({ [prop]: value })
    }
  }
  render () {
    return (
      <div>
        <Card>
          <Form name="control-ref" onFinish={this.onFinish} >
            <Row>
              <Col span={5}>
                <Form.Item name="author" label="作者" rules={[{ required: true }]}>
                  <Input ref='author' onChange={event => this.handleChange(event, 'author')} />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name="name" label="词名" rules={[{ required: true }]}>
                  <Input ref='name' onChange={event => this.handleChange(event, 'name')} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Form.Item {...tailLayout}>
                  <Button onClick={this.handleSubmit} htmlType="button" size="small" type="default" >
                    查询
                  </Button>
                  <Button htmlType="button" size="small" type="default" style={{ marginLeft: '30px' }}>
                    重置
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <br />
        <Table dataSource={this.state.list} columns={columns} />
      </div>
    )
  }
}