import { put, takeEvery } from "redux-saga/effects";
import { filterProducts } from "../../services/http";
import { filter_products, filter_products_success } from "../actions/filter";

function* handleFilter (action) {
    let { data } = yield filterProducts(action.payload)

    yield put(filter_products_success({
        skip:  action.payload.skip,
        ...data
    }))
}

export default function* filterSage () {
    yield takeEvery(filter_products, handleFilter)
}
