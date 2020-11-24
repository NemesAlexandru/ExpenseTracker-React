import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/globalState'
import ExpenseTransaction from '../expenseTransaction/expenseTransaction'

const ExpenseList = () => {
  // const {expenseTransactions, loginUsername, loginPassword} = useContext(GlobalContext);
  const {expenseTransactions} = useContext(GlobalContext);
  
  const {getExpense} = useContext(GlobalContext);

  useEffect(() => {
    fetch('http://localhost:5000/transactions/getAll', {
      credentials: "include",
      method: 'GET',
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
        // Authorization: `Basic ${loginUsername}:${loginPassword}`,
      }
    })
        .then(res => res.json())
        .then((res) => {
            // console.log(res.expenseTransactions);
            getExpense(res);
        }).catch((err) => {
        console.log(err);
    })
}, []);

    return (
        <div className="transactions transactions-expense">
          <h2>Transaction History</h2>
          <ul className="transaction-list">
          {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
            ))}
          </ul>
        </div>
    )
}

export default ExpenseList
