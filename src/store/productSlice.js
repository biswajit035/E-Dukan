import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})


export const fetchProducts = createAsyncThunk('products/fetch', async (props) => {
    const res = await fetch(props);
    const data = await res.json();
    return data;
});


const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status: STATUSES.IDLE
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchProducts.pending,(state,action)=>{
                state.status = STATUSES.LOADING
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.data = action.payload;
                state.status = STATUSES.IDLE;

            })
            .addCase(fetchProducts.rejected,(state,action)=>{
                state.status = STATUSES.ERROR
            })
    }
})

export default productSlice.reducer;