import { legacy_createStore as createStore , applyMiddleware, combineReducers } from "redux";
import productsReducer from "../reducers";
import { thunk } from "redux-thunk";
import modalReducer from "../reducers/modalReducer";


const rootReducer = combineReducers({
  products: productsReducer,
  modal: modalReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
