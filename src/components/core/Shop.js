import React from 'react';
import Layout from "./Layout";
import { useSelector } from "react-redux";

function Shop () {
  const state = useSelector(state => state)

  return (
    <Layout>
      Shop  {JSON.stringify(state)}
    </Layout>
  )
}
export default Shop;