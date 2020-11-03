//express

const express = require('express');
const app = express();

//mongoose

const mongoose = require('mongoose');

//body-parser

var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//.env

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  };

  //DB config

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const db = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

//Connect to Mongo

mongoose.connect(db, { useUnifiedTopology: true, 
    useNewUrlParser: true }).then(() => 
    console.log('MongoDB connected...')).catch(err => console.log(err));

  //test

app.get('/api/customers', (req, res) =>{
    const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'}
    ];
    res.json(customers);
});

//Routes
app.use('/transactions', require('./routes/transactions'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));