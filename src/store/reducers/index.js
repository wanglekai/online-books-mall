import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import filterReducer from "./filter";
import productsReducer from "./products";
import signupReducer from "./signup";
import testReducer from "./test";

const createRootReducer = history => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  signup: signupReducer,
  products: productsReducer,
  filter: filterReducer
})

export default createRootReducer
