var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// require('dotenv').config;

const routerEmployee = require('./routes/employee.route');
const routerRecruiter = require('./routes/recruiter.route');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://pcd:WIneg3GApYMlB4z2@cluster0.mvvc3sz.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("db connected"))
.catch(err=>console.log(err.message))

app.use('/',routerEmployee);
app.use('/',routerRecruiter);


module.exports = app;
