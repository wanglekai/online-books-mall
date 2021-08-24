import { Button, Card, Col, Image, Row, Typography, Modal } from 'antd'
import dateFormat from 'dateformat';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../config';
import { useDispatch } from "react-redux"
import { addItem } from '../../helpers/cart';
import { push } from "connected-react-router"
import Loading from '../../helpers/loading';
import store from '../../store'

const { Title, Paragraph } = Typography

function ProductItem ({
    product,
    imgStyle,
    showDetail = true,
    showCart = true, 
    ellipsis = {rows: 2 }}) {

    const { name, price, description, quantity, createdAt, category, _id } = product

    const [visible, setVisible] = useState(false);
    const [modalText, setModalText] = useState('已成功加入购物车');

    const showModal = () => {
        setVisible(true);
      };
    const handleOk = () => {
        setVisible(false);
        dispatch(push("/cart"))
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

    const dispatch = useDispatch()
    const addToCart = () => {
            addItem(product, () => {
                store.dispatch({type: 'changed', payload: true})
                setTimeout(() => {
                    store.dispatch({type: 'changed', payload: false})
                    showModal()
                }, 1000);
        })
    }

    const showBtn = () => {
        const btns = []
        if (showDetail) btns.push(<Button type="link"><Link to={`/product/${product._id}`}>查看详情</Link></Button>)
        if (showCart) btns.push(<Button type="link" onClick={addToCart}>加入购物车</Button>)
        return btns
    }

    return (
        <Loading >
            <Card
                cover={
                    <Image style={imgStyle} alt="product-image" src={`${API}/product/photo/${_id}`} />}
                actions={showBtn()}>
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
                <Modal
                    title="提示"
                    visible={visible}
                    okText="查看购物车~"
                    cancelText="继续逛逛"
                    onOk={handleOk}
                    okType="link"
                    onCancel={handleCancel}
                >
                    <p>{modalText}</p>
                </Modal>
            </Card>
        </Loading>
    )
}
export default ProductItem
