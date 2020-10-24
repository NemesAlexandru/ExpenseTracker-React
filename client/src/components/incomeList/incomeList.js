import React from 'react'

const IncomeList = () => {
    return (
        <div className="transactions transactions-income">
          <h2>Transaction History</h2>
          <ul classname="transaction-list">
            <li className="transaction">
                <span classname="transaction-text">Salary</span>
                <span classname="transaction-amount">$5000</span>
                <button className="delete-btn">
                <i className="fas fa-trash-alt"></i>
                </button>     
            </li>
          </ul>
        </div>
    )
}

export default IncomeList
