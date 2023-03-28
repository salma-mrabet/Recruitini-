const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');


const EmployeeSchema = new Schema ({
    firstname : {
      type: String,
      required: true,
      unique: true,
    },
    lastname :{
      type: String,
      required: true,
      unique: true,
    },
    age : {
      type: String,
      required: true,
     
    },

    email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        default:"",
        
      },
      password: {
        type: String,
       
      },
      linkedin: {
        type: String,
        default:"",
        
      },
      university: {
        type: String,
        default:"",
      },
      cvlink: {
        type: String,
        default:"",
      },
     

   
  
   
},{timestamps: true });






module.exports = mongoose.model('employee',EmployeeSchema)