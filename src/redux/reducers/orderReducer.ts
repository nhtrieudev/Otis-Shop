import { createSlice } from "@reduxjs/toolkit";

const orderReducer = createSlice({
  name: "order",
  initialState: {
    products: localStorage.getItem("orderRedux")
      ? JSON.parse(localStorage.getItem("orderRedux") || "null")
      : [],
  },
  reducers: {
    addOrder: (state: any, action) => {
      state.products = [...state.products, action.payload];
      localStorage.setItem("orderRedux", JSON.stringify(state.products));
    },
    removeOrder: (state: any, action) => {
      state.products = state.products.filter(
        (product: any) => product.id !== action.payload
      );
      localStorage.setItem("orderRedux", JSON.stringify(state.products));
    },
  },
});

export const { addOrder, removeOrder } = orderReducer.actions;
export default orderReducer.reducer;
