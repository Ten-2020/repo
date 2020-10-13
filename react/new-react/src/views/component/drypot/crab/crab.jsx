/*
 * @Author: 高腾
 * @Description: 干锅蟹煲
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col } from 'antd';
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
}
export default class Steak extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Form.Item {...tailLayout}>
                  <Button htmlType="submit" size="small">
                    submit
                  </Button>
                  <Button htmlType="button" size="small" style={{ marginLeft: '30px' }}>
                    reset
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    )
  }
}