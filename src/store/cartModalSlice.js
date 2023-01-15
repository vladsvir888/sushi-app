import { createSlice } from '@reduxjs/toolkit';

export const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState: {
      isVisible: false
    },
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;
            document.body.classList.toggle('lock');
        }
    },
});
  
export const { toggle } = cartModalSlice.actions;

const cartModalReducer = cartModalSlice.reducer;

export default cartModalReducer;
