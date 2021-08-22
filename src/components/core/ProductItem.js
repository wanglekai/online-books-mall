import { Button, Card, Col, Image, Row, Typography } from 'antd'
import dateFormat from 'dateformat';
import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config';

const { Title, Paragraph } = Typography

function ProductItem ({product}) {

    const { name, price, description, quantity, createdAt, category, _id } = product

    return (
        <Card
            cover={
                <Image alt="product-image" src={`${API}/product/photo/${_id}`} />}
            actions={[
                <Button type="link"><Link to="/product/xxx">查看详情</Link></Button>,
                <Button type="link">加入购物车</Button>
            ]}
        >
            <Title style={{minHeight: 50}} ellipsis={{ rows: 2 }} level={5}>{name}</Title>
            <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
            <Row>
                <Col span="12">价格: {price}</Col>
                <Col span="12">销量: {quantity}</Col>
            </Row>
            <Row>
                <Col span="12"> {category.name}</Col>
                <Col span="12"> {dateFormat(createdAt, 'yyyy-mm-dd')}</Col>
            </Row>
        </Card>
    )
}
export default ProductItem
