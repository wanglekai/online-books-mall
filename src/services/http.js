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
// 商品过滤
export const filterProducts = data => {
    return request.post('/products/filter', data)
}
// 根据产品ID获取产品信息
export const getProductById = id => {
    return request.get(`/product/${id}`)
}
