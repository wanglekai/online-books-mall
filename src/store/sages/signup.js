import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { signup, signup_fail, signup_success } from "../actions/signup";

function* handleSignup (action) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(signup_success())
  } catch (ex) {
    yield put(signup_fail({
      message: ex.response.data.error
    }))
  }
}
export default function* signupSage () {
  yield takeEvery(signup, handleSignup)
}
