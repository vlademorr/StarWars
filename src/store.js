import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { getCharacterAdditionalInfo } from "./middlewares/getCharacterAdditionalInfo";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk, getCharacterAdditionalInfo)));
export default store;
