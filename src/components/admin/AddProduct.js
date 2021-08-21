import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../services/admin'
import Layout from '../core/Layout'

const { Option } = Select

function AddProduct () {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getlist() {
            const { data } = await getCategories()
            // console.log(data);
            setCategories(data)
        }
        getlist()
    }, [])

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
                    <Select defaultValue='-1'>
                        <Option value="-1">请选择分类</Option>
                        {
                            categories.map(item => (
                                <Option value={item.name} key={item._id}>{item.name}</Option>
                            ))
                        }
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
