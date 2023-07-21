import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const email = localStorage.getItem('email').replace('@','').replace('.','')
export const STATUSES = Object.freeze(
    {
        SUCCESS:'SUCCESS',
        ERROR:'error',
        LOADING:'LOADING'
    }
)
const initialExpenseData = createSlice({
    name:'expenseData',
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },
    reducers:{
        fetchData(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

const initialExpenseDataReducer = initialExpenseData.reducer;

export const {fetchData, setStatus} = initialExpenseData.actions;

export default initialExpenseDataReducer


// api call for get data from server

export const fetchDataFromServer = ()=>{

    return async(dispatch,getState)=>{
        const  fetchedDataFromServer = []
    try{
        const response = await axios.get(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}.json`)

        console.log(response.data)
        for (const id in response.data) {
            fetchedDataFromServer.push({
                serverId:id,
                ...response.data[id]
            })
          }
        
    }catch(err){
        console.log(err)
    }
    // Check if the fetched data has changed before updating the state
    dispatch(fetchData(fetchedDataFromServer))
    console.log(fetchedDataFromServer)

}
}   


