import { all } from "redux-saga/effects";
import signupSage from "./signup";

export default function* rootSage() {
  yield all([signupSage()])
}
