import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { createCategory } from '../../services/admin';
import Layout from '../core/Layout';

function AddCategory () {

    const onFinish = async values => {
        const { data } = await createCategory(values)

        message.success(`${data.name} 添加成功~`)
    }

    return (
        <Layout title="添加分类">
            <Form  onFinish={onFinish} >
                <Form.Item name="name" label="分类名称">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">添加分类</Button>
                </Form.Item>
            </Form>
            <Button>
                <Link to='/admin/dashboard'>返回 Dashboard</Link>
            </Button>
        </Layout>
    )
}

export default AddCategory
