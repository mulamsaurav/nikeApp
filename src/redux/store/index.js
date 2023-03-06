import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from './productsSlice.js';
import {cartSlice} from './cartSlice.js';
import {apiSlice} from './apiSlice.js';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    api: apiSlice.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
