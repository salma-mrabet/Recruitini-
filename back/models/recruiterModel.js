const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const RecruiterSchema = new Schema ({
   
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
     
      unique: true,
    },
    email: {
        type: String,
        
        unique: true,
      },
      password: {
        type: String,
        required: true
      },
      phone: {
        type: String,
       default:"",
      },
      company: {
        type: String,
       default:"",
      },
      
      //occupied position
      position: {
        type: String,
       default:"",
      },
      //about the company 
      description: {
        type: String,
       default:"",
      },


  
   
},{timestamps: true })






module.exports = mongoose.model('recruiter',RecruiterSchema)