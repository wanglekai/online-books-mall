import { all } from "redux-saga/effects";
import filterSage from "./filter";
import productsSage from "./products";
import signupSage from "./signup";

export default function* rootSage() {
  yield all([signupSage(), productsSage(), filterSage()])
}
