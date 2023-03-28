const jwt = require('jsonwebtoken')
const Employee = require('../models/employeeModel')
const Recruiter= require('../models/recruiterModel')


const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization ,role} = req.headers //contains the web token
  // const role = req.body.role

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1] // because the string is in this form "Bearer kjsfyegzycbdbchsbfksgei(the token)"

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    //req.user_role is the role of the current user
    //req.user is the id of the current user

    if(role=="Employee"){
        req.user = await Employee.findOne({ _id }).select('_id')  
    }else if(role=="Recruiter"){
        req.user = await Recruiter.findOne({ _id }).select('_id')  
    }
    
    console.log(req.user)

    if(!req.user){
      throw Error("Role and Id are not compatible")
    }else{
      next()  //the next handlerfunction
    }

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.exports = requireAuth