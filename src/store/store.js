import { configureStore } from "@reduxjs/toolkit";
import productReducers from './productSlice';

const store = configureStore({
    reducer:{
        product: productReducers
    },
})

export default store;