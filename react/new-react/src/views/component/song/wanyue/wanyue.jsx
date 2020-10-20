/*
 * @Author: 高腾
 * @Description: 婉约派
 * @Date: 2020-09-09 10:19:27
 */
import React, { Component } from 'react'
import { Form, Input, Button, Card, Row, Col, Table, message, Modal } from 'antd'
import './wanyue.less'
import { search, edit, fresh } from 'src/api/wanyue'

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
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
          <Button htmlType="button" size="small" type="danger" style={{ marginLeft: '10px' }}>删除</Button>
        </>
      )
    },
  ]
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      factor: { // 查询条件
        name: '',
        author: '',
      },
      modalShow: false,
      modalData: {
        author: '',
        name: '',
        poetry: '',
        dynasty: '',
        key: ''
      },
      ifModify: false,
    }
    this.search() // 这里要写上this,要不然就是调用引入的search方法.
  }
  handleEdit = (record) => {
    if (this.formModal.current) {
      this.formModal.current.resetFields()
      this.formModal.current.setFieldsValue(record)
    } else { // 第一次是因为没有渲染,所以this.formModal.current为null
      if (record) {
        this.setState({
          modalData: record // -->initialValues={this.state.modalData}|这个初始值只能赋值一回.
        })
      }
    }
    this.setState({
      modalShow: true,
      ifModify: true
    })
  }
  handleFresh = () => {
    this.setState({
      ifModify: false,
      modalShow: true,
      // modalData: '' // 这个为了测试,先不要置空
    })
  }
  handleOk = e => { // 区别是新增还是编辑的关键在于 ifModify
    console.log('查询条件', this.state.factor)
    let params = this.formModal.current.getFieldsValue(['author', 'name', 'dynasty', 'poetry','key'])
    if (this.state.ifModify) {
      console.log('打印编辑的数据', params)
      edit(params).then((res) => {
        console.log('res', res)
        if (res.status === 200) {
          this.search(this.state.factor) // 查询当前
        }
      }).catch(function (error) {
        console.log('编辑失败', error)
        message.error('编辑失败', error)
      })
    } else {
      console.log('打印新增的数据', params)
      fresh(params).then((res) => {
        console.log('res', res)
        if (res.status === 200) {
          this.search() // 查询所有
        }
      }).catch(function (error) {
        console.log('新增失败', error)
        message.error('新增失败', error)
      })
    }
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
  search = (factor) => { // 传空表示查询所有
    let params = {
      name: '',
      author: '',
    }
    factor && (params = factor)
    search(params).then((res) => {
      console.log('res',res);
      this.setState({ list: res.data })
    }).catch(function (error) {
      console.log('获取失败', error)
      message.error('获取失败', error)
    })
  }
  handleSubmit = () => {
    let factor = {
      // name: this.state.name, // 这个是通过绑定onChange方法来监听获取数据
      // author: this.state.author,
      name: this.formRef.current.getFieldValue('name'),// 这里直接通过获取form的ref来获取的
      author: this.formRef.current.getFieldValue('author'),
    }
    this.setState({ factor: factor }) // 保留查询条件,以便在编辑完成之后查询
    this.search(factor)
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
  render () {
    return (
      <div>
        <Card>
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
              <Col span={8}>
                <Form.Item {...tailLayout}>
                  <Button onClick={this.handleSubmit} htmlType="button" size="small" type="default" >
                    查询
                  </Button>
                  <Button onClick={this.onReset} htmlType="button" size="small" type="default" style={{ marginLeft: '30px' }}>
                    重置
                  </Button>
                  <Button onClick={this.handleFresh} htmlType="button" size="small" type="default" style={{ marginLeft: '30px' }}>
                    新鲜
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
            <Form.Item name="author" label="作者" rules={[{ required: true }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item name="name" label="词名" rules={[{ required: true }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item name="dynasty" label="朝代" rules={[{ required: true }]}>
              <Input></Input>
            </Form.Item>
            <Form.Item name="poetry" label="内容" rules={[{ required: true }]}>
              <Input></Input>
            </Form.Item>
          </Form>
        </Modal>
      </div >
    )
  }
}