const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    // {
    //     userId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    // },
    incomeTransactions: [
       {   
            incomeText: String, 
            incomeAmount: Number }
    ],
    expenseTransactions: [
        {   
            expenseText: String, 
            expenseAmount: Number }
    ]
},
{ timestamps: true }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;