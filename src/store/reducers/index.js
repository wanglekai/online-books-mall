import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import filterReducer from "./filter";
import productsReducer from "./products";
import productReducer from "./product";
import signupReducer from "./signup";
import testReducer from "./test";

const createRootReducer = history => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  signup: signupReducer,
  products: productsReducer,
  product: productReducer,
  filter: filterReducer,
})

export default createRootReducer
