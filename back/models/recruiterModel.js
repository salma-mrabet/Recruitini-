const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const RecruiterSchema = new Schema ({
    // firstname : String,
    // lastname : String,
    // age : String,
    // email : String,
    firstname : {
      type: String,
      required: true,
      unique: true,
    },
    lastname : {
      type: String,
      required: true,
      unique: true,
    },
    age : {
      type: String,
      required: true,
      unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true
      }
  
   
},{timestamps: true })






module.exports = mongoose.model('recruiter',RecruiterSchema)