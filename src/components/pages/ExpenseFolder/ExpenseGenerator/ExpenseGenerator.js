import React, { useContext } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseItem from './ExpenseItem'
import './ExpenseGenerator.css'
import ExpenseFormContext from '../../../../contextStore/ExpenseFormContext/ExpenseFormContext'
function ExpenseGenerator() {
    const { formValues } = useContext(ExpenseFormContext)
    return (
        <div>
            <div className=''>
                <ExpenseForm />
            </div>

            <div className='container bg-warning mt-3 mb-5  p-3 ' style={{ borderRadius: '0.5rem' }}>
                <h2>Responsive Table</h2>
                <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>


                                <th>Catagory</th>
                                <th>Credit/Debit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formValues.map((item) => <ExpenseItem key={item.amount}description={item.description} amount={item.amount} date={item.date} debitOrCredit={item.debitOrCredit} category={item.category} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseGenerator