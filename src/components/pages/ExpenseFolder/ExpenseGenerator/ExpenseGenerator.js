import React, { useContext, useEffect,useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './ExpenseGenerator.css'
import ExpenseFormContext from '../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
import axios from 'axios'
function ExpenseGenerator() {
   const { formValuesChanged } = useContext(ExpenseFormContext)
   const [fetchedData, setFetchedData] = useState([])
    
    const email = localStorage.getItem('email').replace('@','').replace('.','')


    const getExpenses = async()=>{
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
  
        setFetchedData(fetchedDataFromServer)
    
    }

    useEffect(()=>{
       
        getExpenses()
       
    },[formValuesChanged])
    return (
        <div className='parent p-3'>
            <div className=''>
                <ExpenseForm />
            </div>

            <div className='container bg-warning mt-3 mb-5  p-3 ' style={{ borderRadius: '0.5rem' }}>
                <h2 className='text-dark fw-bold'>Expense Table</h2>
                <div class="table-wrapper">
                    <table class="fl-table">
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
                            {fetchedData.map((item) => <ExpenseItem  key={item.id} serverId={item.serverId} id={item.id} description={item.description} amount={item.amount} date={item.date} debitOrCredit={item.debitOrCredit} category={item.category} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseGenerator