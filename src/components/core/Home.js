
import React from 'react'
// import { useSelector } from "react-redux"
import Layout from "./Layout"
import Search from './Search'
import { Typography, Row, Col } from 'antd'
import ProductItem from './ProductItem'

const { Title } = Typography

function Home () {
  return (
    <Layout title="拉钩严选首页" subTitle="尽情享受吧">
      <Search />

      <Title level={5} style={{marginTop: 10}}>最新上架</Title>
      <Row gutter={[16, 16]}>
          <Col span={4}>
              <ProductItem />
          </Col>
      </Row>

      <Title level={5} style={{marginTop: 10}}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
          <Col span={4}>
              <ProductItem />
          </Col>
      </Row>
    </Layout>
  )
}
export default Home
