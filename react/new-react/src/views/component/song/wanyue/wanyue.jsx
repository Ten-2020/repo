/*
 * @Author: 高腾
 * @Description: 干锅蟹煲
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col, Table,message } from 'antd'
import './wanyue.less'
import { search } from 'src/api/wanyue'

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
}
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '词牌名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '朝代',
    dataIndex: 'dynasty',
    key: 'dynasty',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
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
    render: () => (
      <>
        <Button htmlType="button" size="small" type="primary">修改</Button>
        <Button htmlType="button" size="small" type="danger" style={{ marginLeft: '10px' }}>删除</Button>
      </>
    )
  },
]
let params = {
  author: '',
  name: '',
}
export default class Wanyue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ''
    }
    search(params).then((res) => {
      this.setState({ list: res.data })
    }).catch(function (error) {
      message.error('获取失败', error)
    })
  }
  onFinish = values => {
    console.log(values);
  }
  render () {
    return (
      <div>
        <Card>
          <Form name="control-ref" onFinish={this.onFinish} >
            <Row>
              <Col span={5}>
                <Form.Item name="author" label="作者" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name="name" label="词名" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Form.Item {...tailLayout}>
                  <Button htmlType="button" size="small" type="default">
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