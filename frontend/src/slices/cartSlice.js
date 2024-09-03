import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../constants";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const itemExist = state.cartItems.find((z) => z._id === item._id);
      if (itemExist) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === itemExist._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
