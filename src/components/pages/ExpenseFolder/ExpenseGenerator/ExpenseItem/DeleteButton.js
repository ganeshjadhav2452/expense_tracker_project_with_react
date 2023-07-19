import React,{useContext, useEffect, useState} from 'react'
import ExpenseFormContext from '../../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
import axios from 'axios';

function DeleteButton({ serverId}) {
 
 
  const email = localStorage.getItem('email').replace('@', '').replace('.','')
  const [deleteClicked, setDeleteClicked] = useState(false)
  const {formValuesChanged, updateFormValuesChanged} = useContext(ExpenseFormContext)


  useEffect(()=>{
    const removeExpenseFromServer=async()=>{
      try{
        const response = await axios.delete(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}/${serverId}.json`)

        console.log(response)
        updateFormValuesChanged(!formValuesChanged)
      }catch(err){
        console.log(err)
      }
    }
    if(deleteClicked){
      removeExpenseFromServer()
    }
   
  },[deleteClicked])
  return <button onClick={()=>[
    setDeleteClicked(true)
  ]} className='btn-danger rounded '>Delete</button>
}

export default DeleteButton