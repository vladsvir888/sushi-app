import { configureStore } from '@reduxjs/toolkit';

import cartModalReducer from './cartModalSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import darkModeReducer from './darkModeSlice';

export default configureStore({
  reducer: {
    cartModal: cartModalReducer,
    products: productsReducer,
    cart: cartReducer,
    darkMode: darkModeReducer,
  }
});