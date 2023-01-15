import { configureStore } from '@reduxjs/toolkit';

import cartModalReducer from './cartModalSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    cartModal: cartModalReducer,
    products: productsReducer,
    cart: cartReducer
  }
});