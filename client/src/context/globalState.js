import React, {createContext, useReducer} from 'react'
import AppReducer from './appReducer'


const initialState = {
    // loginUsername: "",
    // loginPassword: "",
    incomeTransactions: [],
    expenseTransactions: [],
};


export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    const getExpense = expenseTransactions => {
      dispatch({
        type: 'GET_EXPENSE',
        payload: expenseTransactions
    })
    }

    const getIncome = incomeTransactions => {
      dispatch({
        type: 'GET_INCOME',
        payload: incomeTransactions
    })
    }
  

    const addIncome = incomeTransaction => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }

    const addExpense = expenseTransaction => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }

    const deleteTransaction = (id) => {
dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
})
    }

    return(
        <GlobalContext.Provider value={
            { 
            // loginUsername: state.loginUsername,
            //   loginPassword: state.loginPassword,
              incomeTransactions: state.incomeTransactions,
              expenseTransactions: state.expenseTransactions,
              getExpense, getIncome, addIncome, addExpense, deleteTransaction }
        }>
        {children}
        </GlobalContext.Provider>
    );
};


