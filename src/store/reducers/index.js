import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import productsReducer from "./products";
import signupReducer from "./signup";
import testReducer from "./test";

const createRootReducer = history => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  signup: signupReducer,
  products: productsReducer
})

export default createRootReducer