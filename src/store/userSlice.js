import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./buyersSlice";


export const fetchUser = createAsyncThunk('user/fetch', async (props) => {
    const response = await fetch('http://localhost:8020/api/auth/getuser', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    });
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: "user",
    initialState:{
        data:[],
        status: STATUSES.IDLE
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })

            .addCase(fetchUser.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
})

export default userSlice.reducer;      