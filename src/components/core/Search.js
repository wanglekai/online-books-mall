import React, { useState } from 'react'
import { Button, Col, Divider, Form, Input, message, Row, Select } from 'antd'
import ProductItem from './ProductItem'
import getGategories from '../../helpers/getCategories'
import { searchProduct } from '../../services/http'

function Search () {

    const categories = getGategories()

    const [searchResult, setSearchResult] = useState([])

    const handleSearch = async values => {
        // console.log(values);
        let { data } = await searchProduct(values)
        // console.log(res);
        if (data.length === 0) {
            setSearchResult([])
            let idx = categories.findIndex(item => item._id === values.category)
            let category = idx >= 0 ? categories[idx].name : '所有'
            return message.info(`在${category}分类下 未找到 ${values.search}`)
        }

        setSearchResult(data)
    }

    return (
        <>
            <Form 
                layout="inline" 
                onFinish={handleSearch}
                initialValues={{category: 'All'}}>
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
                    <Form.Item name="search">
                        <Input placeholder="请输入搜索关键字" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">搜索</Button>
                    </Form.Item>
                </Input.Group>
            </Form>
            <Divider />
            {
                searchResult.map(item => (
                    <Row gutter={[16, 16]} key={item._id}>
                        <Col span={4}>
                            <ProductItem product={item} />
                        </Col>
                    </Row>
                ))
            }
            
        </>
    )
}
export default Search
