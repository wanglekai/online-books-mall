import { Col, Row } from "antd"
import Layout from "./Layout"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_product_by_id } from "../../store/actions/product"
import ProductItem from './ProductItem'

function ProDetail () {

    const { product_id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(get_product_by_id(product_id))
    }, [])

    return (
        <Layout title="商品详情页">
            <Row>
                <Col span="18">
                    { Object.keys(product).length > 0 &&
                        <ProductItem 
                            product={product}
                            showDetail={false}
                            ellipsis={false}
                            imgStyle={{margin: '0 auto'}}
                        /> }
                </Col>
                <Col span="6">right</Col>
            </Row>
        </Layout>
    )
}
export default ProDetail
