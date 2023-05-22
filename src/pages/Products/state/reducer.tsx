import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductList } from '../../../services/service'
import { Resource, ResourceSuccess } from "../../../model";
import { ProductModel } from "./model";

export const getAllProducts = createAsyncThunk<any, {}, any>('products/getAllProduct', async ({ }, { rejectWithValue }) => {
    try {
        return await getProductList();
        ;
    } catch (error) {
        return rejectWithValue(error)
    }
});

let initialState = { isPending: false } as Resource<ProductModel>

export const ProductSlice = createSlice({
    name: "ProductList",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.pending, state => {
            return {
                isPending: true
            } as Resource<ProductModel>
        });

        builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
            console.log(payload, "PAyload")
            return {
                resource: payload
            } as ResourceSuccess<ProductModel>
        });

        builder.addCase(getAllProducts.rejected, (state, { meta, payload, error }) => {
            return {
                errorMessage: "cant load data"
            } as Resource<ProductModel>
        });

    }
})