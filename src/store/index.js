import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
// import rootReducer from "./reducers";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "connected-react-router";
import createSageMiddleware from 'redux-saga'
import rootSage from "./sages/rootSage";
import { composeWithDevTools } from "redux-devtools-extension"

export const history = createBrowserHistory();

const sageMiddleware = createSageMiddleware();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sageMiddleware))
)
sageMiddleware.run(rootSage)

export default store
