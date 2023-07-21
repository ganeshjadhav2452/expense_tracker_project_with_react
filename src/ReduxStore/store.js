import { configureStore } from "@reduxjs/toolkit";
import expenseActionManagerSliceReducer from "./Slices/expenseActionManagerSlice";
import initialExpenseDataReducer from "./Slices/initalExpenseData";
import themeSliceReducer from "./Slices/themeSlice";
const store = configureStore({

    reducer:{
        expenseAction:expenseActionManagerSliceReducer,
        expenseData:initialExpenseDataReducer,
        themeMode:themeSliceReducer
    }
})

export default store;