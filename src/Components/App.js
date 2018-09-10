import React from 'react'

import MainNav from './MainNav'
import MyRoutes from './MyRoutes'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

const App = props => (
  <Layout className="wrapper">
    <Header>
      <MainNav />
    </Header>
    <Content style={{ padding: '50px 50px' }}>
      <MyRoutes />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <span>David Dvorak ©2018 Created By David Dvorak</span>
    </Footer>
  </Layout>
)

export default App
