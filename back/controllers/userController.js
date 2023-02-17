const Employee = require('../models/employeeModel')
const Recruiter = require('../models/recruiterModel')
require('dotenv').config(); 
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}



// signup a user
const signupUser = async (req, res) => {
  const { firstname,lastname,age,email, password, role } = req.body

  try {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password shoud be strong : minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1')
  }

  if (role == "Employee"){
    exists = await Employee.findOne({ email })
  }else if (role == "Recruiter"){
    exists = await Recruiter.findOne({ email })
  }

  if (exists) {
    throw Error('Email already in use')
  }
  

  //  a salt is a random value that is generated and used to hash the password.
  const salt = await bcrypt.genSalt(10)  //the higher the value , the more secure the password is 
  const hash = await bcrypt.hash(password, salt)
  
  if (role == "Employee"){
    user = await Employee.create({ firstname,lastname,age,email, password: hash })
  }else if (role == "Recruiter"){
    user = await Recruiter.create({ firstname,lastname,age,email, password: hash })
  }

  // create a token
  const token = createToken(user._id)
  res.status(200).json({firstname,lastname,age,email, token, role})
 }catch (error) {
  res.status(400).json({error: error.message})
}
}




// login a user
const loginUser = async (req, res) => {
  const {email, password, role} = req.body

  try {
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    if (role == "Employee"){
      user = await Employee.findOne({ email })
    }else if (role == "Recruiter"){
      user = await Recruiter.findOne({ email })
    }

    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }


  
    // create a token
    const token = createToken(user._id)
    res.status(200).json({email, token, role})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }