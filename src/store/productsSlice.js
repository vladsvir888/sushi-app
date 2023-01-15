import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      data: []
    },
    reducers: {
        add: (state, action) => { // action = {};
            const { payload } = action;

            state.data = payload;
        }
    },
});
  
export const { add } = productsSlice.actions;

const productsReducer = productsSlice.reducer;

export default productsReducer;
