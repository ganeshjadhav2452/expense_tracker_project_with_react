import React,{useRef,useState,useContext} from 'react'
import './ExpenseForm.css'
import ExpenseFormContext from '../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
function ExpenseForm() {
  const {updateFormValues} = useContext(ExpenseFormContext)
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
      description : e.target.value
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
      debitOrCredit : e.target.value
    }
  })
}

const submitHandler =(e)=>{
  e.preventDefault();

  updateFormValues(formValues)

  setFormValues({
    description:'',
    amount:'',
    date:'',
    category:'',
    debitOrCredit:''
  })
 
}
  
  return (
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
    
      <form onSubmit={submitHandler} id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">

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
              
              <option >Debit</option>
              <option >Credit</option>
              
            
            </select>
            </div>
        
     
       
        </div>
        </div>
        <button class="btn btn-warning border border-dark btn-block col-lg-3 m-auto" type="submit">Add Expense</button>
      </form>
     
    </div>

  </div>

 
 


    </div>
  )
}

export default ExpenseForm