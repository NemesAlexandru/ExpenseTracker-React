import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/globalState'
import IncomeTransaction from '../incomeTransaction/incomeTransaction'

const IncomeList = () => {
const {incomeTransactions} = useContext(GlobalContext);

const {getIncome} = useContext(GlobalContext)

  useEffect(() => {
    fetch('http://localhost:5000/transactions/getAll')
        .then(res => res.json())
        .then((res) => {
            // console.log(res.incomeTransactions);
            getIncome(res);
        }).catch((err) => {
        console.log(err);
    })
}, []);

    return (
        <div className="transactions transactions-income">
          <h2>Transaction History</h2>
          <ul className="transaction-list">
            {incomeTransactions.map(incomeTransaction => (
              <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction}/>
            ))}
          </ul>
        </div>
    )
}

export default IncomeList
