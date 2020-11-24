const Transaction = require('../models/Transaction');

exports.addExpenseTransaction = async (req, res) => {
  try{
    if(req.isAuthenticated()){
      const userID = req.user._id;
      const { expenseText, expenseAmount, reactId } = req.body;
  
      let transaction = await Transaction.findOne({ userId: userID });
  
      if (transaction) {
        transaction.expenseTransactions.push({reactId, expenseText, expenseAmount });
        transaction = await transaction.save();
        return res.status(201).send(transaction.expenseTransactions[transaction.expenseTransactions.length - 1]);
    }else{
      const newExpenseTransaction = await Transaction.create({
      userId: userID,
      expenseTransactions: [{reactId, expenseText, expenseAmount }]
  });
  
  return res.status(201).send(newExpenseTransaction.expenseTransactions[newExpenseTransaction.expenseTransactions.length - 1]);
  }
  
  }

  return res.status(400).send('Log in to save progress');
  } catch(err) {
    console.log(err)
    res.status(500).send("Something went wrong");
  }

}

exports.addIncomeTransaction = async (req, res) => {
  try{
    if(req.isAuthenticated()){
      const userID = req.user._id;
      const { incomeText, incomeAmount, reactId } = req.body;
  
      let transaction = await Transaction.findOne({ userId: userID });
  
      if (transaction) {
        transaction.incomeTransactions.push({reactId, incomeText, incomeAmount });
        transaction = await transaction.save();
        return res.status(201).send(transaction.incomeTransactions[transaction.incomeTransactions.length - 1]);
    }else{
      const newIncomeTransaction = await Transaction.create({
        userId: userID,
        incomeTransactions: [{reactId, incomeText, incomeAmount }]
  });
  
  return res.status(201).send(newIncomeTransaction.incomeTransactions[newIncomeTransaction.incomeTransactions.length - 1]);
  }
  
  }
  return res.status(400).send('Log in to save progress');
  } catch(err) {
    console.log(err)
    res.status(500).send("Something went wrong");
  }

};

exports.deleteIncomeTransaction = async (req, res) => {
  try {
    if(req.isAuthenticated()){
      const userID = req.user._id;
      const transactionID = req.params.id;
      console.log(transactionID);
      let transaction = await Transaction.findOne({ userId: userID });

      let transactionIndex = transaction.incomeTransactions.findIndex(p => p._id == transactionID);
      let transactionItem = transaction.incomeTransactions[transactionIndex];
  
      if(transactionItem){
        await transaction.incomeTransactions.pull(transactionID);
        transaction = await transaction.save();
    
        return res.status(201).send('Deleted income transaction item');
      }
      else{
        return res.status(404).send('No transaction found with that ID');
      }
    }
    return res.status(400).send('Log in to save progress');

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

exports.deleteExpenseTransaction = async (req, res) => {
  try {
    if(req.isAuthenticated()){
      const userID = req.user._id;
      const transactionID = req.params.id
      console.log(transactionID)
      let transaction = await Transaction.findOne({ userId: userID });
      
      let transactionIndex = transaction.expenseTransactions.findIndex(p => p._id == transactionID);
      console.log(transactionIndex)
      let transactionItem = transaction.expenseTransactions[transactionIndex];
      console.log(transactionItem)

      if(transactionItem){
        await transaction.expenseTransactions.pull(transactionID);
        transaction = await transaction.save();
    
        return res.status(201).send('Deleted expense transaction item');
      }
      else{
        return res.status(404).send('No transaction found with that ID');
      }
    }
    return res.status(400).send('Log in to save progress');

  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

exports.getAll = async (req, res) => {
  
try{
if(req.isAuthenticated()){
  const userID = req.user._id;
  let transaction = await Transaction.findOne({ userId: userID });
  let expTrans = [];
  let incTrans = [];

  if(transaction){
    transaction.expenseTransactions.forEach(el => expTrans.push({ id: el._id, expenseText: el.expenseText, expenseAmount: el.expenseAmount }));
    transaction.incomeTransactions.forEach(el => incTrans.push({ id: el._id, incomeText: el.incomeText, incomeAmount: el.incomeAmount }));

    let newTrans = {
      incomeTransactions: incTrans.reverse(),
      expenseTransactions: expTrans.reverse()
    };

    return res.status(201).send(newTrans);

  }
  else{

    return res.status(404).send('No transactions found');

  }

}
return res.status(400).send('Log in to save progress');
  }catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}