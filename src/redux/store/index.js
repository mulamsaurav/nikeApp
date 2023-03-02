import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from './productsSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
