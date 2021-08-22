import {  handleActions } from "redux-actions";
import { get_product_by_id_success } from "../actions/product";

const initialState = {
    product: {}
}

const productReducer = handleActions({
    [get_product_by_id_success]: (state, action) => { 
        return {
            product: action.payload
        }
     }
}, initialState)

export default productReducer
