import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { Layout, Menu } from 'antd'

const App = () => (
  <Layout className="wrapper">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about-us">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <span>David Dvorak ©2018 Created By David Dvorak</span>
    </Footer>
  </Layout>
)

export default App
