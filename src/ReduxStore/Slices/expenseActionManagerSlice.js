import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const email = localStorage.getItem('email').replace('@','').replace('.','')
const expenseActionManagerSlice = createSlice({
    
    name:'expenseManager',
    initialState:{
        expense:{},
        isEdit:false
    },
    reducers:{
        edit(state,action){
            Object.assign(state, action.payload);
           
        }
       
    }
})
 const expenseActionManagerSliceReducer = expenseActionManagerSlice.reducer;
export const {edit} = expenseActionManagerSlice.actions;

export default expenseActionManagerSliceReducer


// api calls for updating expense

export const updateExpense =(expenseObj)=>{
   

   
    return async(dispatch, getState)=>{

        try {
           await axios.put(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}/${expenseObj.serverId}.json`,{...expenseObj})
           
         
        } catch (error) {
            console.log(error)  
        }
        dispatch(edit({ expense:{},
            isEdit:false}))
    }
   

    
}

// api call for delete expense

export const deleteExpense =({serverId})=>{
   

   console.log(serverId)
    return async(dispatch, getState)=>{

        try {
           await axios.delete(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}/${serverId}.json`)
           
         
        } catch (error) {
            console.log(error)  
        }
      
    }
   
}
