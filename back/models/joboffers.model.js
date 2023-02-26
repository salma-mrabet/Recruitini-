const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// const {ObjectId} = mongoose.Schema.Types;


const JobSchema = new Schema ({
  jobtitle	: {
    type: String,
    

  },

    company : {
      type: String,
      

    },

    jobdescription : {
      type: String,
      

    },

    joblocation : {
      type: String,
      
 
    },
    
    skills: {
      type: String,
      
    },
 
  
   
},{timestamps: true })






module.exports = mongoose.model('job',JobSchema)