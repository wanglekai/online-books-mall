import { isAuth } from "../helpers/auth";
import request from "../util/request";

const auth = isAuth()

const headers = {
    Authorization: `Bearer ${auth.token}`
}
// 添加分类
export const createCategory = data => {
    return request.post(`/category/create/${auth.user._id}`, data, {
        headers
    })
}
// 创建商品
export const createProduct = formData => {
    return request.post(`/product/create/${auth.user._id}`, formData , {
        headers
    })
}
// 获取订单列表
export const getOrders = () => {
    return request.get(`/order/list/${auth.user._id}`, {
        headers
    })
}
//修改订单状态
export const setOrderStatus = (orderId, status) => {
    return request.put(`/order/status/${auth.user._id}`, {
        status,
        orderId
    }, { headers })
}
