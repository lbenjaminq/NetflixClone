import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
  },
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = apiSlice.actions;


export default apiSlice.reducer;
