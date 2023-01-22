import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.id);

            if (!findEl) {
                state.push({
                    ...payload,
                    quantity: 1
                });
            } else {
                findEl.quantity++;
            }

            localStorage.setItem('cart_items', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const { payload } = action;

            state = state.filter(item => payload.id !== item.id);

            localStorage.setItem('cart_items', JSON.stringify(state));

            return state;
        },
        increase: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.id);

            findEl.quantity++;

            localStorage.setItem('cart_items', JSON.stringify(state));

            return state;
        },
        decrease: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.id);

            if (findEl.quantity > 1) {
                findEl.quantity--;
            }

            localStorage.setItem('cart_items', JSON.stringify(state));

            return state;
        },
        changeInputValue: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.product.id);

            if (!isFinite(payload.quantity) || Number(payload.quantity) < 1) {
                findEl.quantity = 1;
            } else {
                findEl.quantity = Number(payload.quantity);
            }

            localStorage.setItem('cart_items', JSON.stringify(state));

            return state;
        },
        addToLS: (state, action) => {
            const { payload } = action;

            state = payload;

            return state;
        },
        clearCart: (state) => {
            localStorage.removeItem('cart_items');

            return [];
        }
    },
});
  
export const { addToCart, clearCart, removeFromCart, increase, decrease, changeInputValue, addToLS } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
