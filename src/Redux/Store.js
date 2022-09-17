import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import priceReducer from './PriceSlice'
import apiReducer from './ApiSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    price: priceReducer,
    api: apiReducer
  },
});
