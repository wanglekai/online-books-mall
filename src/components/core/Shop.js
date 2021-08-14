import React from 'react';
import Layout from "./Layout";
import { useSelector } from "react-redux";

function Shop () {
  const state = useSelector(state => state)

  return (
    <Layout title="拉钩严选商城列表" subTitle="挑选你喜欢的商品吧">
      Shop  {JSON.stringify(state)}
    </Layout>
  )
}
export default Shop;