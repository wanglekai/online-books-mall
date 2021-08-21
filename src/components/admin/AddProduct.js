import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'

const { Option } = Select

function AddProduct () {
    return (
        <Layout title="添加商品">
            <Form>
                <Form.Item label="商品名称">
                    <Input name="name" />
                </Form.Item>
                <Form.Item label="商品描述">
                    <Input name="description" />
                </Form.Item>
                <Form.Item label="商品价格">
                    <Input name="price" />
                </Form.Item>
                <Form.Item label="商品分类">
                    <Select>
                        <Option key="1">1</Option>
                        <Option key="2">2</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="商品数量">
                    <Input name="quantity" />
                </Form.Item>
                <Form.Item label="是否配送">
                    <Select defaultValue="0">
                        <Option key="0" value="0">否</Option>
                        <Option key="1" value="1">是</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="商品封面">
                    <Upload>
                        <Button icon={<UploadOutlined />}>添加商品封面</Button>
                    </Upload>
                </Form.Item>
               
                <Button>
                    <Link to='/admin/dashboard'>返回 Dashboard</Link>
                </Button>
                <Button type="primary" htmlType="submit">确认添加</Button>
            </Form>
        </Layout>
    )
}
export default AddProduct
