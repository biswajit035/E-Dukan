import { combineReducers, configureStore } from "@reduxjs/toolkit";
import buyerReducers from "./buyersSlice";
import productReducers from './productSlice';
import userreducer from "./userSlice";



const store = configureStore({
    reducer: {
        product: productReducers,
        buyer: buyerReducers,
        user: userreducer
    }
})

export default store;