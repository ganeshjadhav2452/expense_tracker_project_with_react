import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'themeMode',
    initialState:{
        darkMode:false
    },
    reducers:{
        toggleTheme(state){
            state.darkMode = !state.darkMode
        }
    }

})

const themeSliceReducer = themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
export default themeSliceReducer;