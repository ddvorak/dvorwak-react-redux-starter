import React from 'react'
import { withRouter } from 'react-router'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const getKeyForRoute = pathname => {
  if (pathname.toString() === '/') {
    return ['1']
  } else if (pathname.toString() === '/counter') {
    return ['2']
  } else if (pathname.toString() === '/example-form-page') {
    return ['3']
  } else {
    return ['1']
  }
}

const MainNav = props => {
  let key = getKeyForRoute(props.location.pathname)
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={key}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/counter">Counter</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/example-form-page">Example Form Page</Link>
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(MainNav)
