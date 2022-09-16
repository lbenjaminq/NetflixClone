import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import priceReducer from './PriceSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    price: priceReducer
  },
});
