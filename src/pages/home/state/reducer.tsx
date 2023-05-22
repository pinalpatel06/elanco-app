import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetail } from '../../../services/service';
import { Resource, ResourceSuccess } from "../../../model";
import { ProductDetailModel } from "./model";

export const getAppDetail = createAsyncThunk<
  any,
  { resourceName: string },
  any
>(
  "application",
  async ({ resourceName }, { rejectWithValue }) => {
    try {
      return await getDetail(resourceName);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

let initialState = { isPending: false } as Resource<ProductDetailModel>

export const ProductSlice = createSlice({
    name: "AppList",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAppDetail.pending, state => {
            return {
                isPending: true
            } as Resource<ProductDetailModel>
        });

        builder.addCase(getAppDetail.fulfilled, (state, { payload }) => {
            console.log(payload, "PAyload")
            return {
                resource: payload
            } as ResourceSuccess<ProductDetailModel>
        });

        builder.addCase(getAppDetail.rejected, (state, { meta, payload, error }) => {
            return {
                errorMessage: "cant load data"
            } as Resource<ProductDetailModel>
        });

    }
})