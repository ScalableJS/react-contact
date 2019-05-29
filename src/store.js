import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from "./reducers";

let store = createStore(
    allReducers,
    composeWithDevTools (
        applyMiddleware(thunk)
    )
);

export default store;