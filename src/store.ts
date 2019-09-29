import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import initialState from "./redux/initialState";
import rootReducer from "./redux/reducers/reducers";

export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
