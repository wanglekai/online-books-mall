import React from 'react';
import { useSelector } from "react-redux";
import Layout from "./Layout";

function Home () {
  const state = useSelector(state => state)
  return (
    <Layout title="拉钩严选首页" subTitle="尽情享受吧">
      Home {JSON.stringify(state)}
    </Layout>
  )
}
export default Home;