import Layout from '../core/Layout'

import React from 'react'
import { Col, Descriptions, Menu, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import {
    ShoppingCartOutlined,
    UserOutlined,
    OrderedListOutlined
} from '@ant-design/icons'
import { isAuth } from '../../helpers/auth'
// import Title from 'antd/lib/skeleton/Title'
const { Title } = Typography

function AdminDashboard () {
    const auth = isAuth()

    const adminLinks = () => (
        <>
            <Title level={5}>管理员链接</Title>
            <Menu>
                <Menu.Item>
                    <ShoppingCartOutlined />
                    <Link to="/create/category">添加分类</Link>
                </Menu.Item>
                <Menu.Item>
                    <UserOutlined />
                    <Link to="/addItem">添加商品</Link>
                </Menu.Item>
                <Menu.Item>
                    <OrderedListOutlined />
                    <Link to="/orders">订单列表</Link>
                </Menu.Item>
            </Menu>
        </>
    )
    const adminInfo = () => (
        <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">{auth.user.name}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{auth.user.email}</Descriptions.Item>
            <Descriptions.Item label="角色">管理员</Descriptions.Item>
        </Descriptions>
    )

    return (
        <Layout title="管理员 Dashboard">
            <Row>
                <Col span={4}>{adminLinks()}</Col>
                <Col span={20}>{adminInfo()}</Col>
            </Row>
        </Layout>
    )
}
export default AdminDashboard
