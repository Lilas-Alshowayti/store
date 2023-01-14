import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    // [getProducts.pending]: (state, action) => {
    //   //   console.log(action);
    // },
    // [getProducts.fulfilled]: (state, action) => {

    //   console.log(action.payload);
    // },
    // [getProducts.rejected]: (state, action) => {
    //   //   console.log(action);
    // },
  },
});

export default productsSlice.reducer;
