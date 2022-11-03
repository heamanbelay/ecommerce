import thunk from "redux-thunk";
import ReactDOM from 'react-dom'
// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productDetailsReducer } from "./reducers/ProductReducer";
//const { createStore, applyMiddleware ,combineReducers} = require('redux');
import { configureStore, combineReducers , applyMiddleware } from '@reduxjs/toolkit'
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user:userReducer
})

let initialState = {
  products: productsReducer,
    
};

const middleWare = [thunk];


const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

export default store;
