import { createSlice } from "@reduxjs/toolkit";

export const PriceSlice = createSlice({
  name: "price",
  initialState: {
    price: 0,
  },
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setPrice } = PriceSlice.actions;

export const selectPrice = (state) => state.price.price;

export default PriceSlice.reducer;
