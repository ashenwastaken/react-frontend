import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/productSlice';
import reviewReducer from './Slices/reviewSlice';
import userReducer from './Slices/userSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    reviews: reviewReducer,
    user: userReducer,
  },
});

export default store;
