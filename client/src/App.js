import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Balance from './components/balance/balance'
import AddTransaction from './components/addTransaction/addTransaction'
import IncomeList from './components/incomeList/incomeList'
import ExpenseList from './components/expenseList/expenseList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
