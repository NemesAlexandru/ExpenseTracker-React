const Transaction = require('../models/Transaction');

exports.addIncomeTransaction = async (req, res) => {
    const { incomeText, incomeAmount } = req.body;

    try {
        let transaction = await Transaction.findOne({});
    
        if (transaction) {
            transaction.incomeTransactions.push({ incomeText, incomeAmount });
            transaction = await transaction.save();
            return res.status(201).send(transaction);
        }

   else{
       const newIncomeTransaction = await Transaction.create({
    //    userId,
       incomeTransactions: [{ incomeText, incomeAmount }]
  });

  return res.status(201).send(newIncomeTransaction);
}
    }
    catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }

};