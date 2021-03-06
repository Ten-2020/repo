/*
 * @Author: 高腾
 * @Description: 婉约派
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col, Table, message, Modal } from 'antd'
import { FormInstance } from 'antd/lib/form';
import './wanyue.less'
import { search } from 'src/api/wanyue'

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
}

// const columns = [
//   {
//     title: '词牌名',
//     dataIndex: 'name',
//     key: 'name',
//     width: 100,
//     align: 'center'
//   },
//   {
//     title: '朝代',
//     dataIndex: 'dynasty',
//     key: 'dynasty',
//     width: 70,
//     align: 'center'
//   },
//   {
//     title: '作者',
//     dataIndex: 'author',
//     key: 'author',
//     width: 70,
//     align: 'center'
//   },
//   {
//     title: '内容',
//     dataIndex: 'poetry',
//     key: 'poetry',
//   },
//   {
//     title: 'Action',
//     key: 'operation',
//     fixed: 'right',
//     width: 150,
//     align: 'center',
//     render: () => (
//       <>
//         <Button htmlType="button" size="small" type="primary" onClick={handleEdit}>修改</Button>
//         <Button htmlType="button" size="small" type="danger" style={{ marginLeft: '10px' }}>删除</Button>
//       </>
//     )
//   },
// ]
let params = {
  name: '',
  author: '',
}

export default class Wanyue extends Component {
  formRef = React.createRef()
  formModal = React.createRef()
  columns = [
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
      render: (text, record) => (
        <>
          <Button htmlType="button" size="small" type="primary" onClick={() => this.handleEdit(record)}>编辑</Button>
          {/* 这个onClick={() => this.handleEdit(record)} 一定要加()=> 要不然就会被立即执行,而不是点击再执行 */}
          {/* 这里的这个按钮还没有渲染,会先被渲染,而在登陆页面可以这么写,因为他不会再渲染了 */}
          {/* 如果不写()=> 就会在渲染的时候把后面的内容当作js立即执行了,懂得其中差别就可以 */}
          <Button htmlType="button" size="small" type="danger" style={{ marginLeft: '10px' }}>删除</Button>
        </>
      )
    },
  ]
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      author: '',
      name: '',
      modalShow: false,
      modalData: {
        author: '',
        name: '',
        poetry: ''
      }
    }
    this.search(params) // 这里要写上this,要不然就是调用引入的search方法.
  }
  handleEdit = (record) => {
    if (this.formModal.current) {
      this.formModal.current.resetFields()
      this.formModal.current.setFieldsValue(record)
      this.setState({
        modalShow: true
      })
    } else { // 第一次是因为没有渲染,所以this.formModal.current为null
      if (record) {
        this.setState({
          modalShow: true,
          modalData: record // -->initialValues={this.state.modalData}|这个初始值只能赋值一回.
        })
      } else {
        this.setState({
          modalShow: true
        })
      }
    }
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
    // console.log('打印this.ref',this.formRef.current.getFieldValue('author'))
    let params = {
      // name: this.state.name, // 这个是通过绑定onChange方法来监听获取数据
      // author: this.state.author,
      name: this.formRef.current.getFieldValue('name'),// 这里直接通过获取form的ref来获取的
      author: this.formRef.current.getFieldValue('author'),
    }
    this.search(params)
  }
  onReset = () => {
    this.formRef.current.resetFields();
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
  handleOk = e => {
    // console.log(e)
    this.setState({
      modalShow: false,
    })
  }

  handleCancel = e => {
    // console.log(e)
    this.setState({
      modalShow: false,
    })
  }
  render () {
    return (
      <div>
        <Card>
          {/* onFinish={this.onFinish} */}
          <Form name="control-ref" ref={this.formRef}  >
            <Row>
              <Col span={5}>
                <Form.Item name="author" label="作者" rules={[{ required: true }]}>
                  <Input />
                  {/* onChange={event => this.handleChange(event, 'author')} */}
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item name="name" label="词名" rules={[{ required: true }]}>
                  <Input />
                  {/* onChange={event => this.handleChange(event, 'name')} */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Form.Item {...tailLayout}>
                  <Button onClick={this.handleSubmit} htmlType="button" size="small" type="default" >
                    查询
                  </Button>
                  <Button onClick={this.onReset} htmlType="button" size="small" type="default" style={{ marginLeft: '30px' }}>
                    重置
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <br />
        <Table dataSource={this.state.list} columns={this.columns} />
        <Modal
          title="婉约派宋词编辑"
          visible={this.state.modalShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form name="abc" ref={this.formModal} initialValues={this.state.modalData}>
            <Form.Item name="author" label="作者">
              <Input></Input>
              {/* <Input defaultValue={this.state.modalData.author.toString()} ></Input> */}
              {/* 这个默认赋值因为缓存的问题,被替代了 */}
            </Form.Item>
            <Form.Item name="name" label="词名" >
              <Input></Input>
            </Form.Item>
            <Form.Item name="poetry" label="内容">
              <Input></Input>
            </Form.Item>
          </Form>
        </Modal>
      </div >
    )
  }
}