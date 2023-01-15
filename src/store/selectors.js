import { createSelector } from '@reduxjs/toolkit';

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector(cartSelector, (state) => state.reduce((sum, current) => sum + current.quantity, 0));

export const cartTotalPriceSelector = createSelector(cartSelector, (state) => state.reduce((sum, current) => Number((sum + (current.price * current.quantity)).toFixed(2)), 0));