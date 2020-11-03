const express = require('express');
// const { route } = require('.');
const router = express.Router();

const transactionController = require('../controllers/transaction');

router.post('/addIncomeTransaction', transactionController.addIncomeTransaction);

module.exports = router;