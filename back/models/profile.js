const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const profileSchema = new Schema ({
  title	: {
    type: String,
    

  },

    body: {
      type: String,
      

    },
    cv: {
        type: String,
        
  
      },
  

 
  
   
},{timestamps: true })






module.exports = mongoose.model('profile',profileSchema)