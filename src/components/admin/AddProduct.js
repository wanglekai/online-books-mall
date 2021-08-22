import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload, Result, message } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createProduct } from '../../services/admin'
import Layout from '../core/Layout'
import getCategories from '../../helpers/getCategories'

function AddProduct () {

    const categories = getCategories()

    const [form] = Form.useForm()
    const [file, setFile] = useState()
    const [added, setAdded] = useState(false)
    const props = {
        beforeUpload (file) {
            // console.log(file);
            setFile(file)
            return false
        }
    }
    const onFinish = values => {
        // console.log(values);
        const formData = new FormData()
        for (let attr in values) {
            formData.append(attr, values[attr])
        }
        formData.append('photo', file)

        createProduct(formData).then( (res)=> {
            console.log(res);
            form.resetFields()
            setAdded(true)

        }).catch(err=> {
            message.error(err.response.data.error)
        }).finally(()=>{
            console.log('提交创建商品');
        })
        
    }


    const showForm = () => {
        return (
            <Form onFinish={onFinish} initialValues={{'category': '-1'}}>
                <Form.Item label="商品名称" name="name" >
                    <Input />
                </Form.Item>
                <Form.Item label="商品描述" name="description">
                    <Input value="description" />
                </Form.Item>
                <Form.Item label="商品价格" name="price">
                    <Input />
                </Form.Item>
                <Form.Item label="商品分类" name="category">
                    <Select>
                        <Select.Option value="-1">请选择分类</Select.Option>
                        {
                            categories.map(item => (
                                <Select.Option value={item._id} key={item._id}>
                                    {item.name}
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="商品数量" name="quantity">
                    <Input />
                </Form.Item>
                <Form.Item label="是否配送" name="shipping">
                    <Select>
                        <Select.Option value="1">是</Select.Option>
                        <Select.Option value="0">否</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="商品封面">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>添加商品封面</Button>
                    </Upload>
                </Form.Item>
               
                <Button>
                    <Link to='/admin/dashboard'>返回 Dashboard</Link>
                </Button>
                <Button type="primary" htmlType="submit">确认添加</Button>
            </Form>
        )
    }
    const showSuccess = () => {
        return (
            <Result
                status="success"
                title="已添加成功"
                extra={[
                <>
                    <Button type="" key="bank dashboard">
                        <Link to="/admin/dashboard">返回 dashboard</Link>
                    </Button>
                    <Button type="primary" key="success" onClick={()=>{
                        setAdded(false)
                    }}>
                        继续添加
                    </Button>
                </>
            ]} />
        )
    }

    return (
        <Layout title="添加商品">
            {added ? showSuccess(): showForm()}
        </Layout>
    )
}
export default AddProduct
