import React from 'react';
import { Menu, PageHeader } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Layout ({children, title, subTitle}) {
  const router = useSelector(state => state.router)
  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/shop">
          <Link to="/shop">商城</Link>
        </Menu.Item>
        <Menu.Item key="/signin">
          <Link to="/signin">登录</Link>
        </Menu.Item>
        <Menu.Item key="/signup">
          <Link to="/signup">注册</Link>
        </Menu.Item>
      </Menu>
      <PageHeader
        className="site-page-header jumbotron"
        title={title}
        subTitle={subTitle}/>
      <div className="center-container">
        {children}
      </div>
    </div>
  )
}
export default Layout;
