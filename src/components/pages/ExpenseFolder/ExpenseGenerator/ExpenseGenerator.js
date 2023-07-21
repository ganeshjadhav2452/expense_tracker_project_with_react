import React, { useContext, useEffect,useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './ExpenseGenerator.css'
import ExpenseFormContext from '../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
import premiumIcon from '../../../../assets/premium-quality.png'
import { fetchDataFromServer } from '../../../../ReduxStore/Slices/initalExpenseData'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

function ExpenseGenerator() {
   const { formValuesChanged } = useContext(ExpenseFormContext)
   const [credit,setCredit] = useState(0)
    const [debit,setDebit] = useState(0)
    const {data} = useSelector((state)=> state.expenseData)
    const {darkMode} = useSelector((state)=> state.themeMode)
    const darkStyle = 'bg-dark border border-2 border-warning text-warning'
   useEffect(()=>{
    let dataCredit = 0;
    let dataDebit = 0;
    for(let i = 0; i<data.length; i++){

        if(data[i].debitOrCredit === 'Credit') dataCredit += Number.parseInt(data[i].amount)
        if(data[i].debitOrCredit === 'Debit') dataDebit += Number.parseInt(data[i].amount)
        console.log(typeof data[i].amount  )
        console.log(typeof dataCredit  )
    }
    setCredit(dataCredit)
    setDebit(dataDebit)
   },[data])
const dispatch = useDispatch()
   

    useEffect(()=>{
       
        dispatch(fetchDataFromServer())
       
    },[formValuesChanged])
    return (
        <div className='parent p-3'>
            <div className=''>
                <ExpenseForm />
            </div>

            <div className={` container d-flex align-items-center ${darkMode ? darkStyle:'bg-warning '}  p-3 `} style={{ borderRadius: '0.5rem' }}>
                
              
                <div class="table-wrapper mr-3 w-75">
                <h2 className={`${darkMode?'text-warning ':'text-dark border border-dark'} fw-bold h3`}>Expense Table</h2>
                    <table className={`fl-table ${darkMode?darkStyle:''}`}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Catagory</th>
                                <th>Credit/Debit</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                              
                                return (
                                    <ExpenseItem  key={item.id} serverId={item.serverId} id={item.id} description={item.description} amount={item.amount} date={item.date} debitOrCredit={item.debitOrCredit} category={item.category} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
             
                <div className={` border  rounded   shadow w-25 d-flex flex-column align-items-center p-2 justify-content-center ${darkMode?darkStyle + 'border-warning':'border-dark'}`} style={{height:'14rem',boxShadow:'0px 35px 50px rgba( 0, 0, 0, 0.2 )'}}>
                {
                        credit + debit > 10000 && <button className='btn  rounded bg-warning  border-dark mb-1'>Activate <img className='premiumImg' src={premiumIcon}/></button>
                    }
                    <h5>Realtime Expense </h5>
                    <span className='text-success fw-bold h5 mt-1'>Credit ₹{credit}</span>
                    <span className='text-danger fw-bold h5 mt-1'>Debit ₹{debit}</span>
                    <hr className='bg-danger w-100 mt-0'/>
                    <span className={` fw-bold h5 ${credit - debit <= 0? 'text-danger':'text-success'}`}>Total ₹{credit - debit}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpenseGenerator