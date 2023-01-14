import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const repeatedItem = state.find((item) => item.id === action.payload.id);
      if (repeatedItem) {
        repeatedItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
