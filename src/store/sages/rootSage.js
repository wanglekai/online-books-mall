import { all } from "redux-saga/effects";
import filterSage from "./filter";
import productsSage from "./products";
import productSage from "./product";
import signupSage from "./signup";

export default function* rootSage() {
  yield all([
    signupSage(),
    productsSage(),
    productSage(),
    filterSage(),
  ])
}
