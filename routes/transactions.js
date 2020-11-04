const express = require('express');
// const { route } = require('.');
const router = express.Router();

const transactionController = require('../controllers/transaction');

//add income transaction

router.post('/addIncomeTransaction', transactionController.addIncomeTransaction);

//delete income transaction

router.delete('/deleteIncomeTransaction/:id', transactionController.deleteIncomeTransaction);



module.exports = router;