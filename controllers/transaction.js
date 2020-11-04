const Transaction = require('../models/Transaction');

exports.addExpenseTransaction = async (req, res) => {
  const { expenseText, expenseAmount } = req.body;

  try {
      let transaction = await Transaction.findOne({});
  
      if (transaction) {
          transaction.expenseTransactions.push({ expenseText, expenseAmount });
          transaction = await transaction.save();
          return res.status(201).send(transaction);
      }

 else{
     const newExpenseTransaction = await Transaction.create({
  //    userId,
     expenseTransactions: [{ expenseText, expenseAmount }]
});

return res.status(201).send(newExpenseTransaction);
}
  }
  catch (err) {
  console.log(err);
  res.status(500).send("Something went wrong");
}

};

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

exports.deleteIncomeTransaction = async (req, res) => {
  try {

    const transactionID = req.params.id;
    let transaction = await Transaction.findOne({});
    let transactionIndex = transaction.incomeTransactions.findIndex(p => p._id == transactionID);
    let transactionItem = transaction.incomeTransactions[transactionIndex];

    if(transactionItem){
      await transaction.incomeTransactions.pull(transactionID);
      transaction = await transaction.save();
  
      return res.status(201).send('Deleted income transaction item');
    }

    else{
      return res.status(201).send('No transaction found with that ID');
    }

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

exports.deleteExpenseTransaction = async (req, res) => {
  try {

    const transactionID = req.params.id;
    let transaction = await Transaction.findOne({});
    let transactionIndex = transaction.expenseTransactions.findIndex(p => p._id == transactionID);
    let transactionItem = transaction.expenseTransactions[transactionIndex];

    if(transactionItem){
      await transaction.expenseTransactions.pull(transactionID);
      transaction = await transaction.save();
  
      return res.status(201).send('Deleted expense transaction item');
    }

    else{
      return res.status(201).send('No transaction found with that ID');
    }

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}