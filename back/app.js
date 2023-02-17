var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

require('dotenv').config;

const routerEmployee = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');



var app = express();


//Access to fetch at 'http://localhost:3700/api/user/login' from origin 'http://localhost:3000' has been blocked by CORS policy: 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // replace * with your preferred domain(s)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
mongoose.set("strictQuery", false);
// check the error in .env ,it's not working when i call it here 
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("db connected"))
.catch(err=>console.log(err.message))

//routes
app.use('/api/user', userRoutes)
app.use('/api', routerEmployee )



module.exports = app;
