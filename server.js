//.env

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
};

//express

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const app = express();


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

  //body-parser

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// session

app.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);



const bcrypt = require('bcryptjs');

//CORS

const cors = require('cors')

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);



//routes to passport actions

const User = require("./models/User");

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      console.log('No User Exists or bad credentials')
      res.status(400).send("No User Exists or bad credentials");}
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
        console.log(req.isAuthenticated());
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {

  const { password2 } = req.body;

  const errors = [];

  if(password2 !== req.body.password){
    errors.push({msg: 'passwords should match'})
  }
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.status(400).send("User Already Exists");
    if (!doc && errors.length == 0) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
    else res.status(400).send("Passwords should match")
  });
});

//Routes
app.use('/transactions', require('./routes/transactions'));
// app.use('/users', require('./routes/users'));

app.get("/user", (req, res) => {
  console.log(req.isAuthenticated())
  console.log(req.user)
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//finish


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

