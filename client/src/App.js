import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Balance from './components/balance/balance'
import AddTransaction from './components/addTransaction/addTransaction'
import IncomeList from './components/incomeList/incomeList'
import ExpenseList from './components/expenseList/expenseList'
import {GlobalContextProvider} from './context/globalState'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from './components/loginRegister/login';
// import SignUp from './components/loginRegister/signUp';
import Navbar from './components/loginRegister/navbar'



function App() {

  return (
    <GlobalContextProvider>
      {/* <Router> */}
    <div className="App">
    <Navbar />
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
    {/* </Router> */}
    </GlobalContextProvider>
  );
}

export default App;
