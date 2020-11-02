import React, {useContext} from 'react'
import {GlobalContext} from '../../context/globalState'

const ExpenseTransaction = ({expenseTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <li className="transaction">
                <span className="transaction-text">{expenseTransaction.expenseText}</span>
            <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
                <button className="delete-btn" onClick={() =>{
                    deleteTransaction(expenseTransaction.id)
                }}>
                <i className="fas fa-trash-alt"></i>
                </button>     
            </li>
    )
}

export default ExpenseTransaction
