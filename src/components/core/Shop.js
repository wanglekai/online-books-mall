import { Row, Col, Space, Button, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import Layout from "./Layout"
import { useDispatch, useSelector } from "react-redux"
import { filter_products } from '../../store/actions/filter'
import ProductItem from './ProductItem'

function Shop() {
  // const state = useSelector(state => state)
  const [filters, setFilters] = useState({ category: [], price: [] })
  const [skip, setSkip] = useState(0)

  const dispatch = useDispatch()

  const { data, size } = useSelector(state => state.filter)

  useEffect(() => {
    // console.log(filters);
    setSkip(0)
  }, [filters])


  useEffect(() => {
    dispatch(filter_products({ skip, filters}))
  }, [filters, skip])


  const showMoreBtn = () => {
    return (
      <Button type="primary" onClick={()=>{
        let cur = skip
        setSkip(cur+4)}}>加载更多</Button>
    )
  }
  const showEmty = () => {
    return (
      <Empty />
    )
  }

  return (
    <Layout title="拉钩严选商城列表" subTitle="挑选你喜欢的商品吧">
      {/* Shop  {JSON.stringify(state)} */}
      <Row>
        <Col span="4">
          <Space direction="vertical" size="middle">
            <FilterByCategory hanldeFilters={category =>
              setFilters({ ...filters, category })} />

            <FilterByPrice hanldeFilters={price =>
              setFilters({ ...filters, price })} />
          </Space>
        </Col>
        <Col span="20">
          <Space size="large" direction="vertical">
            <Row gutter={[16, 16]}>
              {
                data.map(item => (
                  <Col span={6} key={item._id}>
                    <ProductItem product={item}  key={item._id}/>
                  </Col>
                ))
              }
            </Row>
            <Row>
              {
                size < 4 ? showEmty() : showMoreBtn()
              }
            </Row>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}
export default Shop
