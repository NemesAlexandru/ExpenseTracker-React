const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    incomeTransactions: [
        { transactionId: Number, 
        incomeText: String, 
        incomeAmount: Number }
    ],
    expenseTransactions: [
        { transactionId: Number,
            incomeText: String, 
            incomeAmount: Number }
    ]
},
{ timestamps: true }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;