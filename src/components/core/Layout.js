import React from 'react';
import { Menu, PageHeader } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'

function Layout ({children, title, subTitle}) {
  const router = useSelector(state => state.router)
  const auth = isAuth()

  const showAuth = () => {
    return (
      <>
        <Menu.Item key="/signin">
          <Link to="/signin">登录</Link>
        </Menu.Item>
        <Menu.Item key="/signup">
          <Link to="/signup">注册</Link>
        </Menu.Item>
      </>
    )
  }
  const showAashboard = () => {
    let url = auth.user.role === 1 ? '/admin/dashboard' : '/user/dashboard'
    return (
      <Menu.Item key={url}>
        <Link to={url}>Dashboard</Link>
      </Menu.Item>
    )
  }

  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[router.location.pathname]} className="center-container">
        <Menu.Item key="/">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/shop">
          <Link to="/shop">商城</Link>
        </Menu.Item>
        { auth ? showAashboard() : showAuth() }
      </Menu>
      <PageHeader
        style={{padding: '20px 7.5%'}}
        className="site-page-header jumbotron"
        title={title}
        subTitle={subTitle}/>
      <div className="center-container">
        {children}
      </div>
    </div>
  )
}
export default Layout

