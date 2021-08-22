import { Row, Col, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import Layout from "./Layout";
// import { useSelector } from "react-redux";

function Shop () {
  // const state = useSelector(state => state)
  const [filters, setFilters] = useState({ categories: [], prices: [] })

  useEffect(()=>{
    console.log(filters);
  }, [filters])

  return (
    <Layout title="拉钩严选商城列表" subTitle="挑选你喜欢的商品吧">
      {/* Shop  {JSON.stringify(state)} */}
      <Row>
        <Col span="4">
          <Space direction="vertical" size="middle">
            <FilterByCategory hanldeFilters={categories => 
              setFilters({...filters, categories})} />

            <FilterByPrice hanldeFilters={prices => 
              setFilters({...filters, prices})} />
          </Space>
        </Col>
        <Col span="20">right</Col>
      </Row>
    </Layout>
  )
}
export default Shop
