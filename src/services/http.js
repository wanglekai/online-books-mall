import request from "../util/request";

// 获取分类列表
export const getCategories = () => {
    return request.get('/categories')
}
// 获取商品列表
export const getProducts = params => {
    return request.get('/products', {
        params
    })
}
//  产品搜索
export const searchProduct = params => {
    return request.get('/products/search', {
        params
    })
}
