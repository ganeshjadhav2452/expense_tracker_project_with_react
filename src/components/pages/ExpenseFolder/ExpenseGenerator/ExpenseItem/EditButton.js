import React, { useContext, useEffect, useState } from 'react'
import EditButtonContext from '../../../../../contextStore/EditButtonContext/EditButtonContext'
import axios from 'axios';
import ExpenseFormContext from '../../../../../contextStore/ExpenseFormContext/ExpenseFormContext'

function EditButton(props) {

  const email = localStorage.getItem('email').replace('@', '').replace('.','')
  const {formValuesChanged, updateFormValuesChanged} = useContext(ExpenseFormContext)
  const { setValuesObj } = useContext(EditButtonContext);
  const [isEditClicked, setIsEditClicked] = useState(false)

  useEffect(() => {
    const editButtonClickHandler =async () => {
      setValuesObj(props)

      try{
        const response = await axios.delete(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}/${props.serverId}.json`)
        updateFormValuesChanged(!formValuesChanged)
      }catch(err){
        console.log(err)
      }


    }

    if(isEditClicked){
      editButtonClickHandler()
    }

  },[isEditClicked])
  return <button onClick={() => [
    setIsEditClicked(true)
  ]} className='btn-warning rounded'>Edit</button>
}

export default EditButton