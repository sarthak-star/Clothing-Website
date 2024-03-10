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



let rootReducer = combineReducers({
    products:productsreducer,
    productdetails:productdetailsreducer,
    user:userReducer

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
