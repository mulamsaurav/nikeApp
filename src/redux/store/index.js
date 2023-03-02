import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from './productsSlice.js';
import {cartSlice} from './cartSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
