import { Button, Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography

function ProductItem () {
    return (
        <Card
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[
                <Button type="link"><Link to="/product/xxx">查看详情</Link></Button>,
                <Button type="link">加入购物车</Button>
            ]}
        >
            <Title level={5}>测试标题</Title>
            <Paragraph>测试描述内容</Paragraph>
            <Row>
                <Col span="12">价格: 123</Col>
                <Col span="12">销量: 123</Col>
            </Row>
            <Row>
                <Col span="12">所属分类: 123</Col>
                <Col span="12">上架时间: 123</Col>
            </Row>
        </Card>
    )
}
export default ProductItem
