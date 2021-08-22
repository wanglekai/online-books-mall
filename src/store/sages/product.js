import { takeEvery, put } from 'redux-saga/effects'
import { getProductById } from '../../services/http'
import { get_product_by_id, get_product_by_id_success  } from '../actions/product'

function* handleGetProduct (action) {
    let res = yield getProductById(action.payload)
    yield put(get_product_by_id_success(res.data))
}

export default function* productSage () {
    yield takeEvery(get_product_by_id, handleGetProduct)
}
