const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema ({
    Firstname : String,
    Lastname : String,
    Age : String,
    Email : String,
  
   
},{timestamps: true })






module.exports = mongoose.model('employee',EmployeeSchema)