import { Button, Card, Col, Image, Row, Typography } from 'antd'
import dateFormat from 'dateformat';
import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config';

const { Title, Paragraph } = Typography

function ProductItem ({
    product,
    imgStyle,
    showDetail = true,
    showCart = true, 
    ellipsis = {rows: 2 }}) {

    const { name, price, description, quantity, createdAt, category, _id } = product

    const showBtn = () => {
        const btns = []
        if (showDetail) btns.push(<Button type="link"><Link to={`/product/${product._id}`}>查看详情</Link></Button>)
        if (showCart) btns.push(<Button type="link">加入购物车</Button>)
        return btns
    }

    return (
        <Card
            cover={
                <Image style={imgStyle} alt="product-image" src={`${API}/product/photo/${_id}`} />}
            actions={showBtn()}
        >
            <Title style={{minHeight: 50}} ellipsis={ellipsis} level={5}>{name}</Title>
            <Paragraph ellipsis={ellipsis}>{description}</Paragraph>
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
