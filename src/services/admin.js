import { isAuth } from "../helpers/auth";
import request from "../util/request";

const auth = isAuth()


// 添加分类
export const createCategory = data => {
    return request.post(`/category/create/${auth.user._id}`, data, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    })
}


// 创建商品
export const createProduct = formData => {
    return request.post(`/product/create/${auth.user._id}`, formData , {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    })
}
