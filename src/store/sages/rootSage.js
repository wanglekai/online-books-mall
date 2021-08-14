import { all } from "@redux-saga/core/effects";
import signupSage from "./signup";

export default function* rootSage() {
  yield all([signupSage])
}
