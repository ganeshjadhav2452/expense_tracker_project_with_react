import React,{useContext, useEffect, useState} from 'react'
import ExpenseFormContext from '../../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
import axios from 'axios';
import { deleteExpense } from '../../../../../ReduxStore/Slices/expenseActionManagerSlice';
import { useDispatch } from 'react-redux';
function DeleteButton({ serverId}) {
 
  const dispatch = useDispatch()
 
  const [deleteClicked, setDeleteClicked] = useState(false)
  const {formValuesChanged, updateFormValuesChanged} = useContext(ExpenseFormContext)


  useEffect(()=>{
   
    const removeExpenseFromServer=async()=>{
      
     await dispatch(deleteExpense({serverId}))
     updateFormValuesChanged(!formValuesChanged)
    }
    if(deleteClicked){
      removeExpenseFromServer()
    }
   
  },[deleteClicked])
  return <button onClick={()=>( setDeleteClicked(true))} className='btn-danger rounded '>Delete</button>
}

export default DeleteButton