import thunk from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {productdetailsreducer, productsreducer} from "./reducers/productreducer";



let rootReducer = combineReducers({
    products:productsreducer,
    productdetails:productdetailsreducer

});

const initialState = {}; // Your initial state goes here

const middleware = [thunk]; // Your middleware array

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: middleware,
  devTools: true, // If you want to enable devtools
  
});

export default store;
