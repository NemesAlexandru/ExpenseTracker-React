import React, {createContext, useReducer} from 'react'
import AppReducer from './appReducer'

const initialState = {
    incomeTransactions: [
{ id: 1, incomeText: "Car sold", incomeAmount: 15000 },
{ id: 2, incomeText: "Salary", incomeAmount: 5000 },
{ id: 3, incomeText: "Bonus", incomeAmount: 13000 }
    ],
    expenseTransactions: [
{ id: 4, expenseText: "Rent", incomeAmount: 1000 },
{ id: 5, expenseText: "Bank", incomeAmount: 2000 },
{ id: 6, expenseText: "Clothes", incomeAmount: 500 }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={
            { incomeTransactions: state.incomeTransactions,
              expenseTransactions: state.expenseTransactions }
        }>
        {children}
        </GlobalContext.Provider>
    );
};


