import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Balance from './components/balance/balance'
import AddTransaction from './components/addTransaction/addTransaction'
import IncomeList from './components/incomeList/incomeList'
import ExpenseList from './components/expenseList/expenseList'
import {GlobalContextProvider} from './context/globalState'
function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
