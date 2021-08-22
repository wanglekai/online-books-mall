import React from 'react'
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd'
// import ProductItem from './ProductItem'
import getGategories from '../../helpers/getCategories'

function Search () {

    const categories = getGategories()

    return (
        <>
            <Form layout="inline" initialValues={{category: 'All'}}>
                <Input.Group compact>
                    <Form.Item name="category">
                        <Select>
                            <Select.Option value="All">所有分类</Select.Option>
                            {
                                categories.map(item => (
                                    <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="请输入搜索关键字" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Input.Group>
            </Form>
            <Divider />
            <Row gutter={[16, 16]}>
                <Col span={4}>
                    {/* <ProductItem /> */}
                </Col>
            </Row>
        </>
    )
}
export default Search
