import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL="http://localhost:3008/products";

const fetchData =createAsyncThunk("api/fetchData",async()=>{
    const response= await axios.get(API_URL)
    return response.data;
});

const apiSlice=createSlice({
    name:"api",
    initialState:{
        data:[],
        status:"idle",
        error:null
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loading";
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.data=action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed";
            state.data=action.error.message;
        })
    }
});

export default apiSlice.reducer;