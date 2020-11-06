const express = require('express');
// const { route } = require('.');
const router = express.Router();

const transactionController = require('../controllers/transaction');

//add income transaction

router.post('/addIncomeTransaction', transactionController.addIncomeTransaction);

//add expense transaction

router.post('/addExpenseTransaction', transactionController.addExpenseTransaction);

//delete income transaction

router.delete('/deleteIncomeTransaction/:id', transactionController.deleteIncomeTransaction);

//delete expense transaction

router.delete('/deleteExpenseTransaction/:id', transactionController.deleteExpenseTransaction);

//get all transactions

router.get('/getAll', transactionController.getAll);



module.exports = router;