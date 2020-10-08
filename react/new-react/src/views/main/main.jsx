import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  // PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons'
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
      routers: routers, // 这个是router中的所有的跳转路由
    }
  }
  // state = {
  //   collapsed: false,
  // }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  mapRoute(item) {
    if (item instanceof Array) {
      let re = item.map((it) => {
        return this.mapRoute(it) // 第一次循环就返回了
      })
      if (re) return re
    } else {
      if (!item.exact) {
        if (item.routes) {
          return (
            <SubMenu key={item.path} icon={<DesktopOutlined />} title={item.name}>
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
    this.setState({ // 这个能够让主页面中的页面得到改变.
      route: route
    })
  }
  render() {
    let menus = this.mapRoute(routers).filter((i) => i)

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          {/* <div className="logo" /> */}
          <Menu theme='light' defaultSelectedKeys={['1']} mode="inline">
            {menus}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>weiwei</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route routes={this.state.route} component={this.state.route.component} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created By GT</Footer>
        </Layout>
      </Layout>
    )
  }
}
