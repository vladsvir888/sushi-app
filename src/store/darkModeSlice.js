import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
      isDarkMode: false
    },
    reducers: {
        switchDarkMode: (state, action) => {
            const isDarkMode = action.payload;

            if (isDarkMode) {
                state.isDarkMode = true;

                localStorage.setItem('mode', 'dark');

                document.documentElement.classList.add('dark');
            } else {
                state.isDarkMode = false;

                localStorage.setItem('mode', 'light');

                document.documentElement.removeAttribute('class');
            }
        }
    },
});
  
export const { switchDarkMode } = darkModeSlice.actions;

const darkModeReducer = darkModeSlice.reducer;

export default darkModeReducer;
