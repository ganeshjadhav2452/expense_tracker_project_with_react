import React,{useState,useContext, useEffect, Fragment} from 'react'
import './ExpenseForm.css'
import ExpenseFormContext from '../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import LogoutButton from '../../AuthPage/LogoutButton';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../../../../ReduxStore/Slices/expenseActionManagerSlice';

function ExpenseForm() {
  const obj = useSelector((state)=> state.expenseAction.expense)
  const isEdit = useSelector((state)=> state.expenseAction.isEdit)
  const dispatch = useDispatch();
  console.log(obj)
  console.log(isEdit)
  const {formValuesChanged, updateFormValuesChanged} = useContext(ExpenseFormContext)

  const [submitClicked, setSubmitClicked] = useState(false)
  
  const email = localStorage.getItem('email').replace('@','').replace('.','')
const [formValues, setFormValues] = useState({

  description:'',
  amount:'',
  date:'',
  category:'',
  debitOrCredit:'',

})

const descriptionChangeHandler=(e)=>{
  setFormValues((prevObj)=>{
    return {
      ...prevObj,
      description : e.target.value,
    
    }
  })
}
const amountChangeHandler=(e)=>{
  setFormValues((prevObj)=>{
    return {
      ...prevObj,
      amount : e.target.value
    }
  })
}
const dateChangeHandler=(e)=>{
  setFormValues((prevObj)=>{
    return {
      ...prevObj,
      date : e.target.value
    }
  })
}
const categoryChangeHandler=(e)=>{
  setFormValues((prevObj)=>{
    return {
      ...prevObj,
      category : e.target.value
    }
  })
}
const debitOrCreditChangeHandler=(e)=>{
  setFormValues((prevObj)=>{
    return {
      ...prevObj,
      debitOrCredit : e.target.value,
      
    }
  })

  
}

useEffect(()=>{

  const submitHandler =async()=>{
  
  if(!isEdit){
     if(!formValues.description.trim()) return;
    const id = uuidv4();
    
    // Add the ID to the form values
    const formValuesWithId = {
      ...formValues,
      id: id
    };
    
    try{
      const response = await axios.post(`https://expense-tracker-134c6-default-rtdb.firebaseio.com/expenses/${email}.json`,{...formValuesWithId})
    }catch(err){
      console.log(err)
    }
    updateFormValuesChanged(!formValuesChanged)
    
    setFormValues({
      description:'',
      amount:'',
      date:'',
      category:'',
      debitOrCredit:''
    })
    
  }
  
}



  const updateHandler = async()=>{
    if(isEdit){
    const formValuesWithId = {
      ...formValues,
      id: obj.id,
      serverId:obj.serverId
    };

   await dispatch(updateExpense(formValuesWithId))
   updateFormValuesChanged(!formValuesChanged)

  }

  }
  updateHandler()
submitHandler()
},[submitClicked])

useEffect(()=>{
 
      setFormValues({
        description: obj?.description || '',
        date: obj?.date || '',
        amount: obj?.amount || '',
        debitOrCredit: obj?.debitOrCredit || '',
        category: obj?.category || ''
      })
},[obj])

  
  return (
    <Fragment>
<nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
       

       <Link style={{textDecoration:'none', color:'white'}} to='/'> <button class="btn  text-light bg-warning btn-outline-info m-1" >Home</button></Link>

       <LogoutButton/>
        
</nav>
   
    <div className='container-fluid bg-warning parentContainer' >
      

  <div  class="text-center pt-5 bg-warning ">
    <img src="https://i.ibb.co/8cDgdFX/Logo.png" alt="network-logo" width="72" height="72" />
    <h2>Star Expense Tracker</h2>
    <p>
      Below you can fill your expense details .
    </p>
  </div>

  <div class="card">

    <div class="card-body ">
    
      <form onSubmit={(e)=>{
          e.preventDefault();
        setSubmitClicked(!submitClicked)
      }} id="bookingForm" action="#" method="" class="needs-validation" novalidate autoComplete="on">

        <div class="form-group">
          <label for="inputName">Description</label>
          <input value={formValues.description} onChange={descriptionChangeHandler} type="text" class="form-control" id="inputName" name="name" placeholder="Description" required />
         
        </div>
        <div class="form-row">
       
          <div className='form-group col-md-4'>
          <label for="inputAmount">Amount</label>
          <input value={formValues.amount} onChange={amountChangeHandler}   type="number" class="form-control" id="inputAmount" name="Amount" placeholder="Amount"  required />
          </div>
     
     
       
       
      
          <div class="form-group col-md-4">
            <label for="inputDate">Date</label>
            <input value={formValues.date} onChange={dateChangeHandler}  type="date" class="form-control" id="inputDate" name="date" required />
           
          </div>
      
          <div class="mt-3 form-group col-md-4">
            <label>Start Time</label>
            <div class="d-flex flex-row justify-content-between align-items-center">
              <select  value={formValues.category} onChange={categoryChangeHandler}  class="form-control mr-1" id="category" required>
                <option value="" disabled selected> Expense Category</option>
                <option >Food</option>
                <option >Shoping</option>
                <option >Travel</option>
                <option >Medical Emergency</option>
                <option >School Expense</option>
                <option >Other</option>
              
              </select>
            

              <select value={formValues.debitOrCredit} onChange={debitOrCreditChangeHandler}  class="form-control mr-1" id="category" required>
              
              <option   >None</option>
              <option >Debit</option>
              <option >Credit</option>
              
            
            </select>
            </div>
        
     
       
        </div>
        </div>
        {!isEdit && <button class="btn btn-warning border border-dark btn-block col-lg-3 m-auto" type="submit" >Add Expense</button>}

        {isEdit &&  <button class="btn btn-info border border-dark btn-block col-lg-3 m-auto" type="submit" >Update Expense</button>}
      </form>
     
    </div>

  </div>

 
 


    </div>
    </Fragment>
  )
}

export default ExpenseForm