import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";





export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})


export const loginBuyer = createAsyncThunk('buyers/login', async (cred)=>{
    
    const result = await fetch('http://localhost:8020/api/auth/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: cred.email,
            password: cred.password
        })
    });
    const json = await result.json();
    console.log(json);

    
    if (json.token) {
        localStorage.setItem('token', json.token);
        localStorage.setItem('isAdmin', json.fu.isAdmin);


        return {"status": json.status,"msg": json.msg};
    }
    else{
        return json
    }
})


export const registerBuyer = createAsyncThunk('buyers/register', async (cred)=>{

    // if(window.location.pathname == 'auth/signup') 
    const result = await fetch("http://localhost:8020/api/auth/signup",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: cred.fname,
            lname: cred.lname,
            email: cred.email,
            password: cred.password,
            isAdmin: cred.isAdmin
        })
    });
    const json = await result.json();

    if (json.token) {
        localStorage.setItem('token', json.token);
        localStorage.setItem('isAdmin', json.buyer.isAdmin);

        return { "status": json.status, "msg": json.msg };

    }
    else{
        return json
    }
})



const buyersSlice = createSlice({
    name: 'buyer',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addMatcher(isAnyOf(loginBuyer.pending, registerBuyer.pending),(state,action)=>{
                state.status = STATUSES.LOADING
            })
            .addMatcher(isAnyOf(loginBuyer.fulfilled, registerBuyer.fulfilled),(state,action)=>{
                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addMatcher(isAnyOf(loginBuyer.rejected, registerBuyer.rejected),(state,action)=>{
                state.status = STATUSES.ERROR
            })
    },
})

export default buyersSlice.reducer;                     




/* {status: 'success',
msg: 'Successfully created your account',
buyer: {…},
token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6eyJpZ…wNTR9.19QI0m3RqzVy_CWvo4VBveWLPR2w0b7zxmn8L5evXEo'
} */