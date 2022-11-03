
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";


ReactDOM.render(
 
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
</BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();




// import React from 'react';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import App from './App';

// const rootElement = 
// document.getElementById('root');
// const root = 
// createRoot(rootElement);

// // const root = createRoot(rootElement!);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


//import React from 'react';
// import ReactDom from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from "./store";
// import { render } from "react-dom";

// const root = ReactDom.createRoot(document.getElementById('root'));
// ReactDom.render(
//   <React.StrictMode store ={store}>
//    <BrowserRouter>  
//       <App />
//     </BrowserRouter>  
//   </React.StrictMode>
  
// );

// reportWebVitals();

