import {legacy_createStore,applyMiddleware} from "redux";
import productReducer from "./reducer";
import thunk from "redux-thunk"

const store = legacy_createStore(productReducer,applyMiddleware(thunk));

export default store