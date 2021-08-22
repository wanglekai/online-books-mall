import { takeEvery, put } from 'redux-saga/effects'
import { getProducts } from '../../services/http'
import { get_products, get_products_success } from '../actions/products'

function* handleGetProducts (action) {
    let res = yield getProducts(action.payload)
    yield put(get_products_success({
        sortBy: action.payload.sortBy,
        products: res.data
    }))
}

export default function* productsSage () {
    yield takeEvery(get_products, handleGetProducts)
}
