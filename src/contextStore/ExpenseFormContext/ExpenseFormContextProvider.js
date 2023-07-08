import React,{useState} from 'react'
import ExpenseFormContext from './ExpenseFormContext'


function ExpenseFormContextProvider(props) {

    const [formValues,setFormValues] = useState([]);

    const updateFormValues = (data)=>{
        setFormValues((prevArray)=>{
            return [...prevArray, data]
        })
    }
  return (
    <ExpenseFormContext.Provider value={{formValues, updateFormValues}}>{props.children}</ExpenseFormContext.Provider>
  )
}

export default ExpenseFormContextProvider