import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../util/request";
// import { build } from "vite";

export const getData = createAsyncThunk("getstudent", async(payload)=>{
   return fetch("https://dummyjson.com/products?limit=30").then((res)=>res.json())
    
})


export const studentSlice = createSlice({
    name:"student",
    initialState:JSON.parse(localStorage.getItem("students"))??{students:[],status:"",error:"",id:null},
    reducers:{
     setId:(state,{payload})=>{
        state.id=payload;
        localStorage.setItem("students",JSON.stringify(state))
     }
    },

    extraReducers:(builder)=>{
        builder.addCase(getData.pending,(state,action)=>{
            state.status = "pending"
        });
        builder.addCase(getData.fulfilled,(state,action)=>{
            state.status = "success";
            state.students = action.payload.products;
        });
        builder.addCase(getData.rejected,(state,{payload})=>{
            state.status = "failed"
            state.reducer = payload
        });
    }
})

export const {setId}= studentSlice.actions;

export default studentSlice.reducer