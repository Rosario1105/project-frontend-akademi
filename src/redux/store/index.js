import { legacy_createStore as createStore , applyMiddleware, combineReducers } from "redux";
import productsReducer from "../reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer, // Asegúrate de importar esto
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
