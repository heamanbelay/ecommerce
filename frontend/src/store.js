import thunk from "redux-thunk";
import ReactDOM from 'react-dom'
//import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/ProductReducer";
const { createStore, applyMiddleware ,combineReducers} = require('redux');

const reducer = combineReducers({
  products: productsReducer,
})

let initialState = {
    // products: productsReducer,
};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

export default store;
