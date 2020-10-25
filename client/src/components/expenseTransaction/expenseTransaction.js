import React from 'react'

const ExpenseTransaction = ({expenseTransaction}) => {
    return (
        <li className="transaction">
                <span className="transaction-text">{expenseTransaction.expenseText}</span>
            <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
                <button className="delete-btn">
                <i className="fas fa-trash-alt"></i>
                </button>     
            </li>
    )
}

export default ExpenseTransaction
