import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../pages/Products/state/reducer";
import { useDispatch } from "react-redux";


export const store=configureStore({
   reducer:{
        productList:ProductSlice.reducer
    }
})

export type AppDispatch=typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>()