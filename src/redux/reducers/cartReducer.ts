import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("cartRedux")
    ? JSON.parse(localStorage.getItem("cartRedux") || "null")
    : [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state: any, action) => {
      state.products = [...state.products, action.payload];
      localStorage.setItem("cartRedux", JSON.stringify(state.products));
    },
    removeCart: (state: any, action) => {
      state.products = state.products.filter(
        (product: any) => product.id !== action.payload
      );
      localStorage.setItem("cartRedux", JSON.stringify(state.products));
    },
    removeAll: (state: any, action) => {
      state.products = action.payload;
      localStorage.setItem("cartRedux", JSON.stringify(state.products));
    },
  },
});

export const { addCart, removeCart, removeAll } = cartReducer.actions;

export default cartReducer.reducer;
