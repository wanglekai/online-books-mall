import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import {  useSelector } from 'react-redux';

function Loading ({children}) {
    const loading = useSelector(state => state.loading)

    return (
        <Spin spinning={loading} delay={300} indicator={
            <LoadingOutlined style={{ fontSize: 24 }} spin />
        }>
            {children}
        </Spin>
    )
}

export default  Loading
