import request from "../util/request";

export const getProducts = params => {
    return request.get('/products', params)
}
