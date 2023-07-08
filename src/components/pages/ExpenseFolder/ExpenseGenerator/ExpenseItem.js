import React, { Fragment } from 'react'
import './ExpenseGenerator.css'
function ExpenseItem({description,amount,date,category,debitOrCredit}) {
    console.log(description,amount,date,category,debitOrCredit)
    return (
        <Fragment>
            <tr>
            <td>{date}</td>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{category}</td>
               
                <td>{debitOrCredit}</td>
            </tr>
        </Fragment>
    )
}

export default ExpenseItem