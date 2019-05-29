import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import promise from "redux-promise-middleware";
import allReducers from "./reducers";

// const middleware = applyMiddleware(promise, thunk);
// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(allReducers, middleware);

let store = createStore(
    allReducers,
    composeWithDevTools (
        applyMiddleware(thunk)
    )
);

export default store;