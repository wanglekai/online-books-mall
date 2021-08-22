import React, { useEffect } from 'react'
import Layout from "./Layout"
import Search from './Search'
import { Typography, Row, Col } from 'antd'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { get_products } from '../../store/actions/products'

const { Title } = Typography

function Home () {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_products({ sortBy: "sold", limit: 4, order: "desc" }))
    dispatch(get_products({ sortBy: "createdAt", limit: 4, order: "desc" }))
  }, [])

  const { sold, createdAt } = useSelector(state => state.products)

  return (
    <Layout title="拉钩严选首页" subTitle="尽情享受吧">
      <Search />

      <Title level={5} style={{marginTop: 10}}>最新上架</Title>
      <Row gutter={[16, 16]}>
          {
            createdAt.map(product => (
              <Col key={product._id} span={4}>
                  <ProductItem product={product} />
              </Col>
            ))
          }
      </Row>

      <Title level={5} style={{marginTop: 10}}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
         {
            sold.map(product => (
              <Col key={product._id} span={4}>
                  <ProductItem product={product} />
              </Col>
            ))
          }
      </Row>
    </Layout>
  )
}
export default Home
