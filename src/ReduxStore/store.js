import { configureStore } from "@reduxjs/toolkit";
import expenseActionManagerSliceReducer from "./Slices/expenseActionManagerSlice";
import initialExpenseDataReducer from "./Slices/initalExpenseData";

const store = configureStore({

    reducer:{
        expenseAction:expenseActionManagerSliceReducer,
        expenseData:initialExpenseDataReducer
    }
})

export default store;