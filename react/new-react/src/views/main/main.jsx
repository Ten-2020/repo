import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Input, Button, Row, Col, message } from 'antd'
import { Route } from 'react-router-dom'
import routers from '@/libs/router'
import history from 'src/libs/history'
import Head from '@/views/main/com/header'
import './main.less'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default class SiderDemo extends React.Component {
  constructor(props) {
    super()
    let { location:{pathname}, routes } = props
    let route = routes.find((f) => f.path === pathname)
    let parPath = pathname.split('/')[1] // 父菜单路径
    this.state = {
      collapsed: false,
      route: route, // 在中间界面中要显示的组件
      // openKey: '/drypot', // 默认打开的父菜单
      // selectedKey: '/drypot/crab', // 默认选择的子菜单
      openKey: `/${parPath}`, // 之前每次执行history.push(path)默认打开的菜单都是路径跳转的那个菜单,
      // 但是点击子菜单也能执行这句,所以需要根据跳转的路径来判断默认打开的父菜单以及选中的子菜单.
      selectedKey: pathname
    }
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  mapRoute (item) {
    if (item instanceof Array) {
      let re = item.map((it) => {
        return this.mapRoute(it)
      })
      if (re) return re
    } else {
      if (!item.exact) {
        if (item.routes) {
          return (
            <SubMenu key={item.path} icon={<item.icon />} title={item.name}>
              {item.routes.map((i) => {
                return this.mapRoute(i)
              })}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={item.path} onClick={() => this.routePush(item.path)}>
              {item.name}
            </Menu.Item>
          )
        }
      }
    }
  }
  routePush = (path) => {
    let { routes } = this.props
    let route = routes.find((f) => f.path === path)
    history.push(path)
    this.setState({
      route: route,
    })
  }
  render () {
    let menus = this.mapRoute(routers).filter((i) => i)
    return (
      <Layout style={{ minHeight: '100vh' }}>
          <Head></Head>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme='light'>
            <div className="logo" />
            {/* <Menu theme='light' defaultSelectedKeys={['/drypot/crab']} defaultOpenKeys={['/drypot']} mode="inline" style={{ background: '#fff' }}> */}
            <Menu theme='light' defaultSelectedKeys={[this.state.selectedKey]} defaultOpenKeys={[this.state.openKey]} mode="inline" style={{ background: '#fff' }}>
              {menus}
            </Menu>
          </Sider>
          <Content className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '6px 0' }}>
                <Breadcrumb.Item>owner</Breadcrumb.Item>
                <Breadcrumb.Item>weiwei</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 460 }}>
                <Route routes={this.state.route} component={this.state.route.component} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'right' }}>Created By GT</Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
