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
                })
            } else {
                findEl.quantity++;
            }
        },
        removeFromCart: (state, action) => {
            const { payload } = action;

            return state.filter(item => payload.id !== item.id);
        },
        increase: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.id);

            findEl.quantity++;
        },
        decrease: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.id);

            if (findEl.quantity > 1) {
                findEl.quantity--;
            }
        },
        changeInputValue: (state, action) => {
            const { payload } = action;

            const findEl = state.find(item => item.id === payload.product.id);

            if (!isFinite(payload.quantity) || Number(payload.quantity) < 1) {
                findEl.quantity = 1;
            } else {
                findEl.quantity = Number(payload.quantity);
            }
        },
        clearCart: (state) => {
            return [];
        }
    },
});
  
export const { addToCart, clearCart, removeFromCart, increase, decrease, changeInputValue } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
