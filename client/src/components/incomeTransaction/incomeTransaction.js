import React, {useContext} from 'react'
import {GlobalContext} from '../../context/globalState'

const IncomeTransaction = ({incomeTransaction}) => {
const {deleteTransaction} = useContext(GlobalContext)

    return (
        <li className="transaction">
                <span className="transaction-text">{incomeTransaction.incomeText}</span>
            <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
                <button className="delete-btn" onClick={() =>{

                     //deleting from front-end
                     deleteTransaction(incomeTransaction.id)

                     //deleting from DB
                     fetch('http://localhost:5000/transactions/deleteIncomeTransaction/' + incomeTransaction.id, {
                     method: 'DELETE',
                     })
                     .catch((err) => {
                         console.log(err);
                     })
                }}>
                <i className="fas fa-trash-alt"></i>
                </button>     
            </li>
    )
}

export default IncomeTransaction
