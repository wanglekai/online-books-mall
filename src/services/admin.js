import { isAuth } from "../helpers/auth";
import request from "../util/request";

export const createCategory = data => {
    const auth = isAuth()
    return request.post(`/category/create/${auth.user._id}`, data, {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    })
}
