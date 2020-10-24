import React from 'react'

const ExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
          <h2>Transaction History</h2>
          <ul classname="transaction-list">
            <li className="transaction">
                <span classname="transaction-text">Rent</span>
                <span classname="transaction-amount">$500</span>
                <button className="delete-btn">
                <i className="fas fa-trash-alt"></i>
                </button>     
            </li>
          </ul>
        </div>
    )
}

export default ExpenseList
