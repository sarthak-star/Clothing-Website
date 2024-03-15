import thunk from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userreducer";
import {
  newProductReducer,
  newReviewReducer,
  productdetailsreducer,
  productsreducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productreducer";
import { cartReducer } from "./reducers/cartreducer";



let rootReducer = combineReducers({
    products:productsreducer,
    productdetails:productdetailsreducer,
    user:userReducer,
    cart: cartReducer

});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
}; // Your initial state goes here

const middleware = [thunk]; // Your middleware array

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: middleware,
  devTools: true, // If you want to enable devtools
  
});

export default store;
