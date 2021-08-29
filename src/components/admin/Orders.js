import { Divider, Typography, Select } from "antd"
import React, { useEffect, useState } from 'react'
import { getOrders, setOrderStatus } from '../../services/admin'
import Layout from '../core/Layout'
import dateformat from "dateformat"


const { Title } = Typography

function Orders() {

    const [orders, setOrders] = useState([])

    const loadOrders = async () => {
        const { data } = await getOrders()
        setOrders(data)
    }

    useEffect(() => {
        loadOrders()
    }, [])


    const showStatus = status => {
        switch (status) {
            case "Unpaid":
                return "未付款"
            case "Paid":
                return "已付款"
            case "Shipped":
                return "运输中"
            case "Completed":
                return "已完成"
            case "Cancelled":
                return "已取消"
        }
    }
    const handleStatus = (status, val) =>  {
        // console.log(status, e);
        setOrderStatus(status, val).then(()=> {
            loadOrders()
        })
    }

    return (
        <Layout title="订单列表">
            {orders.map(order => (
                <div key={order._id}>
                    <Title level={5}>订单ID: {order._id}</Title>
                    <table style={{ width: "100%" }}>
                        <thead className="ant-table-thead">
                            <tr>
                                <th className="ant-table-cell">订单状态</th>
                                <th className="ant-table-cell">订单号</th>
                                <th className="ant-table-cell">总价</th>
                                <th className="ant-table-cell">创建时间</th>
                                <th className="ant-table-cell">邮寄地址</th>
                                <th className="ant-table-cell">客户姓名</th>
                            </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                            <tr className="ant-table-row">
                                <td className="ant-table-cell">
                                    {showStatus(order.status)}
                                    <Select
                                        defaultValue={order.status}
                                        onChange={(val)=>{handleStatus(order._id, val)}}
                                    >
                                        <Select.Option value="Unpaid">未付款</Select.Option>
                                        <Select.Option value="Paid">已付款</Select.Option>
                                        <Select.Option value="Shipped">运输中</Select.Option>
                                        <Select.Option value="Completed">已完成</Select.Option>
                                        <Select.Option value="Cancelled">已取消</Select.Option>
                                    </Select>
                                </td>
                                <td className="ant-table-cell">{order.trade_no}</td>
                                <td className="ant-table-cell">{order.amount}</td>
                                <td className="ant-table-cell">
                                    {dateformat(order.createdAt, "yyyy-mm-dd")}
                                </td>
                                <td className="ant-table-cell">{order.address}</td>
                                {/* <td className="ant-table-cell">{order.user.name}</td> */}
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ width: "100%" }}>
                        <thead className="ant-table-thead">
                            <tr>
                                <th className="ant-table-cell">商品名称</th>
                                <th className="ant-table-cell">商品价格</th>
                                <th className="ant-table-cell">商品数量</th>
                                <th className="ant-table-cell">商品ID</th>
                            </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                            {order.products.map(product => (
                                <tr className="ant-table-row" key={product._id}>
                                    {/* <td className="ant-table-cell">{product.product.name}</td> */}
                                    <td className="ant-table-cell">{product.product.price}</td>
                                    <td className="ant-table-cell">{product.count}</td>
                                    <td className="ant-table-cell">{product.product._id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Divider />
                </div>
            ))}
        </Layout>
    )
}
export default Orders
