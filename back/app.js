var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


require('dotenv').config;

const routerEmployee = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const routerJobOffers = require('./routes/joboffers');
const routerProfile = require('./routes/profileRoutes');
// const routerRecruiter = require('./routes/recruiterRoutes');



var app = express();

const cors = require('cors');
app.use(cors());




//Access to fetch at 'http://localhost:3700/api/user/login' from origin 'http://localhost:3000' has been blocked by CORS policy: 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("db connected"))
.catch(err=>console.log(err.message))

//routes
app.use('/api/user', userRoutes)
app.use('/api', routerEmployee )
app.use('/api/job', routerJobOffers )
app.use('/api', routerProfile)
// app.use('/api', routerRecruiter )


module.exports = app;
