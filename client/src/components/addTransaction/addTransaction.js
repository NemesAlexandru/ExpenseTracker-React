import React, {useState, useContext} from 'react'
// import {v4 as uuidv4} from 'uuid'
// import {nanoid} from 'nanoid'
import {GlobalContext} from '../../context/globalState'

const AddTransaction = () => {
const {addIncome, addExpense} = useContext(GlobalContext)

    const[income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0   
    });

    const {incomeText, incomeAmount} = income;

const onChangeIncome = e => {
setIncome({...income, [e.target.name]: e.target.value});
console.log(income);
}

const onSubmitIncome = e => {
    e.preventDefault();

    const newIncomeTransaction = {
        // id: nanoid(),
        incomeText,
        incomeAmount: incomeAmount * 1
    };
    // addIncome(newIncomeTransaction);

    //POST to save income transaction in DB

   const url = "http://localhost:5000/transactions/addIncomeTransaction"

   fetch(url, {
       credentials: 'include',
       method: 'POST',
       body: JSON.stringify({
       "incomeText": newIncomeTransaction.incomeText,
       "incomeAmount": newIncomeTransaction.incomeAmount
       }),
       headers: {
        "Content-type": "application/json; charset=UTF-8"
       }
   }).then(response => response.json())
   .then(json => addIncome({
    id: json._id,
    incomeText: json.incomeText,
    incomeAmount: json.incomeAmount
 })).catch((err) => {
    console.log(err);
})
   

    setIncome({
        incomeText: '',
        incomeAmount: 0
    })
};
//change income=expense
const[expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0 
    });

    const {expenseText, expenseAmount} = expense;

const onChangeExpense = e => {
setExpense({...expense, [e.target.name]: e.target.value});
console.log(expense);
}

const onSubmitExpense = e => {
    e.preventDefault();

    const newExpenseTransaction = {
        // id: nanoid(),
        expenseText,
        expenseAmount: expenseAmount * 1
    };
    // addExpense(newExpenseTransaction);

    

    //POST to save expense transaction in DB

   const url = "http://localhost:5000/transactions/addExpenseTransaction"


   fetch(url, {
       credentials: 'include',
       method: 'POST',
       body: JSON.stringify({
    //    "reactId": newExpenseTransaction.id,
       "expenseText": newExpenseTransaction.expenseText,
       "expenseAmount": newExpenseTransaction.expenseAmount
       }),
       headers: {
        "Content-type": "application/json; charset=UTF-8"
       }
   }).then(response => response.json())
   .then(json => addExpense({
       id: json._id,
       expenseText: json.expenseText,
       expenseAmount: json.expenseAmount
    }))
    .catch((err) => {
    console.log(err);
})


    setExpense({
        expenseText: '',
        expenseAmount: 0
    })
}
//finish

    return(
        <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
            <input type="text"
             name="incomeText"
             value={incomeText} 
             placeholder="Add Income..." 
             autoComplete="off" onChange={onChangeIncome}/>
            <input type="number"
            name="incomeAmount"
            value = {incomeAmount} 
            placeholder="Amount" 
            autoComplete="off" 
            onChange={onChangeIncome}/>
            <input type="submit" value="Submit"/>
        </div>
        </form>
        <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
            <input type="text"  name="expenseText" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense}/>
            <input type="number" name="expenseAmount" value={expenseAmount} placeholder="Amount" autoComplete="off" onChange={onChangeExpense}/>
            <input type="submit" value="Submit"/>
        </div>
        </form>
        </div>
    )
}

export default AddTransaction