import { Menu } from 'antd';
import { useSelector } from 'react-redux'
import React from 'react';
import { Link } from 'react-router-dom';
function Layout ({children}) {
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
      </Menu>
      Layout {children}
    </div>
  )
}
export default Layout;
