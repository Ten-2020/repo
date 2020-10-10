import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
// import { DesktopOutlined } from '@ant-design/icons'
import { Route } from 'react-router-dom'
import routers from '@/libs/router'
import history from 'src/libs/history'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default class SiderDemo extends React.Component {
  constructor(props) {
    super()
    let { location, routes } = props
    let route = routes.find((f) => f.path === location.pathname)
    this.state = {
      collapsed: false,
      route: route, // 这个是当前显示的组件
    }
  }
  // state = {
  //   collapsed: false,
  // }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  mapRoute (item) {
    if (item instanceof Array) {
      let re = item.map((it) => {
        return this.mapRoute(it) // 第一次循环就返回了
      })
      if (re) return re
    } else {
      if (!item.exact) {
        if (item.routes) {
          return (
            // <SubMenu key={item.path} icon={<DesktopOutlined />} title={item.name}>
            <SubMenu key={item.path} icon={<item.icon />} title={item.name}>
              {item.routes.map((i) => {
                return this.mapRoute(i)
              })}
            </SubMenu>
          )
        } else {
          return (
            // <Menu.Item key={item.path} onClick={this.routePush(item.path)}> // 这个不能传参
            // onClick={this.handleClick.bind(this, 11, 22)} // 这个也可以传参
            <Menu.Item key={item.path} onClick={() => this.routePush(item.path)}>
              {item.name}
            </Menu.Item>
          )
        }
      }
    }
  }
  routePush = (path) => {
    history.push(`..${path}`)
    // 用这个在登陆页面跳转过来是可以直接渲染的,在这里只是改了地址,可能是已经渲染过的缘故!
    let { routes } = this.props
    let route = routes.find((f) => f.path === path)
    this.setState({ // 这个能够让主页面中的组件得到改变.
      route: route
    })
  }
  render () {
    let menus = this.mapRoute(routers).filter((i) => i)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0, height: '50px', background: '#fff', textAlign: 'center' }}>
          <h3>欢迎来到新世界饭店</h3>
        </Header>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme='light'>
            <div className="logo" />
            <Menu theme='light' defaultSelectedKeys={['/beef/steak']} defaultOpenKeys={['/beef']} mode="inline" style={{ background: '#fff' }}>
              {menus}
            </Menu>
          </Sider>
          <Content className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
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
